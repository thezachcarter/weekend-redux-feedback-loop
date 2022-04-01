import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function FeedbackComment() {

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <button>NEXT</button>
        </div>
    )
}

export default FeedbackComment;