import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddList = ({ onAddItem, items }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Nama task harus diisi');
      return;
    }

    const newItem = { name, isFinished: false, isDeleted: false, id: items.length + 1 };
    onAddItem(newItem);
    setName('');
  };

  return (
    <>
      <form className='d-grid justify-content-center' onSubmit={(e) => handleSubmit(e)}>
        <div className='list'>
          <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='input-bg' placeholder='Input Nama Task Baru' />
          <div>
            <button className='fs-5 btn btn-primary p-3 mx-2'>Add Task</button>
          </div>
        </div>
      </form>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default AddList;
