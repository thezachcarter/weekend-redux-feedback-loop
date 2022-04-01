import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackComment() {

    const history = useHistory();
    const handleNext = () => {
        history.push('/5');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <button onClick={handleNext} >NEXT</button>
        </div>
    )
}

export default FeedbackComment;