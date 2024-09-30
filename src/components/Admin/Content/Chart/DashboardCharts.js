import React from 'react';
import { Line } from 'react-chartjs-2'; // For the line chart
import { Bar } from 'react-chartjs-2'; // For the bar chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);

const DashboardCharts = () => {
    // Sample data for Earnings Breakdown (Line Chart)
    const earningsData = {
        labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
        datasets: [
            {
                label: 'Earnings Breakdown',
                data: [0, 10000, 20000, 30000, 25000, 40000],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    // Sample data for Monthly Revenue (Bar Chart)
    const revenueData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Revenue',
                data: [5000, 10000, 8000, 12000, 15000, 14000],
                backgroundColor: 'blue',
            },
        ],
    };

    return (
        <div className="container-xl px-4">
            <div className="row g-4">
                {/* Earnings Breakdown Chart */}
                <div className="col-12 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-header">
                            <h5 className="mb-0">Earnings Breakdown</h5>
                        </div>
                        <div className="card-body">
                            <Line data={earningsData} options={{ responsive: true }} />
                        </div>
                    </div>
                </div>

                {/* Monthly Revenue Chart */}
                <div className="col-12 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-header">
                            <h5 className="mb-0">Monthly Revenue</h5>
                        </div>
                        <div className="card-body">
                            <Bar data={revenueData} options={{ responsive: true }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
