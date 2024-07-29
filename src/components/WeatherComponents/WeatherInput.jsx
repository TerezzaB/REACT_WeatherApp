import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export default function ToDoForm({ onAddCity }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim()){
      setError('Name of the city is reguired!!!');
      return;
    }
    setError('');
    onAddCity(name);
    setName('');
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center">
          <div><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter city name" className="my-10 mr-5 sm:mr-10 p-3 sm:p-4 text-center border rounded-2xl bg-white border-grey text-gray-900 " /></div>
          <div><button type="submit" className="p-3 px-4 sm:p-4 sm:px-5 bg-purple-800 hover:bg-purple-700 rounded-2xl font-bold"><FontAwesomeIcon icon={faPlusCircle} className="mr-2" />Add City</button></div>
        </div>
        {error && <div className="font-bold text-purple-800 mt-2">{error}</div>}
      </form>
    </>
  )
  
}
