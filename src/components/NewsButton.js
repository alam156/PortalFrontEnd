import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link to="/business" className="btn btn-secondary mx-1 my-4">Business</Link>
                <Link to="/entertainment" className="btn btn-secondary mx-1 my-4">Entertainment</Link>
                <Link to="/health" className="btn btn-secondary mx-1 my-4">Health</Link>
                <Link to="/science" className="btn btn-secondary mx-1 my-4">Science</Link>
                <Link to="/sports" className="btn btn-secondary mx-1 my-4">Sports</Link>
                <Link to="/technology" className="btn btn-secondary mx-1 my-4">Technology</Link>
            </div>
        </div>

    );
};

export default Buttons;