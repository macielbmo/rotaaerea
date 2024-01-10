import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillBell } from 'react-icons/ai'

import { Container } from './style'
import { Main } from '../../assets/styles/global'
import Sidebar from './Sidebar'

// Interface
interface categoriesItem {
  id: string;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
  activate_menu: boolean;
}

export default function Header() {
  const [openSidebar, setOpenSideber] = useState(false)
  const [categories, setCategories] = useState([])

  function handleSidebar() {
    setOpenSideber(!openSidebar)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://rotaaerea-backend.vercel.app`;

        const response = await fetch(`${apiUrl}/categories`, {
          method: 'GET',
          mode: 'cors'
        })

        if (!response.ok) {
          throw new Error('Não foi possível obter os dados.');
        }

        const data = await response.json();
        setCategories(data);
        console.log(data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

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

          <Link to={`newsletter`} className='link'>
            <div className='newsletter'>
              <AiFillBell />
              <span>Boletim de Notícias</span>
            </div>
          </Link>
        </div>

        <nav className='content-nav'>
          <ul className='list'>
            {categories.filter(item => item.activate_menu === true).map((item: categoriesItem) => (
              <Link key={item.id} to={`category/${item.name}`}>
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
