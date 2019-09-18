import React from 'react';
function Form(props) {
    const { onNameChange, onRoleChange, onContactChange, onFormSubmit } = props;
    const { name, role, contact } = props.teamForm;
    const isDisabled = () => {
      if (!name || !role || !contact) {
        return true;
      }
      return false;
    };
  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
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

        <label htmlFor='contactInput'>Contact</label>
        <input
          value={contact}
          onChange={onContactChange}
          id='contactInput'
          type='number'
        />
  
        <button
          disabled={isDisabled()}
          onClick={onFormSubmit}
        >
          submit
        </button>
      </form>
    );
  }

  export default Form;