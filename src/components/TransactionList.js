import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import Menu from "./Menu";


function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8080/api/transactions/list';
        let param = { method: 'GET'};
        fetch(url, param)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setTransactions(json);
            })
            .catch(err => console.log(err));
    }, []);

    return ( 
        <><Menu /><div className="container p-2">
            <Card>
                <Card.Header>Transaction List</Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Item</td>
                                <td>Purchase Time</td>
                                <td>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(transaction => (
                                <tr key={transaction.transactionId}>
                                    <td>{transaction.transactionId}</td>
                                    <td>{transaction.item.name}</td>
                                    <td>{transaction.purchaseTime}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div></> 
    );
}

export default TransactionList;