import{P as h,s as r,m as d}from"./index-rtHF9Jzw.js";class f extends h{constructor(t){t=t||{},super(t),this.condition_=t.condition?t.condition:r,this.lastAngle_=void 0,this.lastMagnitude_=void 0,this.lastScaleDelta_=0,this.duration_=t.duration!==void 0?t.duration:400}handleDragEvent(t){if(!d(t))return;const a=t.map,e=a.getSize(),n=t.pixel,i=n[0]-e[0]/2,s=e[1]/2-n[1],u=Math.atan2(s,i),l=Math.sqrt(i*i+s*s),o=a.getView();if(this.lastAngle_!==void 0){const c=this.lastAngle_-u;o.adjustRotationInternal(c)}this.lastAngle_=u,this.lastMagnitude_!==void 0&&o.adjustResolutionInternal(this.lastMagnitude_/l),this.lastMagnitude_!==void 0&&(this.lastScaleDelta_=this.lastMagnitude_/l),this.lastMagnitude_=l}handleUpEvent(t){if(!d(t))return!0;const e=t.map.getView(),n=this.lastScaleDelta_>1?1:-1;return e.endInteraction(this.duration_,n),this.lastScaleDelta_=0,!1}handleDownEvent(t){return d(t)&&this.condition_(t)?(t.map.getView().beginInteraction(),this.lastAngle_=void 0,this.lastMagnitude_=void 0,!0):!1}}const D=f;export{D};
