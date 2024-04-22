import React from 'react';
import '../css/ComparisonTable.css';

const ComparisonTable = () => {
    return (
        <div className="comparison-table">
            <div className="container comparison-table-container">
                <h1 className="mt-4 mb-4">Comparison Table</h1>
                <p>Compare our products and services</p>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Feature</th>
                    <th>Product A</th>
                    <th>Product B</th>
                    <th>Product C</th>
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index}>
                        <td>Feature {index + 1}</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;