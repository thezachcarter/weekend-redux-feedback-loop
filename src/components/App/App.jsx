import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEFfect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* <Route path ='/1'>      
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
      </Route> */}

    </div>
  );
}

export default App;
