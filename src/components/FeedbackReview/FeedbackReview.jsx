import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackReview() {

    return (
        <div>
            <h2>Review Your Feedback</h2>

            <button>SUBMIT</button>
        </div>
    )
}

export default FeedbackReview;