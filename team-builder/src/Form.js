import React from 'react';


function Form(props) {
    const { onNameChange, onRoleChange, onResidenceChange, onFormSubmit } = props;
    const { name, role, residence } = props.teamForm;
    const isDisabled = () => {
      if (!name || !role || !residence) {
        return true;
      }
      return false;
    };
  
    return (
      <form className= "form-container">
        <label htmlFor='nameInput'>Full Name</label>
        <input
          value={name}
          onChange={onNameChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='roleInput'>Role</label>
        <input
          value={role}
          onChange={onRoleChange}
          id='roleInput'
          type='text'
        />

        <label htmlFor='residenceInput'>Residence</label>
        <input
          value={residence}
          onChange={onResidenceChange}
          id='residenceInput'
          type='text'
        />
  
        <button
          disabled={isDisabled()}
          onClick={onFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }

  export default Form;