//var React=new require("react");
//var ReactDom= new require("react-dom");
import React from "react";
import ReactDom from "react-dom";
import "./index.css";     //importing css module 
import {Add,Subtract,Multiply,Divide} from "./calculator"; //importing multiple components 
import Heading from "./Heading";
//import Card from "./Card";
import App from "./App";
import Login from "./Login.jsx";
import {hello,bye,reached,sleep} from "./App"; 
//import {sleep} from "./App"; //import export example 
console.log(hello,sleep);
ReactDom.render(
  [
  <h1>Hello react</h1>,
  <div>
    <p>Multiple JSX running</p>
  </div>
],

document.getElementById("root"));
var firstname="bilal";
var lastname="malik";
const headingelement={
  color:"blue",
  textTransform:"capitalize"     //jsx css property name are camel case and value are in quotation and whole properties are always rap in pbject
}
ReactDom.render(
  <> 
  <h2 id="heading" style={{color:"blue",textTransform:"capitalize"}}>Hello second rendor</h2>
  <p>multipls jsx using react fragment</p>    {/*Last Reactdom render method will be executed*/}
  <p>my first name is {firstname} my last name is {lastname}</p>
  <p>Sum of 5 and 2 is: {Add(5,2)}</p>
  <p>Subtract of 5 and 2 is: {Subtract(5,2)}</p>
  <p>Multiple of 5 and 2 is: {Multiply(5,2)}</p>
  <p>Divide of 5 and 2 is: {Divide(5,2)}</p>
  <Heading />
  <App/>
  {/*<Card imgsrc={logo} link="https://www.gogle.com" mname="Fast and Furious"></Card>
  <Card imgsrc="https://www.gogle.com"  link="https://www.gogle.com" mname="Terror"></Card>
  <Card imgsrc="https://www.gogle.com"  link="https://www.gogle.com" mname="Zylex"></Card>
  {Card({imgsrc:logo, link:"https://www.gogle.com", mname:"Fast and Furious"})}*/}
 <Login />
  </>
  ,
  document.getElementById("root"));