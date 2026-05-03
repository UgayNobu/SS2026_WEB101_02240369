import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {

  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Karma Sonam",
      role: "Frontend Developer",
      location: "Thimphu, Bhutan",
      avatar: "/images/karma.jpg",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      name: "Sonam Dema",
      role: "UX Designer",
      location: "Paro, Bhutan",
      avatar: "/images/sonam.HEIC",
      skills: ["Figma", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>

      <div className="profiles-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            location={profile.location}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>

    </div>
  );
}

export default App;