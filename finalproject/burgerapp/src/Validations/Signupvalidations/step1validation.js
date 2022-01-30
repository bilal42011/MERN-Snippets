import * as yup from "yup";
const step1schema=yup.object().shape({
name:yup.string().matches(/^[a-zA-Z\s]*$/,"Sorry only letters (a-z) are allowed").min(10).required()
});
export default step1schema;