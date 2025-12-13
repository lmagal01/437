declare module "*.css.js" {
    import type { CSSResultGroup } from "lit";
  
    const value: { styles: CSSResultGroup };
    export default value;
  }
  