import React from "react";
import Carddata from "./Carddata";
import Card from "./Card";
import styles from "./App.module.css";
let App=()=>{
return <div className={styles.App}>
{
    Carddata.map(value=>
<Card imgsrc={value.imgsrc} link={value.link} mname={value.mname}></Card>)
 }
</div>
}
export default App;
export var hello=1;
export var bye=2;
export var reached=3;
export var sleep=4;
//export {hello,bye,reached,sleep};