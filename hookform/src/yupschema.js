import * as yup from "yup";

let formschema=yup.object().shape({
firstname:yup.string("Enter String").min(5,"5 characters needed").required(),
lastname:yup.string().max(7).required()
});
export default formschema;