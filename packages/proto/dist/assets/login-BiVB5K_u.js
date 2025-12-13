import{i as m,x as f,b as c,r as p,n as u,d as l,a as b}from"./state-CZRbe6Np.js";import{r as g}from"./reset.css-BDSRejzF.js";var v=Object.defineProperty,i=(h,a,t,s)=>{for(var r=void 0,o=h.length-1,d;o>=0;o--)(d=h[o])&&(r=d(a,t,r)||r);return r&&v(a,t,r),r};const n=class n extends m{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}handleChange(a){const t=a.target,{name:s,value:r}=t;s==="username"&&(this.formData={...this.formData,username:r}),s==="password"&&(this.formData={...this.formData,password:r})}handleSubmit(a){a.preventDefault(),this.canSubmit&&this.api&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:s}=t;this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]}))}).catch(t=>{this.error=t.toString()})}render(){return f`
      <form @change=${this.handleChange} @submit=${this.handleSubmit}>
        <slot></slot>
        <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        <p class="error">${this.error}</p>
      </form>
    `}};n.styles=[g.styles,c`
    .error:not(:empty) { color: var(--color-error); border: 1px solid red; padding: 10px; }
  `];let e=n;i([p()],e.prototype,"formData");i([u()],e.prototype,"api");i([u()],e.prototype,"redirect");i([p()],e.prototype,"error");l({"mu-auth":b.Provider,"login-form":e});
