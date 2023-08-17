const ToDoItem = ({ item, onDeleteItem, onToggleCompleteItem }) => {
  return (
    <div className='list' style={item.isFinished ? { background: '#2c692d' } : {}}>
      #{item.id} - {item.name}
      <div>
        <button onClick={() => onDeleteItem(item.id)} className='fs-5 btn btn-danger p-3 mx-2'>
          Delete
        </button>

        <button onClick={() => onToggleCompleteItem(item.id)} className='fs-5 btn btn-success p-3'>
          {item.isFinished ? 'Reopen' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
