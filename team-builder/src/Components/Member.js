import React from 'react'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

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

const MemberList=styled.div`
display: flex;
flex-wrap: wrap;
`
const MemberDiv=styled.div`
backgroud: #242424;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
width: 100%;
max-width: 250px;
padding: 10px;
margin: 16px auto;
text-align: left;
`

const Member = (props) => {

    
    const handleEdit= (index) => {
        props.memberToEdit(index)
    }

    const handleDelete = (index) => {
        props.deleteMember(index)
    }
    return (
        <MemberList>
            {props.member.map((member, index) => (
                <MemberDiv key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                    <Button onClick={(event) => handleDelete(index)}>Delete Team Member</Button>
                    <Button onClick={(event) => handleEdit(index)}>Edit Team Member</Button>
                </MemberDiv> 
            ))}                           
        </MemberList>
    )
}

export default Member
