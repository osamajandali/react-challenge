import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Button = styled.button`
  background: #488aff;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline:none;
`
const LinkWhite = {
  color: 'white',
  textDecoration: 'none'
}
class UserButton extends Component {
  render() {
    return (
      <Button onClick={this.props.clicked}>
        <Link style={LinkWhite} to={"/" + this.props.username}>{this.props.username}</Link>
      </Button>
    );
  }
}

export default UserButton;
