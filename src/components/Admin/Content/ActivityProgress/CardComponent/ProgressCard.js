import { Button, ProgressBar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProgressCard = () => {
    return (
        <Card className='h-100'>
            <Card.Header>Progress Tracker</Card.Header>
            <Card.Body>
                <h4 class="small">Server Migration
                    <span class="float-end fw-bold">20%</span>
                </h4>
                <ProgressBar variant="danger" now={20} />
                <h4 class="small">Server Tracking
                    <span class="float-end fw-bold">40%</span>
                </h4>
                <ProgressBar variant="warning" now={40} />
                <h4 class="small">Customer Database
                    <span class="float-end fw-bold">60%</span>
                </h4>
                <ProgressBar variant="info" now={60} />
                <h4 class="small">Payout Details
                    <span class="float-end fw-bold">80%</span>
                </h4>
                <ProgressBar variant="danger" now={80} />
                <h4 class="small">Account Setup
                    <span class="float-end fw-bold">Complete!</span>
                </h4>
                <ProgressBar variant="success" now={100} />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ProgressCard;