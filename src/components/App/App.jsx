import React from 'react';
import Axios from 'axios';
import './App.css';
import { useState, useEFfect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//My Components
import FeedbackFeel from '../FeedbackFeel/FeedbackFeel';
import FeedbackUnderstand from '../FeedbackUnderstand/FeedbackUnderstand';
import FeedbackSupport from '../FeedbackSupport/FeedbackSupport';
import FeedbackComments from '../FeedbackComments/FeedbackComments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import FeedbackThanks from '../FeedbackThanks/FeedbackThanks';

//Material UI
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <div className='App'>
      <CssBaseline />
      <Container maxWidth="lg">
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Router>

          <Route exact path='/'>
            <FeedbackFeel />
          </Route>

          <Route path='/2'>
            <FeedbackUnderstand />
          </Route>

          <Route path='/3'>
            <FeedbackSupport />
          </Route>

          <Route path='/4'>
            <FeedbackComments />
          </Route>

          <Route path='/5'>
            <FeedbackReview />
          </Route>

          <Route path='/6'>
            <FeedbackThanks />
          </Route>

        </Router>
      </Container>
    </div>
  );
}

export default App;
