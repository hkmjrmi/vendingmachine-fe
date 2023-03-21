import { Link } from "react-router-dom";

function Menu() {
   
    return (
        <div className="navbar">
            <h1>VendingMachine</h1>
            <div className="links">
                <Link to="/transactionlist">Transaction List</Link>
                <Link to="/slotlist">Slot List</Link>
                <Link to="/itemlist">Item List</Link>
            </div>
        </div>
    );
}

export default Menu;
