import React, { useState } from 'react';
import Modal from './Modal';
import { Email } from './svg/Email';
import { Phone } from './svg/Phone';
import { Web } from './svg/Web';
import { Like } from './svg/Like';
import { Update } from './svg/Update';
import { Delete } from './svg/Delete';
import { Heart } from './svg/Heart';

const ProfileCard=({ profiles, setProfiles, onDelete }) => {

    const [isModalOpen, setIsModalOpen]=useState(false);
    const [activeIcons, setActiveIcons]=useState({});
    const [selectedProfile, setSelectedProfile]=useState(null);
    const [formData, setFormData]=useState({
        name: '',
        email: '',
        phone: '',
        web: '',
    });




    const handleUpdate = (profile)  => {

        setSelectedProfile(profile);
        setFormData({ ...profile }); // Set initial form data
        setIsModalOpen(true);
    };


    const updateProfile=(updatedProfile) => { 

        const updatedProfiles = profiles.map((profile) =>
            profile.id === updatedProfile.id ? updatedProfile : profile
        );
        setProfiles(updatedProfiles);
        setIsModalOpen(false); // Close the modal after updating
    };

    const handleDelete=(profileId) => {
        console.log("ID", profileId);
        onDelete(profileId);
    };

    const handleLike=(id) => {
        setActiveIcons((prevActiveIcons) => ({
            ...prevActiveIcons,
            [id]: !prevActiveIcons[id],
        }));
    };

    const handleChange = (e) => {
        const { name, value }=e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <React.Fragment>
        <div className='container'>
            {profiles.map(profile => (
                <div className="profile-card" key={profile.id}>
                    <div className='img-container'>
                        <img
                          src="https://avatars.dicebear.com/v2/avataaars/Kamren.svg?options[mood][]=happy"
                          alt="Profile"
                          className="profile-picture"
                        />
                    </div>
                    <div className="profile-details">
                        <h3 className='profile-name'>{profile.name}</h3>
                        <div className='details-box'>
                            <Email /> <p style={{ marginLeft: "10px"}}>{profile.email}</p>
                        </div>
                        <div className='details-box phone'>
                            <Phone /> <p style={{ marginLeft: "10px" }}>{profile.phone}</p>
                        </div>
                        <div className='details-box web'>
                            <Web /> <p style={{ marginLeft: "10px" }}>{profile.web}</p>
                        </div>
                    </div>
                    <div className="icons">
                        <span
                            className='icon'
                            onClick={() => handleLike(profile.id)}
                        >
                            {activeIcons[profile.id]? <Heart />:<Like />}
                        </span>
                        <span className="icon" onClick={() => handleUpdate(profile)}>
                            <Update />
                        </span>
                        <span className="icon" onClick={() => handleDelete(profile.id)}>
                            <Delete />
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal for update */}
        { isModalOpen && ( 
             <Modal
                profile={selectedProfile}
                formData={formData}
                onChange={handleChange}
                onSave={updateProfile}
                onClose={() => setIsModalOpen(false)} 
            /> 
            )}
        </React.Fragment>
    );
};

export default ProfileCard;
