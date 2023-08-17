const Action = ({ onDeleteItems, onCompleteItems, sortItems, onSortItemsByName, onSortItemsById }) => {
  return (
    <div className='d-grid justify-content-center'>
      <div className='list'>
        {sortItems === 'id' ? (
          <button className='fs-5 btn btn-primary p-3 mx-2' onClick={onSortItemsByName}>
            Sort By Name
          </button>
        ) : (
          <button className='fs-5 btn btn-primary p-3 mx-2' onClick={onSortItemsById}>
            Sort By Id
          </button>
        )}
        <button className='fs-5 btn btn-danger p-3 mx-2' onClick={onDeleteItems}>
          Delete All
        </button>
        <button className='fs-5 btn btn-success p-3 mx-2' onClick={onCompleteItems}>
          Complete All
        </button>
      </div>
    </div>
  );
};

export default Action;
