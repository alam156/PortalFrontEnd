import React, { useState } from 'react';
import "../css/Steps.css";

const steps = [
    {
        title: 'Registration',
        description: 'Enter your personal information to create an account.',
        color: '#4CAF50'
    },
    {
        title: 'Quick Enroll',
        description: 'Choose the courses you want to enroll in.',
        color: '#2196F3'
    },
    {
        title: 'Quick Pair',
        description: 'Generate a key pair to secure your account.',
        color: '#FFC107'
    },
    {
        title: 'Quick Installation',
        description: 'Install the software and complete the setup.',
        color: '#F44336'
    }
];

const Steps = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePrev = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    return (
        <div className="steps">
            <div className="step-container">
                <div className="row justify-content-center">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index <= activeStep ? 'active' : ''}`}
                            style={{ backgroundColor: step.color }}
                        >
                            <div className="step-number">{index + 1}</div>
                            <div className="step-title">{step.title}</div>
                            <div className="step-description">{step.description}</div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="arrow-container">
                <div
                    className={`arrow ${activeStep === 0 ? 'disabled' : ''}`}
                    onClick={handlePrev}
                >
                    &lt;
                </div>
                <div
                    className={`arrow ${activeStep === steps.length - 1 ? 'disabled' : ''}`}
                    onClick={handleNext}
                >
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default Steps;