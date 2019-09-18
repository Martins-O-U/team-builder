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

