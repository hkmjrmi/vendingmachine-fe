import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Menu from "./Menu";
import AddItem from "./AddItem";

function SlotList() {

    
    const [slots, setSlots] = useState([]);
    const [slotId, setSlotId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    // Create 20 slots
    const createSlot = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/slots/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
    
          const data = await response.text();
          alert(data);
          window.location.reload();

        } catch (error) {

          alert("Cannot create slot");
        }
    };

    // Retrieve all the slots list
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

    
    const handleClick = () => {
        createSlot();
    };

    const handleAddItem = (id) => {
        setSlotId(id);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return ( 
        <>
        <Menu />
        <Container className="p-2">
            <Button variant="danger" className="mb-2" onClick={handleClick}>Create Slot</Button>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {slots.map((slot) => (
                <Col key={slot.slotId} className="mb-4">
                <Card>
                    <Card.Body>
                    <Card.Title>Slot #{slot.slotId}</Card.Title>
                    <Card.Text>Size: {slot.size}</Card.Text>
                    <Card.Text>Price: RM {slot.price}</Card.Text>
                    <Card.Text>Current Quantity: {slot.currentQuantity}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className="d-grid gap-2">
                    <Button variant="danger" onClick={() => handleAddItem(slot.slotId)}>Add Item in Slot</Button>
                    </div>
                    </Card.Footer>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddItem slotId={slotId} />
            </Modal.Body>
        </Modal>
        </>
    );
}

export default SlotList;
