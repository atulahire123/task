import React, { useState } from 'react';
import './CourseInput.css';
const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [inputFilled, setInputFilled] = useState(false);

    const goalInputChangeHandler = event => {
        const value = event.target.value;
        setEnteredValue(value);
        setInputFilled(value.length > 0);
        setIsValid(value.trim().length > 0);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (!isValid) {
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
                <button
                    type="submit"
                    style={{ backgroundColor: inputFilled ? 'red' : 'lightcoral' }}
                    disabled={!isValid}
                >
                    Add Goal
                </button>
            </div>
        </form>
    );
};

export default CourseInput;
