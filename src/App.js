import { useState } from 'react';
import { Profiles } from './Profile';
import ProfileCard from './ProfileCard';

const App = () => {


  const [profiles, setProfiles]=useState(Profiles);

  // Function to handle profile deletion

  const handleDelete=(profileId) => {
    const updatedProfiles=profiles.filter((profile) => profile.id!==profileId);
    setProfiles(updatedProfiles);
  };


  return (
    <div className="app">
      <ProfileCard profiles={profiles} setProfiles={setProfiles} onDelete={handleDelete} />
    </div>
  );
}

export default App;
