import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './App.css';


function App() {
  const formik = useFormik({
    initialValues : {
      fullName : "",
      email : "",
      password : "",
      confirm_password : ""
    },
    validationSchema : Yup.object({
      fullName: Yup.string()
        .min(2, "minimun 2 character")
        .max(15, "maximum 15 character")
        .required("Required!!"),
      email : Yup.string()
        .email("Invalid email format!")
        .required("Required!!"),
      password : Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!!!"),
      confirm_password : Yup.string()
        .oneOf([Yup.ref("password")], "Passsword doesn't match!")
        .required("Required!!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  
  return (
    <div className="App">
      <h1 className="text-center text-gray-500 text-xs">Form</h1>

      <form onSubmit={formik.handleSubmit} className="bg-b shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input 
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
         placeholder="Username"
          type="text" 
          name="fullName" 
          value={formik.values.fullName} 
          onChange={formik.handleChange}/>

          {formik.errors.fullName && formik.touched.fullName && (<p>{formik.errors.fullName}</p>)}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   
         placeholder="Email"
          type="email" 
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}/>

          {formik.errors.email && formik.touched.email && (<p>{formik.errors.email }</p>)}
        </div>
        
        <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Password"
          type="password" 
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          />

          {formik.errors.password && formik.touched.password && (<p>{formik.errors.password }</p>)}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input 
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Confirm Password"
          type="password" 
          name="confirm_password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          />

          {formik.errors.confirm_password && formik.touched.confirm_password && (<p>{formik.errors.confirm_password }</p>)}
        </div>

        <div>
           <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
