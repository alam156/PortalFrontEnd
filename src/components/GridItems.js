import React from 'react';
import '../css/GridItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


const GridItems = () => {
    const gridItems = [
        {
            icon: require('./icons/icon1.png'),
            title: 'High Trust',
            description: 'Expert in high-trust, Advanced & Qualified Electronic Signatures.'
        },
        {
            icon: require('./icons/icon2.png'),
            title: 'Complete PKI Solution',
            description: 'Turnkey solution providing both local and remote signing plus a built-in complete PKI system.'
        },
        {
            icon: require('./icons/icon3.png'),
            title: 'Powerful workflow',
            description: 'Powerful workflow engine, enterprise policy control, multi-lingual & fully rebrandable.'
        },
        {
            icon: require('./icons/icon4.png'),
            title: 'Easily integrable',
            description: 'Easily integrate with any web or mobile app or use standard connectors for popular CRM/ERP apps.'
        },
        {
            icon: require('./icons/icon5.png'),
            title: 'Easily Deployable',
            description: 'Deploy fully on-premise or private in-country hosting or public cloud service'
        },
        {
            icon: require('./icons/icon6.png'),
            title: 'Transparent and Automatic',
            description: 'A great experience on desktop, tablet & mobile. Advanced PKI capability that is transparent and automatic.'
        }
    ];

    return (
        <div className="grid-items">
            <div className="row">
                {gridItems.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="grid-item">
                            <img
                                src={item.icon}
                                alt=""
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto' }}
                            />

                            <h4 className="grid-title">{item.title}</h4>
                            <p className="grid-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridItems;