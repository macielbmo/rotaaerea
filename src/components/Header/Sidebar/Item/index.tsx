import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

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
      <div className='menu'>

        <Link to={`category/${name}`} onClick={() => handleSidebar()} className='link'>
          <h3 className='title'>{name}</h3>
        </Link>

        {list.length > 0 && (
          <div className='icon-drop-list'>
            {!dropdown ? (
              <AiOutlinePlus
              className='icon'
              onClick={() => handleDropdown()}
            />
            ) : (
              <RiSubtractFill
              className='icon'
              onClick={() => handleDropdown()}
            />
            )}
          </div>
        )}
      </div>

      <li className='list'>
        {dropdown && (
          list.map((name, index) => (
            <Link to={`tag/${name}`} onClick={() => handleSidebar()}>
              <a className='item' key={index} onClick={() => handleSidebar()}> {name} </a>
            </Link>
          ))
        )}
      </li>
    </Container>
  )
}
