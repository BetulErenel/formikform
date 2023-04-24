
import { useFormik } from 'formik';
import React from 'react';


function CreateAccount() {


  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },

    onSubmit: values => {
      console.log(values.name);
      values.name = "";
      formik.resetForm();
    },

    validate: values => {
      let errors = {};
      if (!values.name) errors.name="Name Required!";
      
      if (!values.email) {errors.email="Email Required!";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password="Password Required!";
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Name</div>
        <input id="nameField" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.name?<div id="nameError" style={{color:'red', fontStyle:'italic', fontWeight:'bold'}}>{formik.errors.name}</div> : null}
       
        <div>E-mail</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}></input>
        {formik.errors.email?<div id="emailError" style={{color:'red', fontStyle:'italic', fontWeight:'bold'}}>{formik.errors.email}</div> : null}
       
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}></input>
        {formik.errors.password?<div id="pswError"style={{color:'red', fontStyle:'italic', fontWeight:'bold'}}>{formik.errors.password}</div> : null}
        
        <button type='submit' id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount;