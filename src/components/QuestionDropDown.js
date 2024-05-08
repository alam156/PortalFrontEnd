import React from 'react';
import { Form } from 'react-bootstrap';

const QuestionDropdown = ({ questions, selectedQuestion, onQuestionChange }) => {
    return (
        <Form.Select value={selectedQuestion} onChange={onQuestionChange}>
            {questions.map((question, index) => (
                <option key={index} value={index}>
                    {question}
                </option>
            ))}
        </Form.Select>
    );
};

export default QuestionDropdown;