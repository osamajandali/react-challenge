import React, { Component } from 'react';
import styled from 'styled-components';

import UserButton from '../Components/UserButton';

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Title = styled.h1`
  margin-bottom: 5px;
  color:#464646;
`
const SubText = styled.p`
  margin-top: 0;
  font-size: 11px;
  color:#ababab;
`
class Home extends Component {
  render() {
    let topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
    return (
      <div>
        <div>
          <Title>Top 5 GitHub Users </Title>
          <SubText>Tap the username to see more information </SubText>
        </div>
        <ButtonsWrapper>
          {topFive.map((username) =>
             <UserButton key={username} username={username} />
          )}
        </ButtonsWrapper>
      </div>
    );
  }
}

export default Home;
