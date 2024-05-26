import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = (props) => {
    console.log(props.data);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Features</th>
                <th>Resources</th>
                <th>Price</th>
                <th>Installation</th>
                <th>Order Services</th>
            </tr>
            </thead>
            <tbody>
            {props.data
                ? props.data.map((item, i) => (
                    <tr key={`${item.name}-${i}`}>
                        <td>{item.features}</td>
                        <td>{item.resources}</td>
                        <td>{item.price}</td>
                        <td>installation</td>
                        <td>order services</td>
                    </tr>
                ))
                : "loading"
            }
            </tbody>
        </Table>
    );
};

export default TableComponent;