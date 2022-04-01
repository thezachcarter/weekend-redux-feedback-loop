import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackSupport() {

    const history = useHistory();
    const handleNext = () => {
        history.push('/4');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>

            <button onClick={handleNext} >NEXT</button>
        </div>
    )
}

export default FeedbackSupport;