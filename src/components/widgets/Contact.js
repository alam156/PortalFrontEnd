import React from "react";

import UrlIcon from "../icons/call.svg";

const ContactLink = () => {
    return (
        <a href="tel:1999" className="tel-link">
            <h1 className="tel-header"> Call +88-02-55007184 (ext 105) </h1>
        </a>
    );
};

export default ContactLink;