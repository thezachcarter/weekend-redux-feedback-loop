import React from 'react';
import Axios from 'axios';
import './App.css';
import {useState, useEFfect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeedbackFeel from '../FeedbackFeel/FeedbackFeel';
import FeedbackUnderstand from '../FeedbackUnderstand/FeedbackUnderstand';
import FeedbackSupport from '../FeedbackSupport/FeedbackSupport';
import FeedbackComment from '../FeedbackComment/FeedbackComment';
import FeedbackReview from '../FeedbackReview/FeedbackReview'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        <Route exact path ='/'>      
          <FeedbackFeel />
        </Route>
  
        <Route path ='/2'>
          <FeedbackUnderstand />
        </Route>

        <Route path ='/3'>
          <FeedbackSupport />
        </Route>

        <Route path ='/4'>
          <FeedbackComment />
        </Route>

        <Route path ='/5'>
          <FeedbackReview />
        </Route>

      </Router>

    </div>
  );
}

export default App;
