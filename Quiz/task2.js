const selectdegree=()=>{
let degree=document.querySelector("#select").value;
console.log(degree);
let table=document.querySelector(".table");
console.log(table.getElementsByClassName("hello"));
let rows=table.rows;
let selectedrows=[]; 
for(let i=0;i<rows.length;i++){
    let cells=rows[i].cells;
    console.log(cells[2].innerHTML);
    if(cells[2].innerHTML===degree){
        selectedrows.push(rows[i])
    }
    else{
        rows[i].style.backgroundColor="white";
    }
}
console.log(selectedrows);
for(let i=0;i<selectedrows.length;i++){
    selectedrows[i].style.backgroundColor="green";    
}
let [h1]=document.getElementsByTagName("h1");
let text="Record Table";
h1.innerHTML=`<p>${text}</p>`;
}
