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
 

  return (
    <div className='container-hello-world'>

      <Form
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
