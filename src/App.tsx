import React, { useState } from 'react';
import './App.css';
import ProfileComponent from './Containers/Profile';
import { Profile } from './Containers/Profile/types';

let mockdata: Profile = {
  _id: 'asdf',
  name: 'Your Name',
  title: 'Your Title',
  city: 'City',
  country: 'Country',
  profile_view: 1234,
  website_view: 5678,
  rating: 4.2,
  isLiked: false
}

function App() {
  const [isLiked, setIsLike] = useState(mockdata.isLiked)
  const handleLikeProfile: (id: string, value: boolean) => void = (id, value) => {
    setIsLike(value)
  }

  return (
    <div className="App">
      <ProfileComponent data={{ ...mockdata, isLiked }} onLike={handleLikeProfile} />
    </div>
  );
}

export default App;
