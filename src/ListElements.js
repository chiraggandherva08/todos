import React from 'react';
import trashIcon from './trash.svg';
import editIcon from './edit.svg';

const ListElements = ({ element, index }) => {
  return (
    <li className='element'>
      <div className="sno"> {index} </div>
      <div className="title">
        {element}
      </div>
      <div className="edit">
        <img src={editIcon} alt="edit" />
      </div>
      <div className="delete">
        <img src={trashIcon} alt="delete" />
      </div>
    </li>
  )
}

export default ListElements;
