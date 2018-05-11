import React, { Component } from 'react';
import Home from './Views/Home';
import Person from './Views/Person'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

import './App.css';

const Wrapper = styled.div`
  width: 350px;
  height: 600px;
  margin: auto;
  border: #488aff 4px solid;
  border-radius: 20px;
  background: white;
`
class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Wrapper>
              <Route exact path="/" component={Home}/>
              <Route path="/:username" component={Person}/>
            </Wrapper>
          </Switch>
      </div>
    );
  }
}

export default App;
