import{i as m,x as c,b as p,n,r as g,O as v,d as b,a as y}from"./state-CZRbe6Np.js";import{H as _}from"./header-49WJBvJY.js";var $=Object.defineProperty,l=(s,e,t,f)=>{for(var r=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=o(e,t,r)||r);return r&&$(e,t,r),r};const u=class u extends m{render(){return c`
      <article class="team-card">
        <a href=${this.href??"#"} class="team-link">
          <img class="team-logo" src=${this.imgSrc??""} />
          <span class="team-name">
            <slot></slot>
          </span>
          <span class="team-country">
            ${this.country}
          </span>
        </a>
      </article>
    `}};u.styles=p`
    .team-card {
      display: inline-block;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: var(--bg);
      color: var(--text);
      text-align: center;
      margin: 0.5rem;
    }

    .team-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--link-color);
    }

    .team-logo {
      width: 80px;
      height: auto;
      max-width: 100%;
    }

    .team-name {
      font-weight: bold;
    }
  `;let i=u;l([n({attribute:"img-src"})],i.prototype,"imgSrc");l([n()],i.prototype,"href");l([n()],i.prototype,"country");var x=Object.defineProperty,d=(s,e,t,f)=>{for(var r=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=o(e,t,r)||r);return r&&x(e,t,r),r};class h extends m{constructor(){super(...arguments),this.teams=[],this._authObserver=new v(this,"uefa:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)}),this.src&&this.hydrate(this.src)}get authorizationHeaders(){var e;return(e=this._user)!=null&&e.authenticated?{Authorization:`Bearer ${this._user.token}`}:{}}async hydrate(e){try{const t=await fetch(e,{headers:this.authorizationHeaders});if(!t.ok){console.error("Failed to fetch teams:",t.status,t.statusText);return}this.teams=await t.json()}catch(t){console.error("Error fetching teams JSON:",t)}}renderTeam(e){return c`
      <li>
        <svg class="icon">
          <use href="/icons/ball.svg#icon-ball"></use>
        </svg>
        <uefa-team img-src=${e.imgSrc} href=${e.href}>
          ${e.name}
        </uefa-team>
      </li>
    `}render(){return c`
      <ul class="teams_body-body">
        ${this.teams.map(e=>this.renderTeam(e))}
      </ul>
    `}}d([n()],h.prototype,"src");d([g()],h.prototype,"teams");b({"mu-auth":y.Provider,"uefa-header":_,"uefa-team":i,"uefa-team-list":h});
