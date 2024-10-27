import React from 'react';

function Profile() {
  return (
    <div className="page-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
        <div className="profile-details">
          <h3>John Doe</h3>
          <p>Email: john.doe@example.com</p>
          <p>Member since: January 1, 2023</p>
        </div>
      </div>
      <div className="profile-stats">
        <h3>Your FoodAI Stats</h3>
        <ul>
          <li>Recipes Requested: 50</li>
          <li>Favorite Cuisine: Italian</li>
          <li>Most Used Ingredient: Tomatoes</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
