import { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext';

import { AiOutlineMail } from "react-icons/ai";
import { GrClose, GrSearch } from 'react-icons/gr'
import { Search } from '../Search';

import Switch from 'react-switch'

import { Container } from "./style";
import Item from './Item';

interface SidebarProps {
  handleSidebar: () => void,
}

export default function Sidebar({ handleSidebar }: SidebarProps) {
  const [search, setSearch] = useState(false)
  const { handleTheme, checked } = useContext(ThemeContext)

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
            handleSidebar={() => handleSidebar}
          />

          <Item
            name='Aeroportos'
            list={["Guarulhos", "Congonhas", "Santos Dumont"]}
            handleSidebar={() => handleSidebar}
          />

          <Item
            name='Industria'
            list={["Airbus", "Boing", "Embraer"]}
            handleSidebar={() => handleSidebar}
          />

          <Item
            name='Militar'
            list={[]}
            handleSidebar={() => handleSidebar}
          />

          <Item
            name='Aviação Privada'
            list={[]}
            handleSidebar={() => handleSidebar}
          />
        </ul>

        <div className='theme'>
          <span>Tema</span>
          <Switch
            onChange={() => handleTheme()}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor='#333'
            onColor='#3366FF'
          />
        </div>

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
