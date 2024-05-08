import React from 'react';
import '../css/ComparisonTable.css';
import backgroundImage from "./album/event_background.jpeg";

const ComparisonTable = () => {
    const items = [
        {
            feature: 'Upload virtually any file type'
        },
        {
            feature: 'Store documents in online library'
        },
        {
            feature: 'Add signature fields'
        },
        {
            feature: 'Add signature fields'
        },
        {
            feature: 'Add in-person fields'
        },
        {
            feature: 'Create intelligent forms'
        },
        {
            feature: 'Configure document access rights'
        },
        {
            feature: 'Set document access duration'
        },
        {
            feature: 'Require consent to legal notice'
        },
        {
            feature: 'Send personalised notification emails'
        }
    ]
    return (
        <div className="comparison-table">
            <div>
                <div style={{
                    backgroundImage: `url(${backgroundImage})`, height: '100px', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2>Comparison Table</h2>
                </div>
            </div>
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Feature</th>
                        <th>User Plan</th>
                        <th>Signature Plan</th>
                        <th>BeSpoke Plan</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.feature}</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparisonTable;