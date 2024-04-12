// CourseGoalList.js
import React from 'react';
import './CourseGoalList.css';

const CourseGoalList = (props) => {
    return (
        <ul className="goal-list">
            {props.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
