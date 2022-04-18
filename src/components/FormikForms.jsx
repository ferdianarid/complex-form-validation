import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from "yup"
import ErrorText from ".././components/atoms/ErrorText"

const initialValues = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    about: "",
    address: {
        subdistrict: "",
        district: "",
        regency: "",
        country: ""
    },
    hobbies: [""],
    books: [""]
}

const onSubmit = valuesNow => {
    console.log("Values", valuesNow)
}

const schemaValidation = Yup.object({
    username: Yup.string().min(3, "Minimal 3 Character").required("Field Username Required"),
    fullname: Yup.string().required("Field Full Name Required"),
    email: Yup.string().email("Email Address Invalid").required("Field Email Required"),
    password: Yup.string().required("Field Password Required"),
    about: Yup.string().required("Field About Must be Fill"),
    address: Yup.object({
        subdistrict: Yup.string().min(3, "Minimal 3 Character").required("Field Subdistrict Required"),
        district: Yup.string().min(3, "Minimal 3 Character").required("Field District Required"),
        regency: Yup.string().min(3, "Minimal 3 Character").required("Field Regency Required"),
        country: Yup.string().min(3, "Minimal 3 Character").required("Field Country Required")
    })
})

const FormikForms = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={schemaValidation}
                onSubmit={onSubmit}>
                <Form>
                    <div className="w-full space-x-20 flex items-start justify-between">
                        <div className="w-[50%]">
                            {/* Username Field */}
                            <div className="flex flex-col">
                                <label htmlFor="username" className="font-bold">Username</label>
                                <Field className="border border-gray-500 rounded-lg my-2 py-2 px-4" type="text" name="username" id="username" placeholder="Enter Username" />
                                <ErrorMessage name="username" component={ErrorText} />
                            </div>
                            {/* Fullname Field */}
                            <div className="flex flex-col mt-5">
                                <label htmlFor="fullname" className="font-bold">Fullname</label>
                                <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="fullname" id="fullname" placeholder='Enter Fullname' />
                                <ErrorMessage name="fullname" component={ErrorText} />
                            </div>
                            {/* Email Field */}
                            <div className="flex flex-col mt-5">
                                <label htmlFor="email" className="font-bold">Email</label>
                                <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="email" name="email" id="email" placeholder='Enter Email' />
                                <ErrorMessage name="email" component={ErrorText} />
                            </div>
                            {/* Password Field */}
                            <div className="flex flex-col mt-5">
                                <label htmlFor="password" className="font-bold">Password</label>
                                <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="password" name="password" id="password" placeholder='Enter password' />
                                <ErrorMessage name="password" component={ErrorText} />
                            </div>
                            {/* About Field */}
                            <div className="flex flex-col">
                                <label htmlFor="about" className="font-bold">About</label>
                                <Field as="textarea" className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="about" id="about" placeholder='Enter about' />
                                <ErrorMessage name="about" component={ErrorText} />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            {/* Subdistric Field */}
                            <div className="flex items-center space-x-4 justify-between mt-5">
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="subdistrict" className="font-bold">Sub District</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="address.subdistrict" id="subdistrict" placeholder='Enter subdistrict' />
                                    <ErrorMessage name="address.subdistrict" component={ErrorText} />
                                </div>
                                {/* District Field */}
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="district" className="font-bold">District</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="address.district" id="district" placeholder='Enter district' />
                                    <ErrorMessage name="address.district" component={ErrorText} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 justify-between mt-5">
                                {/* Regency Field */}
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="regency" className="font-bold">Regency</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="address.regency" id="regency" placeholder='Enter regency' />
                                    <ErrorMessage name="address.regency" component={ErrorText} />
                                </div>
                                {/* Country Field */}
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="country" className="font-bold">Country</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="address.country" id="country" placeholder='Enter country' />
                                    <ErrorMessage name="address.country" component={ErrorText} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 justify-between mt-5">
                                {/* Hobbies 1 Field */}
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="hobbies1" className="font-bold">Hobbies 1</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="hobbies[0]" id="hobbies1" placeholder='Enter hobbies1' />
                                    {/* <ErrorMessage name="hobbies[0]" component={ErrorText} /> */}
                                </div>
                                {/* Hobbies 2 Field */}
                                <div className="w-[50%] flex flex-col">
                                    <label htmlFor="hobbies2" className="font-bold">Hobbies 2</label>
                                    <Field className='border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name="hobbies[1]" id="hobbies2" placeholder='Enter hobbies2' />
                                    {/* <ErrorMessage name="hobbies[1]" component={ErrorText} /> */}
                                </div>
                            </div>

                            <div className="w-full grid grid-cols-2 gap-x-4 mt-5">
                                {/* Hobbies 1 Field */}
                                <FieldArray name="books">
                                    {fieldArrayProps => {
                                        // console.log(fieldArrayProps)
                                        const { form, push, remove } = fieldArrayProps
                                        const { values } = form
                                        const { books } = values
                                        return (
                                            <React.Fragment>
                                                {books.map((book, index) => (
                                                    <div key={index} className="w-full flex flex-col items-start justify-between mt-5">
                                                        <label htmlFor="hobbies2" className="font-bold">{`Books ${index + 1}`}</label>
                                                        <Field className='w-full border border-gray-500 rounded-lg my-2 py-2 px-4' type="text" name={`books[${index}]`} />
                                                        <div className="w-full flex items-start">
                                                            {index > 0 && <button onClick={() => remove(index)} className=" text-center py-2 mr-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold">Remove</button>}

                                                            <button onClick={() => push("")} className=" py-2 text-center px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold">Add</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </React.Fragment>
                                        )
                                    }}
                                </FieldArray>
                            </div>
                            {/* Button Action */}
                            <div className="mt-5">
                                <button className="py-2 mr-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold">Reset</button>
                                <button type='submit' className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold">Submit</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </React.Fragment >
    )
}

export default FormikForms