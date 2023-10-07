import { useState } from 'react'

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
            <li>Notícias</li>
            <li>Companhias Aéreas</li>
            <li>Aeroportos</li>
            <li>Industria</li>
            <li>Militar</li>
          </ul>
        </nav>
      </Main>

      {openSidebar && (
          <Sidebar handleSidebar={handleSidebar}/>
        )}
    </Container>
  )
}
