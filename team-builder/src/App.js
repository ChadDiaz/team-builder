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
  const [member, setMember] = useState([startData])
  console.log("this is member" , member)

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    }
    setMember([...member, newMember])
  }
  return (
    <div>
      <MemberForm addNewMember={addNewMember}/>
      <Member member={member} />
    </div>
  )
}

export default App
