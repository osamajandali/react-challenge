import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import github from '../assets/github.svg';

const Button = styled.button`
  background: #ffffff;
  color:#7540ED;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline:none;
  width:150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight:bold;
  box-shadow: 0px 8px 30px -5px rgba(79, 79, 79, 0.3);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 8px 5px -5px rgba(79, 79, 79, 0.3);
  }
`
const Github = styled.img`
  width:50px;
  margin-bottom:10px;
`

const LinkWhite = {
  color: 'white',
  textDecoration: 'none'
}
class UserButton extends Component {
  render() {
    return (
    <Link style={LinkWhite} to={"/" + this.props.username}>
      <Button onClick={this.props.clicked}>
        <Github src={github} alt="github"/>
        {this.props.username}
      </Button>
    </Link>
    );
  }
}

export default UserButton;
