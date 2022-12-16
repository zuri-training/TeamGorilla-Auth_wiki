import React from 'react'
 
import "../../../assets/styles/Template.css";

export default function Template ({
    src,
    alt,
    name,
    role,
    status,
}) {
    return (
        <div className='team-container'>
            <img src={src} alt={alt} className='member-img'/>
            <p className='member-name'>{name}</p>
            <p className='member-role'>{role}</p>
            <p className='member-status'>{status}</p>
        </div>
    )
}