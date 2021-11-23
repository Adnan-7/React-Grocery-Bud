import React, { useState } from 'react';
import Alert from './alert';
import List from './list';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [IsEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, 'please enter value', 'danger');
    } else if (name && IsEditing) {
      //deal with edit
    } else {
      //show alert
      showAlert(true, 'item added to the list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
      console.log(list);
    }
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn'>
            {IsEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
