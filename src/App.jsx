import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddList from './components/AddList';
import { useEffect, useState } from 'react';
import Action from './components/Action';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')));
  const [sortItems, setSortItems] = useState('id');

  const handleAddItem = (item) => {
    setItems([...items, item]);
    console.log(items);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, isDeleted: true } : item)));
  };

  const handleDeleteItems = () => {
    setItems((items) => items.map((item) => ({ ...item, isDeleted: true })));
  };

  const handleToggleCompleteItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, isFinished: !item.isFinished } : item)));
  };

  const handleCompleteItems = () => {
    setItems((items) => items.map((item) => ({ ...item, isFinished: true })));
  };

  const handleSortItemsByName = () => {
    setSortItems('name');
  };

  const handleSortItemsById = () => {
    setSortItems('id');
  };

  useEffect(() => localStorage.setItem('items', JSON.stringify(items)), [items]);
  return (
    <div>
      <div className='todo'>
        <Header />
        <AddList onAddItem={handleAddItem} items={items} />
        <Action
          onDeleteItems={handleDeleteItems}
          onCompleteItems={handleCompleteItems}
          sortItems={sortItems}
          onSortItemsByName={handleSortItemsByName}
          onSortItemsById={handleSortItemsById}
        />
        <ToDoList items={items} onDeleteItem={handleDeleteItem} onToggleCompleteItem={handleToggleCompleteItem} sortItems={sortItems} />
      </div>
    </div>
  );
}

export default App;
