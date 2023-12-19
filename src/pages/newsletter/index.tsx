import { useState } from "react";
import { Main } from "../../assets/styles/global";
import { Container } from "./style";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleEmail(e: string) {
    setEmail(e)
    console.log(email)
  }

  return(
    <Main>
      <Container>
        <div className="box">
          <h1>Receba todo domingo nosso boletim de notícias exclusivo e gratuito sobre aviação</h1>

          <p>Fique atenado no mundo da aviação comercial, militar e privada do Brasil. Através do boletins, você receberá um resumo das princiapais noticias todo domingo.</p>

          <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => handleEmail(e.target.value)}/>

          <button>Me inscrever</button>
        </div>
      </Container>
    </Main>
  )
}
