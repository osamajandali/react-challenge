import React, { Component } from 'react';

import UserButton from '../Components/UserButton';


class Home extends Component {
  render() {
    let topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
    return (
      <div>
        <div>
          <h1>Top 5 GitHub Users </h1>
          <p>Tap the username to see more information </p>
        </div>
        <div>
          {topFive.map((username) =>
             <UserButton key={username} username={username} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
