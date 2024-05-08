const Options = (props) => {
    return (
        <div className="options">
            <h1 className="options-header">{props.title}</h1>
            <div className="options-container">
                {props.options.map((option) => {
                    return (
                        <div>
                            <div
                                className="option-item bg-secondary"
                                onClick={option.handler}
                                key={option.id}
                            >
                                {option.name}
                            </div>
                            <div>
                                <br/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;