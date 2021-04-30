import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// pages
import Homepage from './pages/Home/index';

// components
import Header from './components/Header/index';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage} />
      </Container>
    </Router>
  );
}

export default App;
