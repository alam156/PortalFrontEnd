import React from 'react';
import '../css/Jumbotron.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-dark">
            <h1 className="display-4 text-white">Hello, world!</h1>
            <p className="lead text-white">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p className="text-white">It uses utility classes for typography and spacing to space content out within the larger container.
            It uses utility classes for typography and spacing to space content out within the larger container.
            It uses utility classes for typography and spacing to space content out within the larger container.
            It uses utility classes for typography and spacing to space content out within the larger container.
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    );
};

export default Jumbotron;