/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css';
import styled from 'styled-components'
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';

const AppDiv = styled.div`
  font-family: 'Patrick Hand', cursive;
  text-align: center;
  background-image: linear-gradient(-315deg, #7afcff 40%,#41b6d7 100%);
  padding: 25px;
  letter-spacing: 1px
`

const App = () => {
  const [member, setMember] = useState([{
    id: 1,
    name:"Chad Diaz",
    role: "Web Dev", 
    email: "chad.diazmd@gmail.com"
}

  ])
  // console.log("this is member" , member)

  const deleteMember = (index) => {
    const originalMember = [...member];
    originalMember.splice(index, 1);
    setMember(originalMember)
  }

  const addNewMember = teamMember => {
    setMember([...member, teamMember])
  }

  const memberToEdit = editMember => {

    setMember({...member, editMember})
  }

  return (
    <AppDiv>
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Member member={member} deleteMember={deleteMember} memberToEdit={memberToEdit}/>
    </AppDiv>
  )
}

export default App
