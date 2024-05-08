import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const questions = [
    {
        text: 'আপনি কি ভার্চুয়াল লার্জ স্কেল ইন্টিগ্রেটেড সার্কিট (VLSI) সম্পর্কে জানেন?',
        options: [
            { value: 'A', text: 'হ্যাঁ, আমি জানি' },
            { value: 'B', text: 'না, আমি জানি না' },
            { value: 'C', text: 'কিছুটা জানি' },
            { value: 'D', text: 'এটা কী?' }
        ]
    },
    {
        text: 'আপনি কি বাংলাদেশে VLSI সেক্টরে কাজ করার জন্য প্রয়োজনীয় শিক্ষাগত যোগ্যতা রাখেন?',
        options: [
            { value: 'A', text: 'হ্যাঁ, আমি রাখি' },
            { value: 'B', text: 'না, আমি রাখি না' },
            { value: 'C', text: 'এটা কিছুটা ভাল লাগে' },
            { value: 'D', text: 'আমি এটা সম্পর্কে কিছুই জানি না' }
        ]
    },
    {
        text: 'আপনি কি বাংলাদেশে VLSI সেক্টরের সম্ভাবনা নিয়ে আগ্রহী?',
        options: [
            { value: 'A', text: 'হ্যাঁ, আমি আগ্রহী' },
            { value: 'B', text: 'না, আমি আগ্রহী না' },
            { value: 'C', text: 'এটা কিছুটা ভাল লাগে' },
            { value: 'D', text: 'আমি এটা সম্পর্কে কিছুই জানি না' }
        ]
    },
    {
        text: 'আপনি কি বাংলাদেশে VLSI সেক্টরে কাজ করতে চান?',
        options: [
            { value: 'A', text: 'হ্যাঁ, আমি চাই' },
            { value: 'B', text: 'না, আমি চাই না' },
            { value: 'C', text: 'এটা কিছুটা ভাল লাগে' },
            { value: 'D', text: 'আমি এটা সম্পর্কে কিছুই জানি না' }
        ]
    },
    {
        text: 'আপনি কি বাংলাদেশে VLSI সেক্টরে কাজ করার জন্য প্রস্তুত?',
        options: [
            { text: 'A', value: 'হ্যাঁ, আমি প্রস্তুত' },
            { text: 'B', value: 'না, আমি প্রস্তুত না' },
            { text: 'C', value: 'এটা কিছুটা ভাল লাগে' },
            { text: 'D', value: 'আমি এটা সম্পর্কে কিছুই জানি না' }
        ]
    },
    {
        text: 'What is your favorite animal?',
        options: [
            { text: 'A', value: 'dogs' },
            { text: 'B', value: 'cats' },
            { text: 'C', value: 'birds' },
            { text: 'D', value: 'fish' }
        ]
    },
    {
        text: 'What is your favorite color?',
        options: [
            { text: 'A', value: 'red' },
            { text: 'B', value: 'blue' },
            { text: 'C', value: 'green' },
            { text: 'D', value: 'yellow' }
        ]
    },
    {
        text: 'What is your favorite food?',
        options: [
            { text: 'A', value: 'pizza' },
            { text: 'B', value: 'burgers' },
            { text: 'C', value: 'sushi' },
            { text: 'D', value: 'tacos' }
        ]
    },
    {
        text: 'What is your favorite animal?',
        options: [
            { text: 'A', value: 'dogs' },
            { text: 'B', value: 'cats' },
            { text: 'C', value: 'birds' },
            { text: 'D', value: 'fish' }
        ]
    },
    {
        text: 'What is your favorite color?',
        options: [
            { text: 'A', value: 'red' },
            { text: 'B', value: 'blue' },
            { text: 'C', value: 'green' },
            { text: 'D', value: 'yellow' }
        ]
    },
    {
        text: 'What is your favorite food?',
        options: [
            { text: 'A', value: 'pizza' },
            { text: 'B', value: 'burgers' },
            { text: 'C', value: 'sushi' },
            { text: 'D', value: 'tacos' }
        ]
    },
    {
        text: 'What is your favorite animal?',
        options: [
            { text: 'A', value: 'dogs' },
            { text: 'B', value: 'cats' },
            { text: 'C', value: 'birds' },
            { text: 'D', value: 'fish' }
        ]
    }
];

const Questionnaire = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleOptionChange = (event, questionIndex) => {
        const { value } = event.target;
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const answers = Object.entries(selectedOptions).map(([questionIndex, optionValue]) => ({
            qno: `q${questionIndex}`,
            answer: optionValue,
        }));

        axios.post('http://localhost:8085/api/send-answers', answers)
            .then((response) => {
                setResponse(response.data);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setResponse(null);
            });
    };

    useEffect(() => {
        if (response || error) {
            setTimeout(() => {
                setResponse(null);
                setError(null);
            }, 5000);
        }
    }, [response, error]);

    return (
        <div className="row">
            <div className="questionnaire">
                <h2 className="text-center mb-4">Questionnaire</h2>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <Form onSubmit={handleSubmit}>
                            {questions.map((question, index) => (
                                <FormGroup key={index} className="mb-4">
                                    <Label>{question.text}</Label>
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="form-check">
                                            <Input
                                                type="radio"
                                                name={`question${index}`}
                                                value={option.value}
                                                checked={selectedOptions[index] === option.value}
                                                onChange={(event) => handleOptionChange(event, index)}
                                                className="me-2"
                                            />
                                            <Label check>{option.text}</Label>
                                        </div>
                                    ))}
                                </FormGroup>
                            ))}
                            <Button type="submit" className="mt-4">
                                Submit
                            </Button>
                        </Form>
                        {response && (
                            <div className="mt-4">
                                <h3>Response:</h3>
                                <pre>{JSON.stringify(response, null, 2)}</pre>
                            </div>
                        )}
                        {error && (
                            <div className="mt-4 alert alert-danger">
                                <h3>Error:</h3>
                                <p>{error}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-md-2">

                    </div>


                </div>

            </div>

        </div>

    );
};

export default Questionnaire;