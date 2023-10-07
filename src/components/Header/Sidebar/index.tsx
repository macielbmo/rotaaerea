import { useState } from 'react'

import { AiOutlineMail } from "react-icons/ai";
import { GrClose, GrSearch } from 'react-icons/gr'
import { Search } from '../Search';

import { Container } from "./style";
import Item from './Item';

interface SidebarProps {
  handleSidebar: () => void,
}

export default function Sidebar({ handleSidebar }: SidebarProps) {
  const [search, setSearch] = useState(false)

  function handleSearch() {
    setSearch(!search)
  }

  return(
    <Container>
      <div className="top-sidebar">
        <span className="icon" onClick={handleSearch}><GrSearch /></span>
        <span className="icon" onClick={handleSidebar}><GrClose /></span>
      </div>

      <main className='content'>
        <ul>
          <Item
            name='Companhias Aéreas'
            list={["Azul", "Latam", "Gol", "Avianca", "VoePass"]}
          />

          <Item
            name='Aeroportos'
            list={["Guarulhos", "Congonhas", "Santos Dumont"]}
          />

          <Item
            name='Industria'
            list={["Airbus", "Boing", "Embraer"]}
          />

          <Item
            name='Militar'
            list={[]}
          />

          <Item
            name='Aviação Privada'
            list={[]}
          />
        </ul>

        <div className='newsletter'>
          <AiOutlineMail className='icon'/>
          <span>Boletim de Notícias</span>
        </div>
      </main>

      {search && (
        <Search heandleSearch={handleSearch}/>
      )}
    </Container>
  )
}
