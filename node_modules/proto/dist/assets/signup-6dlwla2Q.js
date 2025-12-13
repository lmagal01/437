import{i as u,x as p,b as c,r as m,n as f,d as l,a as b}from"./state-CZRbe6Np.js";import{r as g}from"./reset.css-BDSRejzF.js";var D=Object.defineProperty,o=(h,e,t,a)=>{for(var r=void 0,i=h.length-1,d;i>=0;i--)(d=h[i])&&(r=d(e,t,r)||r);return r&&D(e,t,r),r};const n=class n extends u{constructor(){super(...arguments),this.formData={},this.api="/auth/register",this.redirect="/"}get canSubmit(){return!!(this.formData.username&&this.formData.password&&this.formData.confirmPassword&&this.formData.password===this.formData.confirmPassword)}handleChange(e){const t=e.target,{name:a,value:r}=t;this.formData={...this.formData,[a]:r},this.error==="Passwords do not match"&&(this.error=void 0)}handleSubmit(e){if(e.preventDefault(),this.formData.password!==this.formData.confirmPassword){this.error="Passwords do not match";return}this.canSubmit&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status===201)return t.json();throw t.status===409?"Username already exists":"Registration failed"}).then(t=>{const{token:a}=t;this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:a,redirect:this.redirect}]}))}).catch(t=>{this.error=t.toString()})}render(){return p`
      <form @change=${this.handleChange} @submit=${this.handleSubmit}>
        <slot></slot>
        <button ?disabled=${!this.canSubmit} type="submit">Sign Up</button>
        <p class="error">${this.error}</p>
      </form>
    `}};n.styles=[g.styles,c`
    .error:not(:empty) { 
      color: var(--color-error, red); 
      border: 1px solid red; 
      padding: 10px; 
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  `];let s=n;o([m()],s.prototype,"formData");o([f()],s.prototype,"api");o([f()],s.prototype,"redirect");o([m()],s.prototype,"error");l({"mu-auth":b.Provider,"signup-form":s});
