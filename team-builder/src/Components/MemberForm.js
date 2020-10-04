/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

const MemberForm = (props) => {
    console.log("props from MF-->" , props)
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
            role: '',
            email: ''
        })
    }
    console.log("person on MF-->" , person)
    return (
        <form onSubmit={submitPerson}>
            <lable htmlFor='name'>Name</lable>
            <input
                id='name'
                type='text'
                placeholder='Enter Name'
                name='name'
                value={person.name}
                onChange={handleChanges}
            />
            <label htmlFor='role'>Role</label>
            <select name="role" onChange={handleChanges}>
                <option value="0">Choose one</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="UX/UI Designer">UX/UI Designer</option>
            </select>
            <lable htmlFor='email'>Email</lable>
            <input
                id='email'
                type='email'
                placeholder='Enter Email'
                name='email'
                value={person.email}
                onChange={handleChanges}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default MemberForm
