import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onDeleteItem, onToggleCompleteItem, sortItems }) => {
  let sortedItems;
  switch (sortItems) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      sortedItems = items;
  }

  const renderToDoList = () => {
    return sortedItems.map((item) => {
      if (!item.isDeleted) {
        return <ToDoItem key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleCompleteItem={onToggleCompleteItem} />;
      }
    });
  };
  return <div className='d-grid justify-content-center'>{renderToDoList()}</div>;
};

export default ToDoList;
