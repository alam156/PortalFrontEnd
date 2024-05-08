import React from "react";

import Link from "./Link";

const DeliveryLink = () => {
    const getUrl = () => {
        return `https://bcc.gov.bd`;
    };

    return (
        <Link url={getUrl()} title={"the website of Bangladesh Computer Council"} />
    );
};

export default DeliveryLink;