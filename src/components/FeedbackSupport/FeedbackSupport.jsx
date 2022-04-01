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

            <form>
                <input type='text' placeholder='Support?' />
                <button onClick={handleNext}>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackSupport;