import { useEffect, useState } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import Menu from "./Menu";

function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8080/api/items/available/list';
        let param = { method: 'GET'};
        fetch(url, param)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setItems(json);
            })
            .catch(err => console.log(err));
    }, []);

    function addTransaction(itemId, transactionRequest) {
        const url = `http://localhost:8080/api/items/${itemId}/transactions/add`;
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(transactionRequest)
        };
        fetch(url, options)
          .then(response => response.json())
          .then(() => {
            alert('transaction added successfully');
            window.location.reload(); // To automatically reload the page after success onClick event
          })
          .catch(error => console.error(error));
    }

    function handleBuyClick(itemId) {
        const transactionRequest = {};
        addTransaction(itemId, transactionRequest);
    }


    return ( 
        <><Menu /><div className="container p-2">
            <Row xs={1} md={2} lg={4}>
                {items.map(item => (
                    <Col key={item.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Price: RM{item.price.toFixed(2)}
                                </Card.Text>
                                <Card.Text>
                                    Slot {item.slot.slotId}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <div className="d-grid gap-2">
                                <Button variant="primary"  onClick={() => handleBuyClick(item.itemId)}>Buy</Button>
                            </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div></>
     );
}

export default ItemList;
