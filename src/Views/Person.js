import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import arrowIcon from '../assets/arrow.svg';
const PersonWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PersonCard = styled.div`
  display: inline-block;
  background: white;
  padding: 50px;
  border-radius: 30px;
  width: 200px;
  height: 200px;
  box-shadow: 0px 8px 30px -5px rgba(79, 79, 79, 0.3);
  color:#7540ED;
`
const BackButton = styled.button`
  background: none;
  border: none;
  position: fixed;
  right: 10px;
  bottom: 10px;
`
const ArrowIcon = styled.img`
  background: #7540ED;
  border-radius: 50%;
  padding: 15px;
  width: 30px;
`

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
      <PersonWrapper>
        <PersonCard>
          <Image src={avatar_url}/>
          <h4>{name}</h4>
          <h6 style={{fontWeight:'300'}}>{location}</h6>
        </PersonCard>
        <BackButton><Link style={LinkBlack} to="/"><ArrowIcon src={arrowIcon} /></Link></BackButton>
      </PersonWrapper>
    );
  }
}

export default Person;
