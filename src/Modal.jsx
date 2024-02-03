import React from 'react';
import { useFormik } from 'formik';
import { Close } from './svg/Close';

const Modal = ({ formData, onClose, onSave }) => {

  const formik = useFormik({
    initialValues: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      web: formData.web,
    },
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      }

      if (!values.phone) {
        errors.phone = 'Phone is required';
      }

      if (!values.web) {
        errors.web = 'Website is required';
      }

      return errors;
    },
    onSubmit: values => {
      const updatedProfile = { ...formData, id: formData.id, ...values };
      onSave(updatedProfile);
    },
  });

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className='top-container'>
          <h2>Edit Profile</h2>
          <p onClick={onClose}><Close /></p>
        </div>
        <hr className="full-width" />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className='input-field'>
            <label className="required" htmlFor="name" />Name:
            &nbsp; &nbsp;
            <input
              type="text" 
              name="name"
              className={formik.errors.name? 'error-input':''}
              value={formik.values.name} 
              onChange={formik.handleChange} 
            />
          </div>
          <br />
          {formik.errors.name&&<div className="error">{formik.errors.name}</div>}
          <div className='input-field'>
            <label className='required' htmlFor="email" />Email:
            &nbsp; &nbsp;
            <input
              type="text" 
              name="email" 
              className={formik.errors.email? 'error-input':''}
              value={formik.values.email} 
              onChange={formik.handleChange} 
            />
          </div>
          <br />
          {formik.errors.email&&<div className="error">{formik.errors.email}</div>}
          <div className='input-field'>
            <label className='required' htmlFor="phone" />Phone:
            &nbsp; &nbsp;
            <input
              type="text" 
              name="phone"
              className={formik.errors.phone? 'error-input':''} 
              value={formik.values.phone} 
              onChange={formik.handleChange} 
            />
          </div>
            <br />
            {formik.errors.phone&&<div className="error">{formik.errors.phone}</div>}
          <div className='input-field'>
            <label className='required' htmlFor="web" />Website:
            &nbsp; &nbsp;
            <input
              type="text" 
              name="web"
              className={formik.errors.web? 'error-input':''}
              value={formik.values.web} 
              onChange={formik.handleChange} 
            />
          </div>
          <br />
           {formik.errors.web&&<div className="error">{formik.errors.web}</div>}
          <br />
          <hr className="full-width" />
          <br />
          <div className="modal-buttons">
            <button type="button" className='cancel' onClick={onClose}>Cancel</button>
            <button type="submit" className='save'>Ok</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
