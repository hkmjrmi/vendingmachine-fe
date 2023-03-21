import ItemList from './components/ItemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TransactionList from './components/TransactionList';
import SlotList from './components/SlotList';
import AddItem from './components/AddItem';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/itemlist' element={<ItemList />}></Route>
        <Route path='/transactionlist' element={<TransactionList />}></Route>
        <Route path='/slotlist' element={<SlotList />}></Route>
        <Route path='/additem' element={<AddItem />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
