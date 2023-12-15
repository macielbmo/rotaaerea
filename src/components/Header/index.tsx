import { useState } from 'react'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillBell } from 'react-icons/ai'

import { Container } from './style'
import { Main } from '../../assets/styles/global'
import Sidebar from './Sidebar'

export default function Header() {
  const [openSidebar, setOpenSideber] = useState(false)

  function handleSidebar() {
    setOpenSideber(!openSidebar)
  }

  const listCategory = [
    {
      "id": "1",
      "name": "Notícia"
    },
    {
      "id": "2",
      "name": "Companhias Aéreas"
    },
    {
      "id": "3",
      "name": "Aeroportos"
    },
    {
      "id": "4",
      "name": "Industria"
    },
    {
      "id": "5",
      "name": "Militar"
    }
  ]

  return(
    <Container>
      <Main className='main'>
        <div className='content-menu'>
          <div className='menu'>
            <span onClick={handleSidebar}><GiHamburgerMenu /></span>
          </div>

          <div className='title'>
            <a href="/"><h1>Rota Aérea</h1></a>
          </div>

          <div className='newsletter'>
            <AiFillBell />
            <span>Boletim de Notícias</span>
          </div>
        </div>

        <nav className='content-nav'>
          <ul className='list'>
            {listCategory.map((item) => (
              <Link to={`category/${item.name}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </Main>

      {openSidebar && (
          <Sidebar handleSidebar={handleSidebar}/>
        )}
    </Container>
  )
}
