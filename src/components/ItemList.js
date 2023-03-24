import { useEffect, useState } from "react";
import { Table, Card } from "react-bootstrap";
import Menu from "./Menu";

function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8080/api/items/list';
        let param = { method: 'GET'};
        fetch(url, param)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setItems(json);
            })
            .catch(err => console.log(err));
    }, []);


    return ( 
        <><Menu /><div className="container p-2">
            <Card>
            <Card.Header>Item List</Card.Header>
                <Card.Body>
                <Table responsive className="text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Slot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.itemId}>
                                    <td>{item.itemId}</td>
                                    <td>{item.name}</td>
                                    <td>RM{item.price.toFixed(2)}</td>
                                    <td>{item.status}</td>
                                    <td>{item.slot.slotId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div></>
     );
}

export default ItemList;
