import ItemList from './components/ItemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TransactionList from './components/TransactionList';
import SlotList from './components/SlotList';
import AddItem from './components/AddItem';
import BuyList from './components/BuyList';
import Login from './components/Login';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function can be called from the Login component when the user is successfully logged in
  function handleLogin() {
    setIsLoggedIn(true);
  }

  // This function can be called from the Logout component when the user is logged out
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/itemlist' element={<ItemList />}></Route>
        <Route path='/transactionlist' element={<TransactionList />}></Route>
        <Route path='/slotlist' element={<SlotList />}></Route>
        <Route path='/additem' element={<AddItem />}></Route>
        <Route path='/' element={<BuyList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
