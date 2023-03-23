import { useEffect, useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BuyItem from "./BuyItem";

function BuyList() {
    
    const [slots, setSlots] = useState([]);
    const [slotId, setSlotId] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        let url = 'http://localhost:8080/api/slots/list';
        let param = { method: 'GET'};
        fetch(url, param)
        .then(data => data.json())
        .then(json => {
            console.log(json);
            setSlots(json);
        })
        .catch(err => console.log(err));
    }, []);

    const getItemsBySlot = (slotId) => {
        
        setSlotId(slotId);
        setShowModal(true);
        
    };

    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div>
        <Button variant="danger" size="sm" style={{borderRadius:"0px"}}>
                <Link className="text-light text-decoration-none" to={"/login"}>
                    Machine Maintenance (Admin)
                </Link>
        </Button>
        <Container className="mt-5 p-2">
            <h4 className="mb-4 text-center">Welcome to Vending Machine</h4>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {slots.map((slot) => (
                    <Col key={slot.slotId} className="mb-4">
                        <Card className="text-center">
                            <Card.Header>Slot #{slot.slotId}</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <sub>Current Quantity</sub>
                                <h1>{slot.currentQuantity}</h1>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>{slot.size}</Card.Text>
                                <Card.Text>RM {slot.price.toFixed(2)}</Card.Text>
                                <div className="d-grid gap-2">
                                <Button variant="primary" onClick={() => getItemsBySlot(slot.slotId)}>View</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Item Available</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BuyItem slotId={slotId} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
        
      );
}

export default BuyList;