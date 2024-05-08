import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal, Form, Table, Card, Dropdown,DropdownButton, DropdownItem} from 'react-bootstrap';
import {CardDeck} from "reactstrap";
import DatePicker from "react-datepicker";
import axios from "axios";

const CostDashBoard = () => {
    const [isAddCostOpen, setAddCostOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [elementName, setElementName] = useState('');
    const [costAmount, setCostAmount] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

    const handleMonthChange = (eventKey) => {
        setSelectedMonth(eventKey);
    };

    const startDate = new Date();
    startDate.setMonth(selectedMonth);
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMonth(selectedMonth + 1);
    endDate.setDate(0);
    endDate.setHours(23, 59, 59, 999);

    const events = [];
    for (let i = 0; i < new Date(endDate - startDate).getDate(); i++) {
        const date = new Date(startDate);
        date.setDate(i + 1);
        events.push({
            date: date.toLocaleDateString(),
            event: `Event ${i + 1}`,
        });
    }

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];




    const handleDate = (e) => {
        setDate(e);
    };

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const handleElementName = (e) => {
        const value = e.target.value;
        setElementName(value);
    }

    const handleCostAmount = (e) => {
        const value = e.target.value;
        setCostAmount(value);
    }

    const handleAddCostClick = () => {
        setAddCostOpen(!isAddCostOpen);
    };

    const handleAddCostSave = async (e) => {
        // Save the new cost here
        e.preventDefault();
        try {
            // const dateString = startDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
            //const endDateString = endDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
            //console.log(dateString);
            console.log(costAmount);
            const response = await axios.post('http://localhost:8089/api/add-cost', {
                name,
                date,
                elementName,
                costAmount
            });

            console.log(response.data);
            //navigate('/calendar');
            // Reset form fields after successful submission
            setName('');
            setElementName('');
            setDate(new Date());
            setCostAmount('');
        } catch (error) {
            console.error(error);
        }
    };

    const expenses = [
        {title: 'Rent', cost: 1500},
        {title: 'Groceries', cost: 300},
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Demo Tracker</h1>
            </header>
            <main>
                <Container fluid>
                    <Row>
                        <Col md={8}>
                            <section className="dashboard">
                                <h2>Dashboard</h2>
                                <CardDeck>
                                    {expenses.map((expense, index) => (
                                        <Card key={index} style={{width: '18rem'}}>
                                            <Card.Body>
                                                <Card.Title>{expense.title}</Card.Title>
                                                <Card.Text>
                                                    <div className="expense-circle">
                                                        <span className="expense-amount">${expense.cost}</span>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </CardDeck>
                            </section>
                        </Col>
                        <Col md={4}>
                            <section className="add-cost">
                                <Button onClick={handleAddCostClick} block>
                                    Add Cost
                                </Button>
                                <Modal show={isAddCostOpen} onHide={handleAddCostClick}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Cost</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value={name}
                                                    onChange={handleName}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="elementName">
                                                <Form.Label>Cost element Name</Form.Label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="elementName"
                                                    value={elementName}
                                                    onChange={handleElementName}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="costAmount">
                                                <Form.Label>Cost Amount</Form.Label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="costAmount"
                                                    value={costAmount}
                                                    onChange={handleCostAmount}
                                                    required
                                                />
                                            </Form.Group>
                                            <div>
                                                <br/>
                                            </div>
                                            <Form.Group controlId="date">
                                                <Form.Label>Date</Form.Label>
                                                <DatePicker
                                                    className="form-control"
                                                    id="date"
                                                    selected={date}
                                                    dateFormat="MMMM d, yyyy"
                                                    value={date}
                                                    onChange={handleDate}
                                                    required
                                                />
                                            </Form.Group>

                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleAddCostClick}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleAddCostSave}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <DropdownButton id="month-dropdown" title={monthNames[selectedMonth]}>
                                {monthNames.map((monthName, index) => (
                                    <Dropdown.Item key={index} eventKey={index}>
                                        {monthName}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h2>Monthly Report (1-15)</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                </tr>
                                </thead>
                                <tbody>
                                {events.slice(0, 15).map((event, index) => (
                                    <tr key={index}>
                                        <td>{event.date}</td>
                                        <td>{event.event}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6}>
                            <h2>Monthly Report (16-30)</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                </tr>
                                </thead>
                                <tbody>
                                {events.slice(15).map((event, index) => (
                                    <tr key={index + 15}>
                                        <td>{event.date}</td>
                                        <td>{event.event}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h2>Monthly Report (1-15)</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                </tr>
                                </thead>
                                <tbody>
                                {events.slice(0, 15).map((event, index) => (
                                    <tr key={index}>
                                        <td>{event.date}</td>
                                        <td>{event.event}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6}>
                            <h2>Monthly Report (16-30)</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                </tr>
                                </thead>
                                <tbody>
                                {events.slice(15).map((event, index) => (
                                    <tr key={index + 15}>
                                        <td>{event.date}</td>
                                        <td>{event.event}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default CostDashBoard;