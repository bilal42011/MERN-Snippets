import axios from "axios";

const axiosburger=axios.create({
    baseURL:"https://burger-builder-app-9d723-default-rtdb.firebaseio.com/"
});

export default axiosburger;