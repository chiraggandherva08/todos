import React from 'react'
import App from './App';
import Element from './ListElements';

const List = ({ list }) => {
  return (
    <ul className='list'>{
      list.map((element, index) => {
        return (
          <Element
            key={index}
            element={element}
            index={index}/>
        )
      })
    }</ul>
  )
}

export default List;
