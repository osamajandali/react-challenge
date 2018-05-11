import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
`
const LinkBlack= {
  color: 'Black',
  textDecoration: 'none'
}
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      location:'',
      avatar_url:''
    };
  }
  componentDidMount() {
    const username = window.location.href.split('/').pop();
    axios.get(`https://api.github.com/users/${username}`)
    .then((response) =>{
      this.setState({
        name: response.data.name,
        location: response.data.location,
        avatar_url: response.data.avatar_url,
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let {name, location, avatar_url} = this.state
    return (
      <div>
        <button><Link style={LinkBlack} to="/">Back</Link></button>
        <div>
          <Image src={avatar_url} alt=""/>
          <h6>{name}</h6>
          <span>{location}</span>
        </div>
      </div>
    );
  }
}

export default Person;
