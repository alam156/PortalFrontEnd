import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {CardDeck} from "reactstrap";
import 'chartjs-plugin-datalabels';
import 'chart.js/auto';

const PieChart = () => {
    const data = {
        labels: ['Feature 1', 'Feature 2', 'Feature 3'],
        datasets: [
            {
                data: [30, 40, 30],
                backgroundColor: ['#4CAF50', '#00BCD4', '#FFC107'],
                borderColor: 'transparent',
            },
        ],
    };

    const options = {
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    size: 14,
                },
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label}: ${value}%`;
                },
            },
        },
        legend: {
            display: false,
        },
    };

    const features = [
        {
            icon: 'fa-solid fa-globe',
            title: 'Global Reach',
            description: 'Our platform has a global reach, allowing you to connect with customers from all over the world.',
        },
        {
            icon: 'fa-solid fa-mobile-screen',
            title: 'Mobile-Friendly',
            description: 'Our platform is fully responsive and mobile-friendly, ensuring that your customers can access your content on any device.',
        },
        {
            icon: 'fa-solid fa-lock',
            title: 'Secure',
            description: 'Our platform uses the latest security measures to ensure that your data is safe and secure.',
        },
    ];

    return (
        <div className="pie-chart-with-features">
            <div className="pie-chart">
                <Pie data={data} options={options} />
            </div>
            <CardDeck className="features">
                {features.map((feature, index) => (
                    <Card key={index} className="feature-card">
                        <i className={`fas ${feature.icon} fa-3x`}></i>
                        <Card.Body>
                            <Card.Title>{feature.title}</Card.Title>
                            <Card.Text>{feature.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </div>
    );
};

export default PieChart;