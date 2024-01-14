import { useState } from "react";
import { Main } from "../../assets/styles/global";
import { Container } from "./style";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);

  function handleEmail(e: string) {
    setEmail(e)
  }

  async function sendForm(e: any) {
    e.preventDefault()
    try {
      const url = 'http://localhost:3001'

      const response = await fetch(`${url}/newsletter`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({email: email}),
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar Email')
      }

      const data = await response.json()
      setSendEmail(true)
      console.log(sendEmail)
      console.log('Email cadastrado com sucesso:', data)
    } catch (error) {
      console.log('Erro ao cadastrar Email:', error)
    }
  }

  return(
    <Main>
      <Container>
        <div className="box">
          <h1>Receba todo domingo nosso boletim de notícias exclusivo e gratuito sobre aviação</h1>

          <p>Fique atenado no mundo da aviação comercial, militar e privada do Brasil. Através do boletins, você receberá um resumo das princiapais noticias todo domingo.</p>

          <form action="submit">
            <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => handleEmail(e.target.value)}/>
            <button onClick={(e) => sendForm(e)}>Me inscrever</button>
          </form>

          {sendEmail ? (
            <div>Email enviado</div>
          ) : null}
        </div>
      </Container>
    </Main>
  )
}
