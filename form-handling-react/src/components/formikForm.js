import * as Yup from "yup";

export const formikSchema = Yup.object().shape({

    username: Yup
        .string()
        .min(3, "Username must be at least 3 charaxters long")
        .required("Required"),

    email: Yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),

    password: Yup
        .string()
        .min(8, "Password must be at least 8 Characters long")
        .matches(/[A-Z]/, "Password must have atleast one uppercase")
        .matches(/[a-z]/, "Password must have atleast one lowercase")
        .matches(/\d/, "Password must have atleast one number")
        .matches(/[@$%!?&]/, "Password must have atleast one special Character")
        .required("Required")

})