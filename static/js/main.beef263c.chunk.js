(this.webpackJsonptodowebapp=this.webpackJsonptodowebapp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/checked.6ff8ef53.svg"},15:function(e,t,a){e.exports=a.p+"static/media/not-checked.0b454429.svg"},19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),s=a.n(o),c=(a(24),a(12)),l=a(13),i=a(18),u=a(17),d=a(35),m=a(14),p=a.n(m),v=a(15),f=a.n(v),h=a(3),k=(a(25),a(6)),T=function(e){return{type:"TODOTASKS",payload:e}},E=function(e){return{type:"REMOVETASK",payload:e}},O=function(e){return{type:"DONETASK",payload:e}},b=function(){return{type:"SORTTODOTASK"}},y=function(){return{type:"SORTDONETASK"}},g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={err:""},e.addTask=function(t){t.preventDefault();var a=t.target[0].value,n=e.state.err;0==a.length?n="Please enter the task to be added":a.length>20?n="Must be 20 characters or less":(n="",e.props.addTask(a)),e.setState({err:n})},e.taskHandler=function(t,a){e.props.removeTask(t),e.props.addDoneTask(a)},e.sortList=function(){e.props.sortToDoTasks(),e.props.sortDoneTasks()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.err,a=this.props,n=a.tasks,o=a.completedTasks;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},"Tasks"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.addTask},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:" Add a task "})),r.a.createElement(d.a,{variant:"primary",type:"submit"},"Add"),r.a.createElement(d.a,{variant:"primary",onClick:this.sortList},"Sort")),t.length>0&&r.a.createElement("div",{className:"errmsg"},t)),r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"list"},r.a.createElement("h4",null,"To-do"),n.map((function(t,a){return r.a.createElement("div",{className:"todotask"},r.a.createElement("img",{onClick:function(){return e.taskHandler(a,t)},src:f.a,alt:"unchecked logo"}),r.a.createElement("span",null,t))}))),r.a.createElement("div",{className:"list"},r.a.createElement("h4",null,"Completed"),o.map((function(e,t){return r.a.createElement("div",{className:"completedtask"},r.a.createElement("img",{src:p.a,alt:"checked logo"}),r.a.createElement("span",null,e))}))))))}}]),a}(n.Component),S=Object(k.b)((function(e){return{tasks:e.tasks,completedTasks:e.completedTasks}}),(function(e){return Object(h.a)({addTask:T,removeTask:E,addDoneTask:O,sortToDoTasks:b,sortDoneTasks:y},e)}))(g);a(32);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(4),N=[];var A=[];var j=Object(h.b)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODOTASKS":return e=[].concat(Object(D.a)(e),[t.payload]);case"REMOVETASK":return e.splice(t.payload,1),e;case"SORTTODOTASK":return e.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:1})),Object(D.a)(e);default:return e}},completedTasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DONETASK":return e=[].concat(Object(D.a)(e),[t.payload]);case"SORTDONETASK":return e.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:1})),Object(D.a)(e);default:return e}}}),K=Object(h.c)(j);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{store:K},r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.beef263c.chunk.js.map