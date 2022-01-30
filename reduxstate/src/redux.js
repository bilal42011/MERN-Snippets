const {createStore}=require("redux");
// const accountsid="AC21e9129f72f37aeaafa3e22c0b926660";
// const authtoken="6e25a471d728e002484ce47bd4aca13c";
// const client=require("twilio")(accountsid,authtoken);
// client.messages.create({
//     body:"Hello Bilal Malik from twilio",
//     from:"+12013899708",
//     to:"+923405606078"
// }).then(message=>{console.log(message)})
// .catch(err=>{console.log(err)});
let initialstate={
    counter:0
}
const reducer=(state=initialstate,action)=>{
    console.log(action.type);
    switch(action.type){
case "inc":
    return {
        counter:++state.counter
    }
    case "dec":
        return {
            counter:--state.counter
        }

    }
    return state;
}
// const store =createStore(reducer);
// //console.log(store.getState());
// store.subscribe(()=>{
//     console.log(store.getState());
// })
// store.dispatch({type:"inc"});
export default reducer;