"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7602],{7602:(w,m,r)=>{r.r(m),r.d(m,{ion_picker_column_internal:()=>g});var v=r(5861),o=r(7205),_=r(5729),c=r(3756),h=r(7683),I=r(2854);const g=class{constructor(s){(0,o.r)(this,s),this.ionChange=(0,o.e)(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=(e,i=!0)=>{const{el:t,isColumnVisible:l}=this;if(l){const n=e.offsetTop-3*e.clientHeight+e.clientHeight/2;t.scrollTop!==n&&t.scroll({top:n,left:0,behavior:i?"smooth":void 0})}},this.inputModeChange=e=>{if(!this.numericInput)return;const{useInputMode:i,inputModeColumn:t}=e.detail;this.setInputModeActive(!(!i||void 0!==t&&t!==this.el))},this.setInputModeActive=e=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=e}:this.isActive=e},this.initializeScrollListener=()=>{const{el:e}=this;let i,t=this.activeItem;const l=()=>{(0,c.r)(()=>{i&&(clearTimeout(i),i=void 0),this.isScrolling||((0,h.a)(),this.isScrolling=!0);const n=e.getBoundingClientRect(),d=e.shadowRoot.elementFromPoint(n.x+n.width/2,n.y+n.height/2);null!==t&&t.classList.remove(a),d!==t&&(0,h.b)(),t=d,d.classList.add(a),i=setTimeout(()=>{this.isScrolling=!1,(0,h.h)();const{scrollEndCallback:f}=this;f&&(f(),this.scrollEndCallback=void 0);const k=d.getAttribute("data-index");if(null===k)return;const x=parseInt(k,10),b=this.items[x];b.value!==this.value&&this.setValue(b.value)},250)})};(0,c.r)(()=>{e.addEventListener("scroll",l),this.destroyScrollListener=()=>{e.removeEventListener("scroll",l)}})}}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver(i=>{var t;i[0].isIntersecting?(this.isColumnVisible=!0,(0,c.g)(this.el).querySelector(`.${a}`)?.classList.remove(a),this.scrollActiveItemIntoView(),null===(t=this.activeItem)||void 0===t||t.classList.add(a),this.initializeScrollListener()):(this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0))},{threshold:.001}).observe(this.el);const e=this.el.closest("ion-picker-internal");null!==e&&e.addEventListener("ionInputModeChange",i=>this.inputModeChange(i))}componentDidRender(){var s;const{activeItem:e,items:i,isColumnVisible:t,value:l}=this;t&&(e?this.scrollActiveItemIntoView():(null===(s=i[0])||void 0===s?void 0:s.value)!==l&&this.setValue(i[0].value))}scrollActiveItemIntoView(){var s=this;return(0,v.Z)(function*(){const e=s.activeItem;e&&s.centerPickerItemInView(e,!1)})()}setValue(s){var e=this;return(0,v.Z)(function*(){const{items:i}=e;e.value=s;const t=i.find(l=>l.value===s);t&&e.ionChange.emit(t)})()}get activeItem(){return(0,c.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]`)}render(){const{items:s,color:e,isActive:i,numericInput:t}=this,l=(0,_.b)(this);return(0,o.h)(o.H,{tabindex:0,class:(0,I.c)(e,{[l]:!0,"picker-column-active":i,"picker-column-numeric-input":t})},(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),s.map((n,p)=>(0,o.h)("div",{class:"picker-item","data-value":n.value,"data-index":p,onClick:u=>{this.centerPickerItemInView(u.target)}},n.text)),(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,o.h)("div",{class:"picker-item picker-item-empty"},"\xa0"))}get el(){return(0,o.i)(this)}static get watchers(){return{value:["valueChange"]}}},a="picker-item-active";g.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"}}}]);