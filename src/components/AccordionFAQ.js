import Accordion from 'react-bootstrap/Accordion';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComputer} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import JsonData from "./portfolio/data/data.json";
import Navbar from "./Navbar";

const AccordionFAQ = (props) => {
    return (
        <div>
            <div className="navbar-fixed">
                <Navbar/>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="section-title text-center">
                            <h2>FAQ</h2>
                        </div>
                        <Accordion>
                            {props.data ? (
                                props.data.map((d, i) => (
                                    <Accordion.Item eventKey={`${i}`}>
                                        <Accordion.Header>{d.question}</Accordion.Header>
                                        <Accordion.Body>{d.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))
                            ) : (
                                <div>Loading...</div>
                            )}
                        </Accordion>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AccordionFAQ;