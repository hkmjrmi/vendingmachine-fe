import { useState } from "react";
import { Form, Button, Card} from "react-bootstrap";
function AddItem(props) {

    
    const [item, setItem] = useState({
        name:"",
        price:0,
        category:"",
        size:"",

    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:8080/api/slots/" + props.slotId + "/items/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })
          .then((response) => response.json())
          .then((data) => console.log((data)), alert("Success"))
          .catch((error) => console.log(error));
          
    };
    
    
    return ( 
        <div>
              <Card className="my-5">
                <Card.Body className="p-5">
                  <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" 
                    value={item.name} onChange={(e) =>setItem({ ...item, name: e.target.value })} required />
                  </Form.Group>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Category"
                      value={item.category}
                      onChange={(e) =>
                        setItem({ ...item, category: e.target.value })
                      }
                    required />
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      value={item.price}
                      onChange={(e) =>
                        setItem({ ...item, price: e.target.value })
                      }
                    required />
                  </Form.Group>
                  <Form.Group controlId="size">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter size"
                      value={item.size}
                      onChange={(e) =>
                        setItem({ ...item, size: e.target.value })
                      }
                    required />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
                </Card.Body>
              </Card>
        </div>
     );
}

export default AddItem;