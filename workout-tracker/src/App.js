import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <Container>
            <Row>
                <Col>col 1 of 2</Col>
                <Col>col 2 of 2</Col>
            </Row>
            <Row>
                <Col>col2 1 of 2</Col>
                <Col>col2 2 of 2</Col>
            </Row>
        </Container>
    )
}

export default App;
