import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlinePlus } from "react-icons/ai";

import { Container } from "./style";

interface ItemProps {
  name: string,
  list: string[],
  handleSidebar: () => void
}

export default function Item({name, list, handleSidebar}: ItemProps) {
  const [dropdown, setDropdown] = useState(false)

  function handleDropdown() {
    setDropdown(!dropdown)
  }

  return(
    <Container>
      <div className='menu' onClick={() => handleDropdown()}>
        <h3 className='title'>{name}</h3>

        {list.length > 0 && (
          <AiOutlinePlus
            className='icon'
        />
        )}
      </div>

      <li className='list'>
        {dropdown && (
          list.map((name, index) => (
            <Link to={`tag/${name}`}>
              <a className='item' key={index} onClick={handleSidebar}> {name} </a>
            </Link>
          ))
        )}
      </li>
    </Container>
  )
}
