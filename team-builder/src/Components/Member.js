import React from 'react'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

const Member = (props) => {
    return (
        <div className="member-list">
            {props.member.map(member => (
                <div className='member' key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                </div> 
            ))}                           
        </div>
    )
}

export default Member
