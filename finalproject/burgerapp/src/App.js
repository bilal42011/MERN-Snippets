import React  from "react";
import Layout from "./components/Layout/Layout";
import Burgerbuilder from "./containers/Burgerbuilder/Burgerbuilder";
import {Route,Switch} from "react-router-dom";
import Checkoutsummary from "./containers/Checkout/Checkoutsummary";
import Showorders from "./containers/Showorders/Showorders";
import Step1 from "./containers/Signupform/Signupstep1/Step1";
import Step2 from "./containers/Signupform/Signupstep1/Step2";
import Step3 from "./containers/Signupform/Signupstep1/Step3";
import Step4 from "./containers/Signupform/Signupstep1/Step4";
function App() {
  return <Layout>
<Switch>
<Route path="/" exact component={Burgerbuilder}/>
 <Route path="/checkout" component={Checkoutsummary} />
 <Route path="/orders" component={Showorders} />
 <Route path="/signupstep1" component={Step1}/>
 <Route path="/signupstep2" component={Step2}/>
 <Route path="/signupstep3" component={Step3}/>
 <Route path="/signupstep4" component={Step4}/>
 </Switch>
    </Layout> 
}
export default App;
