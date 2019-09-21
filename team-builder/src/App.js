import React, { useState } from 'react';
import './App.css';
import Form from './Form';

import uuid from 'uuid';


const initialTeamList = [
  { id: uuid(), name: 'Blinx', role: 'Backend Developer', residence: "Abuja" },
];

const initialTeamForm = {
  name: '',
  role: '',
  residence: '',
};

export default function TeamList() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      role: teamForm.role,
      residence: teamForm.residence,
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      role: e.target.value,
      residence: teamForm.residence,
    });
  };

  const onResidenceChange = e => {
    setTeamForm({
      name: teamForm.name,
      role: teamForm.role,
      residence: e.target.value,
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newTeam = {
      id: uuid(),
      name: teamForm.name,
      role: teamForm.role,
      residence: teamForm.residence,
    };
    const newTeamList = teamList.concat(newTeam);
    setTeamList(newTeamList);
    setTeamForm(initialTeamForm);
  };


  return (
    <div className='container'>

      <Form
        onNameChange={onNameChange}
        onRoleChange={onRoleChange}
        onResidenceChange={onResidenceChange}
        onFormSubmit={onFormSubmit}
        teamForm={teamForm}
      />
      {
        teamList.map(team => (
          <h5 key={team.id}>
            {team.name} is a {team.role} for the special team, and is based at {team.residence}.
          </h5>
        ))
      }
    </div>
  );
}
