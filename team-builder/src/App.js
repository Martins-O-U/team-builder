import React, { useState } from 'react';
import './App.css';
import Form from './Form';

import uuid from 'uuid';


const initialTeamList = [
  { id: uuid(), name: 'Blinx', role: 'Backend Developer', contact: 234-456-8900 },
];

const initialTeamForm = {
  name: '',
  role: '',
  contact: '',
};

export default function TeamList() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      role: teamForm.role,
      contact: teamForm.contact,
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      role: e.target.value,
      contact: teamForm.contact
    });
  };

  const onContactChange = e => {
    setTeamForm({
      name: teamForm.name,
      role: teamForm.role,
      contact: e.target.value,
    });
  };

  const onFormSubmit = e => { // we DO need the event object
    e.preventDefault();
    const newTeam = {
      id: uuid(),
      name: teamForm.name,
      role: teamForm.role,
      contact: teamForm.contact,
    };
  }


  return (
    <div className='container-hello-world'>

      <Form
        // handlers that can change app state
        onNameChange={onNameChange}
        onRoleChange={onRoleChange}
        onContactChange={onContactChange}
        onFormSubmit={onFormSubmit}
        // data we need to hydrate the form inputs
        teamForm={teamForm}
      />
      {
        teamList.map(team => (
          <h5 key={team.id}>
            {team.name} is a {team.role}.
          </h5>
        ))
      }
    </div>
  );
}
