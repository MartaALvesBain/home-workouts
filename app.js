
(function(){
const h = React.createElement;
const STORAGE = 'homeStrengthReactStateV1';
const LEGACY = 'homeStrengthState';

function initialData(){
  try{
    const saved = localStorage.getItem(STORAGE);
    if(saved) return JSON.parse(saved);
    const legacy = localStorage.getItem(LEGACY);
    if(legacy){
      const parsed = JSON.parse(legacy);
      if(parsed && Array.isArray(parsed.logs)) return parsed;
    }
  }catch(e){}
  return {logs:[],active:null,week:1};
}
function key(w,si,ei){return w+'-'+si+'-'+ei}
function today(){return new Date().toISOString().slice(0,10)}
function fmtDate(d){try{return new Date(d+'T12:00:00').toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}catch(e){return d}}
function thisWeek(dateStr){
  const d=new Date(dateStr+'T12:00:00'), n=new Date();
  const day=(n.getDay()+6)%7, monday=new Date(n); monday.setHours(0,0,0,0); monday.setDate(n.getDate()-day);
  const next=new Date(monday); next.setDate(monday.getDate()+7); return d>=monday&&d<next;
}
function desc(name){return exerciseDescriptions[name] || 'Move through a comfortable, controlled range. Keep breathing steady and modify the exercise if it causes sharp or increasing pain.'}
function deepCopy(x){return JSON.parse(JSON.stringify(x))}

class App extends React.Component{
  constructor(props){
    super(props); this.state={data:initialData(),view:'train'}; this.fileRef=React.createRef();
  }
  persist(data, cb){
    try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch(e){}
    this.setState({data:data},cb);
  }
  setView(view){this.setState({view:view})}
  startWorkout(w){
    const data=deepCopy(this.state.data), wk=Number(data.week||1);
    const active={workout:w,started:new Date().toISOString(),week:wk,notes:'',exercises:{}};
    workouts[w].sections.forEach((s,si)=>s.exercises.forEach((e,ei)=>{
      const base=e.sets||0;
      const target=(wk>=3&&wk!==5&&s.name.indexOf('Strength')===0)?3:base;
      active.exercises[key(w,si,ei)]={
        completed:(e.type==='timer'||e.type==='reps')?false:null,
        sets:Array.from({length:target},()=>({weight:e.weight==null?'':e.weight,reps:e.reps==null?'':e.reps,done:false}))
      };
    }));
    data.active=active; this.persist(data,()=>this.setState({view:'train'}));
  }
  cancel(){if(!confirm('Cancel this workout? Current entries will be lost.'))return; const d=deepCopy(this.state.data);d.active=null;this.persist(d)}
  finish(){const d=deepCopy(this.state.data);if(!d.active)return;d.logs.unshift(Object.assign({},d.active,{finished:new Date().toISOString(),date:today()}));d.active=null;this.persist(d,()=>this.setState({view:'history'}))}
  toggleSimple(k){const d=deepCopy(this.state.data);d.active.exercises[k].completed=!d.active.exercises[k].completed;this.persist(d)}
  updateSet(k,i,field,value){const d=deepCopy(this.state.data);d.active.exercises[k].sets[i][field]=value;this.persist(d)}
  toggleSet(k,i){const d=deepCopy(this.state.data);d.active.exercises[k].sets[i].done=!d.active.exercises[k].sets[i].done;this.persist(d)}
  note(v){const d=deepCopy(this.state.data);d.active.notes=v;this.persist(d)}
  week(v){const d=deepCopy(this.state.data);d.week=Number(v);this.persist(d)}
  deleteLog(i){if(!confirm('Delete this workout log?'))return;const d=deepCopy(this.state.data);d.logs.splice(i,1);this.persist(d)}
  exportData(){
    const blob=new Blob([JSON.stringify(this.state.data,null,2)],{type:'application/json'}), a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download='home-strength-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),250);
  }
  importClick(){this.fileRef.current.click()}
  importFile(ev){
    const f=ev.target.files&&ev.target.files[0]; if(!f)return;
    const r=new FileReader(); r.onload=()=>{try{const d=JSON.parse(r.result);if(!d||!Array.isArray(d.logs))throw Error();this.persist(d);alert('Backup imported.')}catch(e){alert('That file does not look like a Home Strength backup.')}};r.readAsText(f);ev.target.value='';
  }
  renderHow(e){return h('details',{className:'howto'},h('summary',null,'How to'),h('div',{className:'howtext'},desc(e.name)))}
  renderExercise(w,si,ei,e){
    const rec=this.state.data.active.exercises[key(w,si,ei)], k=key(w,si,ei), simple=e.type==='timer'||e.type==='reps';
    return h('div',{className:'exercise',key:k},
      h('div',{className:'exTop'},h('div',null,h('div',{className:'exName'},e.name),h('div',{className:'dose'},e.dose)),
        simple?h('button',{className:'check '+(rec.completed?'done':''),onClick:()=>this.toggleSimple(k),'aria-label':'Mark complete'},rec.completed?'✓':''):null),
      !simple?h('div',{className:'sets'},rec.sets.map((s,i)=>h('div',{className:'setrow',key:i},
        h('div',{className:'setno'},'S'+(i+1)),
        e.type&&e.type.indexOf('weighted')===0?h('div',{className:'field'},h('input',{inputMode:'decimal',value:s.weight,onChange:ev=>this.updateSet(k,i,'weight',ev.target.value)}),h('span',{className:'unit'},'kg')):h('div',{className:'field'},h('input',{value:'—',disabled:true})),
        h('div',{className:'field'},h('input',{inputMode:'numeric',value:s.reps,onChange:ev=>this.updateSet(k,i,'reps',ev.target.value)}),h('span',{className:'unit'},e.unit||'reps')),
        h('button',{className:'check '+(s.done?'done':''),onClick:()=>this.toggleSet(k,i),'aria-label':'Mark set complete'},s.done?'✓':'')
      ))):null,
      h('div',{className:'cue'},e.cue),this.renderHow(e)
    );
  }
  renderTrain(){
    const d=this.state.data;
    if(d.active){
      const w=d.active.workout, wd=workouts[w];
      return h(React.Fragment,null,
        h('div',{className:'activeHead'},h('div',null,h('div',{className:'kicker'},'Week '+d.active.week),h('h1',null,wd.title),h('div',{className:'muted'},wd.focus+' · '+wd.duration)),h('span',{className:'badge'},'In progress')),
        wd.sections.map((sec,si)=>h('div',{className:'card',key:si,style:{marginBottom:'10px'}},h('h2',null,sec.name),sec.exercises.map((e,ei)=>this.renderExercise(w,si,ei,e)))),
        h('div',{className:'card'},h('h2',null,'Workout notes'),h('textarea',{className:'notes',placeholder:'Energy, discomfort, treadmill settings, anything to remember…',value:d.active.notes||'',onChange:e=>this.note(e.target.value)}),h('div',{className:'notice'},'Muscle effort is expected. Stop or modify an exercise if it repeatedly causes sharp or increasing neck, wrist or lower-back pain.')),
        h('div',{className:'stickyFinish'},h('div',{className:'stickyInner'},h('button',{className:'secondary',onClick:()=>this.cancel()},'Cancel'),h('button',{className:'primary',onClick:()=>this.finish()},'Finish workout')))
      );
    }
    const home=['A','B','C','D'], travel=['T1','T2'];
    return h(React.Fragment,null,
      h('div',{className:'hero'},h('div',{className:'kicker'},'Your program'),h('h1',null,'Ready to train?'),h('p',{className:'muted'},'Choose a home session or a no-equipment travel workout.')),
      h('div',{className:'stats'},
        h('div',{className:'stat'},h('strong',null,d.week),h('span',null,'Current week')),
        h('div',{className:'stat'},h('strong',null,d.logs.filter(x=>thisWeek(x.date)).length),h('span',null,'Sessions this week')),
        h('div',{className:'stat'},h('strong',null,d.logs.length),h('span',null,'Total sessions'))),
      this.renderWorkoutGroup('Home workouts',home),h('div',{className:'groupGap'}),this.renderWorkoutGroup('Travel · no weights',travel)
    );
  }
  renderWorkoutGroup(label,ids){
    return h(React.Fragment,null,h('div',{className:'sectionLabel'},h('h3',null,label),h('span',null,ids.length+' options')),
      h('div',{className:'stack'},ids.map(w=>h('div',{className:'card workoutCard',key:w},h('div',null,h('h3',null,workouts[w].title),h('div',{className:'meta'},workouts[w].focus+' · '+workouts[w].duration)),h('button',{className:(w==='D'?'secondary':'primary'),onClick:()=>this.startWorkout(w)},'Start')))));
  }
  renderPlan(){
    const ids=['A','B','C','D','T1','T2'];
    return h(React.Fragment,null,
      h('div',{className:'hero'},h('div',{className:'kicker'},'8-week block'),h('h1',null,'Your plan'),h('p',{className:'muted'},'Three home strength days, optional conditioning, and two bodyweight travel alternatives.')),
      h('div',{className:'card',style:{marginBottom:'12px'}},h('h2',null,'Current week'),h('div',{style:{height:'10px'}}),h('select',{className:'select',value:this.state.data.week,onChange:e=>this.week(e.target.value)},Object.keys(weeks).map(w=>h('option',{value:w,key:w},'Week '+w+' — '+weeks[w])))),
      h('div',{className:'stack'},ids.map(w=>h('div',{className:'card',key:w},
        h('div',{className:'sectionLabel',style:{padding:'0 0 8px'}},h('div',null,h('h2',null,workouts[w].title),h('div',{className:'tiny'},workouts[w].focus)),h('span',{className:'badge'},workouts[w].duration)),
        workouts[w].sections.map((sec,si)=>h('div',{key:si,style:{marginTop:'13px'}},h('div',{className:'kicker'},sec.name),sec.exercises.map((e,ei)=>h('div',{className:'progressRow',key:ei},h('div',null,h('div',{className:'progressTitle'},e.name),this.renderHow(e)),h('div',{className:'tiny',style:{textAlign:'right'}},e.dose))))),
        h('div',{className:'actions'},h('button',{className:'primary',onClick:()=>this.startWorkout(w)},'Start workout'))
      )))
    );
  }
  renderHistory(){
    const logs=this.state.data.logs;
    return h(React.Fragment,null,h('div',{className:'hero'},h('div',{className:'kicker'},'Training log'),h('h1',null,'History'),h('p',{className:'muted'},'Your completed sessions are stored only on this device unless you export a backup.')),
      h('div',{className:'card'},logs.length?logs.map((l,i)=>{
        const sets=Object.values(l.exercises||{}).reduce((n,x)=>n+(x.sets?x.sets.filter(s=>s.done).length:0),0);
        return h('div',{className:'historyRow',key:i},h('div',null,h('div',{className:'historyTitle'},workouts[l.workout]?workouts[l.workout].title:l.workout),h('div',{className:'tiny'},fmtDate(l.date)+' · Week '+l.week+' · '+sets+' logged sets'+(l.notes?' · '+l.notes:''))),h('button',{className:'smallBtn',onClick:()=>this.deleteLog(i)},'Delete'));
      }):h('div',{className:'empty'},'No completed workouts yet.')),
      h('div',{className:'card',style:{marginTop:'12px'}},h('h2',null,'Local backup'),h('p',{className:'tiny'},'Export periodically if you want protection against browser/app data being cleared or when moving to a new phone.'),h('div',{className:'backupRow'},h('button',{className:'secondary',onClick:()=>this.exportData()},'Export'),h('button',{className:'secondary',onClick:()=>this.importClick()},'Import')),h('input',{ref:this.fileRef,className:'hiddenInput',type:'file',accept:'application/json,.json',onChange:e=>this.importFile(e)}))
    );
  }
  renderProgress(){
    const names=['Supported split squat','1-arm dumbbell row','DB Romanian deadlift','DB floor press','Goblet squat','Supported 1-leg RDL','DB hip thrust / glute bridge','Reverse lunge / split squat'];
    const best={};
    this.state.data.logs.forEach(l=>{const wd=workouts[l.workout];if(!wd)return;wd.sections.forEach((sec,si)=>sec.exercises.forEach((e,ei)=>{if(names.indexOf(e.name)<0)return;const r=l.exercises&&l.exercises[key(l.workout,si,ei)];(r&&r.sets?r.sets:[]).filter(s=>s.done&&Number(s.weight)).forEach(s=>{const kg=Number(s.weight),reps=Number(s.reps)||0,b=best[e.name];if(!b||kg>b.kg||(kg===b.kg&&reps>b.reps))best[e.name]={kg,reps,date:l.date};});}));});
    return h(React.Fragment,null,h('div',{className:'hero'},h('div',{className:'kicker'},'Simple progression'),h('h1',null,'Progress'),h('p',{className:'muted'},'Best logged working set for your main weighted exercises.')),
      h('div',{className:'card'},names.map(n=>h('div',{className:'progressRow',key:n},h('div',null,h('div',{className:'progressTitle'},n),h('div',{className:'tiny'},best[n]?fmtDate(best[n].date):'No data yet')),h('div',{style:{textAlign:'right'}},h('div',{className:'progressTitle'},best[n]?best[n].kg+' kg':'—'),h('div',{className:'tiny'},best[n]?best[n].reps+' reps':''))))));
  }
  renderNav(){const items=[['train','◉','Train'],['plan','≡','Plan'],['history','◷','History'],['progress','↗','Progress']];return h('div',{className:'bottomNav'},h('div',{className:'bottomNavInner'},items.map(it=>h('button',{key:it[0],className:'navBtn '+(this.state.view===it[0]?'active':''),onClick:()=>this.setView(it[0])},h('span',{className:'ico'},it[1]),it[2]))))}
  render(){
    let content=this.renderTrain(); if(this.state.view==='plan')content=this.renderPlan(); if(this.state.view==='history')content=this.renderHistory(); if(this.state.view==='progress')content=this.renderProgress();
    return h('div',{className:'app'},h('div',{className:'topbar'},h('div',null,h('div',{className:'brand'},'Home Strength'),h('div',{className:'subtitle'},'Strength · conditioning · travel')),h('button',{className:'pillBtn',onClick:()=>this.exportData()},'Backup')),content,this.renderNav());
  }
}
ReactDOM.render(h(App),document.getElementById('root'));
})();
