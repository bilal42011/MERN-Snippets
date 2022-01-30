import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout=(props)=>{
return <> 
<header>
    <Toolbar/>
    </header>
    <main>
{props.children}
</main>
</>
}
export default Layout;