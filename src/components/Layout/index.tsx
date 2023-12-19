import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

// Scroll automatico para o topo da pagina
import ScrollToTop from '../ScrollToTop'

export default function Layout() {
  return(
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}
