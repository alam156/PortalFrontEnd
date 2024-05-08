import React from 'react';
import '../css/GridItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


const GridItems = () => {
    const gridItems = [
        {
            icon: require('./icons/icon1.png'),
            title: 'Local Certificate & Signing',
            description: 'BCC provides users an easy to use online portal (bcc-ca.gov.bd) where user can apply for certificates for their locally held keypair (in operating system keystore or in usb dongle) . BCC provides desktop tools to the users for helping them creating keypair and downloading and installing certificates. Users can use their locally held keypair and certificate to locally sign any document/data/software etc. BCC also provides necessary tools and services so that third party business applications can easily enable local signing in their workflow.'
        },
        {
            icon: require('./icons/icon2.png'),
            title: 'Identity Certificate',
            description: 'Identity Certificate is mainly used to prove someone’s identity in any information system or in any system the internet or digital space. For example, with this certificate someone can sign a document of any format (pdf/doc/excel/ppt/etc.) or any online form to prove that he/she knowingly sign this with his/her legally valid digital identity.'
        },
        {
            icon: require('./icons/icon3.png'),
            title: 'SSL Client Authority Certificate',
            description: 'SSL Client Authentication certificate is used along with the SSL Server certificate to allow users to log in to any system using TLS authentication. This certificate can not be used without any SSL based systems and require configuring the web server to accept the SSL based authentication. This is popular to enable two factor authentication of a system and to strengthen the authentication system of a system.'
        },
        {
            icon: require('./icons/icon4.png'),
            title: 'Code Signing Certificate',
            description: 'Code Signing Certificate is used mainly by the Publisher of a Software to ensure the authenticity of their Software. All trusted software is usually digitally signed with code signing certificates. This certificate is popular among Software companies.'
        },
        {
            icon: require('./icons/icon5.png'),
            title: 'Encryption Certificate',
            description: 'Encryption certificate is used to encrypt any files, directory, file systems, partition or devices). BCC CA provides key escrow service only for this kind of service and this is only available under Class 3 i.e. after physical verification.'
        },
        {
            icon: require('./icons/icon6.png'),
            title: 'Timestamping Services provided by BCC',
            description: 'Timestamping can be used to independently and irrefutably  prove the time of a transaction, the time a document was signed and when it was archived. BCC provides timestamping as an API service.'
        }
    ];

    return (
        <div className="grid-items">
            <div className="row">
                {gridItems.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="grid-item border-top-green">
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