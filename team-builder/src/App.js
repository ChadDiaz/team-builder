/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css';
import styled from 'styled-components'
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';

const startData = [{
    id: 1,
    name:"Chad Diaz",
    role: "Web Dev", 
    email: "chad.diazmd@gmail.com"
}]

const App = () => {
  const [member, setMember] = useState([])
  console.log("this is member" , member)

  const addNewMember = teamMember => {
    
    setMember([...member, teamMember])
  }
  return (
    <div>
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Member member={member} />
    </div>
  )
}

export default App
