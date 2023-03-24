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
        <div className='bg-danger'>
          <Navbar>
            <Nav className='me-auto'>
              <Link className="mx-2 text-light text-decoration-none" to="/transactionlist">Transaction List</Link>
              <Link className="mx-2 text-light text-decoration-none" to="/slotlist">Slot List</Link>
              <Link className="mx-2 text-light text-decoration-none" to="/itemlist">Item List</Link>
              <Link className="mx-2 text-light text-decoration-none" to="/">Buy Screen</Link>
            </Nav>
            <Nav className='ms-auto'>
              {loggedIn && <Nav.Link onClick={handleLogout} className='mx-2 text-light'>Logout</Nav.Link>}
            </Nav>
          </Navbar>
        </div>
    );
      
      
}

export default Menu;
