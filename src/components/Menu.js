import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Menu() {

    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        navigate('/login');
    }


   
    return (
        <Navbar>
            <Navbar.Brand className='p-1'>Vending Machine</Navbar.Brand>
            <Nav>
                <Link className="mx-2 text-decoration-none" to="/transactionlist">Transaction List</Link>
                <Link className="mx-2 text-decoration-none" to="/slotlist">Slot List</Link>
                <Link className="mx-2 text-decoration-none" to="/itemlist">Item List</Link>
            </Nav>
            <Nav className='ms-auto'>
            {loggedIn && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
            </Nav>
        </Navbar>
    );
}

export default Menu;
