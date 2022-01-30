import * as yup from "yup";

const orderformschema=yup.object().shape({
name:yup.string().required(),
email:yup.string().email().required(),
delivery:yup.string().required()
});
export default orderformschema;