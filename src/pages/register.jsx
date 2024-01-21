import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from "../config/axiosConfig.js";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      const {data, status} = await axios.post("/register_user", formData);

    if(status === 200){
        toast.success(data?.results)
    }
      // You can handle the response here (e.g., show a success message)
    } catch (error) {
        const {response} = error;
        
        if(response?.status === 409){
            toast.error(response?.data?.results)
        }else if(response?.status){
            toast.error(response?.data?.results)
        }

    }
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <form
        style={{ maxWidth: '400px', margin: '0 auto' }}
        onSubmit={registerUser}
      >
        <label htmlFor="firstname" style={{ display: 'block', marginBottom: '8px' }}>
          First Name*:
        </label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          required
        />

        <label htmlFor="lastname" style={{ display: 'block', marginBottom: '8px' }}>
          Last Name:
        </label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
        />

        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>
          Email*:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
        />

        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>
          Password*:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
        />

        <label htmlFor="cpassword" style={{ display: 'block', marginBottom: '8px' }}>
          Confirm Password*:
        </label>
        <input
          type="password"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
        />

        <input
          type="submit"
          value="Submit"
          style={{ backgroundColor: '#4caf50', color: 'white', cursor: 'pointer' }}
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
