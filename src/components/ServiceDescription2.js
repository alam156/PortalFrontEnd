import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './TableComponent';
import data from '../jsons/table2.json';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";

const ServiceDescription2 = () => {
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        setPageData(data);
        console.log(pageData['title']);
    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="container">
                <h1>{pageData['title']}</h1>
                <p>{pageData['description']}</p>
                <TableComponent data={pageData['data']} />
            </div>
            <BlackFooter/>
            <Footer/>
        </div>

    );
}

export default ServiceDescription2;