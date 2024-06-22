import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
    firstname: Yup.string()
        .required("First Name is required"),
    lastname: Yup.string()
        .min(5, { name: "F character long" })
        .required("Last name is required"),
    email: Yup.string()
        .email({ email: "Shoud be valid email" })
        .required({ email: "Email ia required" }),
    password: Yup.string()
        .min(6, { password: "Password atleast 6 character long" })
        .required({ password: "Password is required" }),
    phone: Yup.string()
        .required("Phone is required"),
});
export default signupSchema;