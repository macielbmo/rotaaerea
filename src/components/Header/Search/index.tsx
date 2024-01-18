// import { BiSearch } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
// import { Container } from "./style";
// import { useState } from "react";

// interface SearchProps {
//   heandleSearch: () => void;
// }

// export function Search({ heandleSearch }: SearchProps) {
//   const [search, setSearch] = useState('')
//   const [results, setResults] = useState([])

//   function handleSearch(e: string) {
//     setSearch(e)
//   }

//   async function handleSend() {
//     const url = "http://localhost:3001";

//     try {
//       const response = await fetch(`${url}/search?q=${search}`);
//       const data = await response.json();
//       setResults(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   return (
//     <Container>
//       <AiOutlineClose
//         onClick={heandleSearch}
//         size={48}
//         color={'white'}
//         className='icon'
//       />

//       <div className='search'>
//         <span onClick={handleSend}><BiSearch /></span>
//         <input type="text" placeholder="Pesquisa Rota Aérea" onChange={(e) => handleSearch(e.target.value)}/>
//       </div>
//     </Container>
//   );
// }
