import{i as g,O as c,e as h,x as i,b as p,r as u}from"./state-CZRbe6Np.js";var b=Object.defineProperty,l=(a,e,t,f)=>{for(var n=void 0,r=a.length-1,d;r>=0;r--)(d=a[r])&&(n=d(e,t,n)||n);return n&&b(e,t,n),n};const o=class o extends g{constructor(){super(...arguments),this._authObserver=new c(this,"uefa:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username):(this.loggedIn=!1,this.userid=void 0)})}renderSignOutButton(){return i`
      <button
        class="signout-btn"
        @click=${e=>{h.relay(e,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </button>
    `}renderSignInButton(){return i`
      <a href="/login.html" class="signin-btn">Sign In</a>
    `}render(){return i`
      <header>
        <h1>UEFA Teams</h1>
        <div class="user-controls">
          <span class="greeting">
            Hello, ${this.userid||"fan"}!
          </span>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        </div>
      </header>
    `}};o.styles=p`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f5f5f5;
      border-bottom: 2px solid #ddd;
      font-family: sans-serif;
    }
    .user-controls {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    .signout-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
    .signin-btn {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }
  `;let s=o;l([u()],s.prototype,"loggedIn");l([u()],s.prototype,"userid");export{s as H};
