import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./style";

interface SearchProps {
  heandleSearch: () => void;
}

export function Search({ heandleSearch }: SearchProps) {
  return (
    <Container>
      <AiOutlineClose
        onClick={heandleSearch}
        size={48}
        color={'white'}
        className='icon'
      />

      <div className='search'>
        <span><BiSearch /></span>
        <input type="text" placeholder="Pesquisa Rota Aérea" />
      </div>
    </Container>
  );
}
