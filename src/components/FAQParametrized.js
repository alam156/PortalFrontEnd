import React, { useState, useEffect } from "react";
import JsonData from "../jsons/faq.json"
import {Features} from "./portfolio/components/features";
import AccordionFAQ from "./AccordionFAQ";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";

const FAQParametrized = () => {
    const [faqData, setFaqData] = useState({});
    useEffect(() => {
        setFaqData(faqData);
        console.log(faqData);
    }, []);
    return (
        <div>
            <AccordionFAQ data = {JsonData}></AccordionFAQ>
            <BlackFooter/>
            <Footer/>
        </div>
    );

}
export default FAQParametrized;