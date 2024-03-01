import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const MultiStepRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    image: null,
    signature: null,
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      for (let key in formData) {
        form.append(key, formData[key]);
      }
      // Make API call
      const response = await axios.post('your_api_endpoint', form);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
          <form>
            <h2>Step 1: Basic Information</h2>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <label>Mobile</label>
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <label>password</label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <label>Address</label>
            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <button to ="">Edit</button>
            <button>Save and Next</button>
            </form>
          </>
        );
      case 2:
        return (
          <>
          <form>
            <h2>Step 2: Documentation Upload</h2>
            <input type="file" name="image" accept="image/*" onChange={handleChange} required />
            <input type="file" name="signature" accept="image/*" onChange={handleChange} required />
            </form>
          </>
        );
      case 3:
        return (
          <>
            <h2>Step 3: Payment</h2>
            <form>
            <input type="text" name="payment" placeholder="Payment Details" value={formData.payment} onChange={handleChange} required />
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      {step > 1 && <button onClick={previousStep}>Previous</button>}
      {step < 3 && <button onClick={nextStep}>Next</button>}
      {step === 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default MultiStepRegistration;
