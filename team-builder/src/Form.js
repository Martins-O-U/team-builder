import React from 'react';
function Form(props) {
    // what data does the form need to populate itself?
    // what callbacks does the form need to perform
    // its basic functions of updating fields and submitting?
    const { name, role, contact } = props.teamForm;

  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='roleInput'>Role</label>
        <input
          value={role}
          id='roleInput'
          type='text'
        />

        <label htmlFor='contactInput'>Contact</label>
        <input
          value={contact}
          id='contactInput'
          type='number'
        />
  
        <button

        >
          submit
        </button>
      </form>
    );
  }

  export default Form;
