import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./style";
import { useState } from "react";

interface SearchProps {
  heandleSearch: () => void;
}

export function Search({ heandleSearch }: SearchProps) {
  // const [search, setSearch] = useState('')

  // function handleSearch(e: string) {
  //   setSearch(e.target.value)
  // }

  // function handleSend() {

  // }

  return (
    <Container>
      <AiOutlineClose
        onClick={heandleSearch}
        size={48}
        color={'white'}
        className='icon'
      />

      <div className='search'>
        <span onClick={handleSend}><BiSearch /></span>
        <input type="text" placeholder="Pesquisa Rota Aérea" onChange={handleSearch}/>
      </div>
    </Container>
  );
}
