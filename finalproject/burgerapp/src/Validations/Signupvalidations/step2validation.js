import * as yup from "yup";
const step2schema=yup.object().shape({
email:yup.string().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
,"Sorry only letters (a-z), numbers (0-9), and periods (.) are allowed").matches( /^[a-zA-Z]{2}/,"Sorry should start with alteast 2 letters (a-z)").required()
});
export default step2schema;