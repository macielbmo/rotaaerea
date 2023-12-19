import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola a página para o topo quando o caminho da URL muda
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada no DOM
};

export default ScrollToTop;
