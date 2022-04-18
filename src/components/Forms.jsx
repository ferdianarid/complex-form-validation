import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

const initialValues = {
    username: "Ferdian",
    fullname: "",
    email: "",
    password: ""
}

const onSubmit = valuesNow => {
    console.log("Values", valuesNow)
}

const validate = values => {
    let errors = {}
    if (!values.username) {
        errors.username = "Field Username Required"
    }
    if (!values.fullname) {
        errors.fullname = "Field Fullname Required"
    }
    if (!values.email) {
        errors.email = "Field Email Required"
    }
    if (!values.password) {
        errors.password = "Password Field Required"
    }
    return errors
}

const schemaValidation = Yup.object({
    username: Yup.string().required("Field Username Required"),
    fullname: Yup.string().required("Field Full Name Required"),
    email: Yup.string().email("Email Address Invalid").required("Field Email Required"),
    password: Yup.string().required("Field Password Required")
})


const Forms = () => {
    const formik = useFormik({
        initialValues,
        // validate,
        validationSchema: schemaValidation,
        onSubmit
    })

    console.log("value", formik.values)
    console.log("error", formik.errors)
    console.log("visited", formik.touched)

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col mt-10">
                    <label htmlFor="username">Username</label>
                    <input className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="username" id="username" placeholder='Enter Username' onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} />
                    {formik.touched.username && formik.errors.username ? <h1 className='text-red-600 font-medium text-xs'>{formik.errors.username}</h1> : null}
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="fullname">Fullname</label>
                    <input className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="fullname" id="fullname" placeholder='Enter Fullname' onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} />
                    {formik.touched.fullname && formik.errors.fullname ? <h1 className='text-red-600 font-medium text-xs'>{formik.errors.fullname}</h1> : null}
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="email">Email</label>
                    <input className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="email" name="email" id="email" placeholder='Enter Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <h1 className='text-red-600 font-medium text-xs'>{formik.errors.email}</h1> : null}
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="password">Password</label>
                    <input className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="password" name="password" id="password" placeholder='Enter password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <h1 className='text-red-600 font-medium text-xs'>{formik.errors.password}</h1> : null}
                </div>
                <div className="mt-5">
                    <button className="py-2 mr-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold">Reset</button>
                    <button type='submit' className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold">Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Forms