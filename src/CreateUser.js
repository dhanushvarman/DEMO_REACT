import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { config } from './config';

function CreateUser() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            pincode: "",
            district: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.firstName) {
                error.firstName = "Please enter FirstName";
            }
            if (!values.lastName) {
                error.lastName = "Please enter lastName";
            }
            if (!values.age) {
                error.age = "Please enter age";
            }
            if (!values.pincode) {
                error.pincode = "Please enter pincode";
            }
            if (!values.district) {
                error.district = "Please enter district";
            }

            return error
        },
        onSubmit: async (values) => {
            try {
                await axios.post(`${config.api}/create`,values);
                alert("submitted");
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>First Name</label>
                            <input className='form-control'
                                type={"text"}
                                name="firstName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {
                                formik.errors.firstName ? <span style={{color:"red"}}>{formik.errors.firstName}</span> : ""
                            }
                        </div>
                        <div className='col-md-6'>
                            <label>Last Name</label>
                            <input className='form-control'
                                type={"text"}
                                name="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {
                                formik.errors.lastName ? <span style={{color:"red"}}>{formik.errors.lastName}</span> : ""
                            }
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-4'>
                            <label>Age</label>
                            <input type={"number"} className="form-control"
                                name="age"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.age}
                            />
                            {
                                formik.errors.age ? <span style={{color:"red"}}>{formik.errors.age}</span> : ""
                            }
                        </div>
                        <div className='col-md-4'>
                            <label>Pincode</label>
                            <input type={"number"} className="form-control"
                                name="pincode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.pincode}
                            />
                            {
                                formik.errors.pincode ? <span style={{color:"red"}}>{formik.errors.pincode}</span> : ""
                            }
                        </div>
                        <div className='col-md-4'>
                            <label>District</label>
                            <input type={"text"} className="form-control"
                                name="district"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.district}
                            />
                            {
                                formik.errors.district ? <span style={{color:"red"}}>{formik.errors.district}</span> : ""
                            }
                        </div>
                    </div>
                    <input type={"submit"} value="Submit" className='btn btn-success mt-4' />
                </div>

            </form>
        </div>
    )
}

export default CreateUser