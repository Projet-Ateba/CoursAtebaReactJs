import React from 'react';
import image from './gt.jpg';
import './exercice.css'

function Profile() {
return (
    <div className='image_singe'>
    <h1>Mon Nom</h1>
    <img src={image} alt="Singe savant" />
    </div>
)
};

export default Profile;