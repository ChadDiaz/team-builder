/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

const FormDiv=styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Button = styled.button`
    background: #ff7eb9;
    background-image: linear-gradient(-315deg, #ff7eb9 40%,#ff65a3 100%);
    border: 1px solid #ff65a3;
    padding: 5px 10px;
    font-size: 15px;
    color: #191919;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
    transition: all 0.2 ease-in;

&:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12), 0 2px 3px 2px rgba(0, 0, 0, 0.24);
    background: #ff65a3
}
&:active {
    background: #ff7eb9;
    box-shadow: inset 0px 0px 5px #ff65a3;
    outline: none
}
`

const Label = styled.label`
    margin-bottom: -12px;
    text-align: left;
    width: 200px;
`

const Input = styled.input`
    width: 200px;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;  
    border: 1px solid #ff65a3;
    border-radius: 4px;
`
const Select = styled.select`
    width: 200px;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;  
    border: 1px solid #ff65a3;
    border-radius: 4px;
`

const MemberForm = (props) => {
    // console.log("props from MF-->" , props)
    const[person, setPerson]=useState({
        id: Date.now(),
        name:"",
        role: "",
        email: ""
    })
    const handleChanges = (event) => {
        setPerson({...person, [event.target.name]: event.target.value}) 
        
    }
    const submitPerson = event => {
        event.preventDefault()
        props.addNewMember(person)
        setPerson({
            id: Date.now(),
            name:'',
            role: 'Choose One',
            email: ''
        })
    }
    // console.log("person on MF-->" , person)
    return (
        <FormDiv onSubmit={submitPerson}>
            <Label htmlFor='name'>Name</Label>
            <Input
                id='name'
                type='text'
                placeholder='Enter Name'
                name='name'
                value={person.name}
                onChange={handleChanges}
            />
            <Label htmlFor='role'>Role</Label>
            <Select id='role' name="role" onChange={handleChanges}>
                <option value ="Choose One" selected>--Choose one--</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="UX/UI Designer">UX/UI Designer</option>
            </Select>
            <Label htmlFor='email'>Email</Label>
            <Input
                id='email'
                type='email'
                placeholder='Enter Email'
                name='email'
                value={person.email}
                onChange={handleChanges}
            />
            <Button type="submit">Add Team Member</Button>
        </FormDiv>
    )
}

export default MemberForm
