import { useState } from "react";
import { Main } from "../../assets/styles/global";
import { Container } from "./style";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleEmail(e: string) {
    setEmail(e);

    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e);
    setIsValidEmail(isValid);
  }

  async function sendForm(e: any) {
    e.preventDefault();

    if (!isValidEmail) {
      setMessageError("Formato de e-mail inválido");

      setTimeout(() => {
        setMessageError("");
      }, 5000); // Oculta a mensagem de erro após 5 segundos
      return;
    }

    setMessageError("")

    try {
      const url = "https://rotaaerea-backend.vercel.app";

      const response = await fetch(`${url}/newsletter`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        setMessageError(errorMessage);

        setTimeout(() => {
          setMessageError("");
        }, 5000); // Oculta a mensagem de erro após 5 segundos

        return;
      }

      const data = await response.json();
      setSendEmail(true);
      setEmail("")
      console.log('Email cadastrado com sucesso:', data);

      setTimeout(() => {
        setSendEmail(false);
      }, 5000); // Oculta a mensagem de sucesso após 5 segundos

    } catch (error) {
      console.log('Erro ao cadastrar Email:', error);
    }
  }

  return (
    <Main>
      <Container>
        <div className="box">
          <h1>Receba todo domingo nosso boletim de notícias exclusivo e gratuito sobre aviação</h1>

          <p>Fique atenado no mundo da aviação comercial, militar e privada do Brasil. Através do boletins, você receberá um resumo das princiapais noticias todo domingo.</p>

          <form action="submit">
            <input
              type="email"
              placeholder="Digite seu e-mail..."
              onChange={(e) => handleEmail(e.target.value)}
              style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
            />
            <button onClick={(e) => sendForm(e)}>Me inscrever</button>
          </form>

          <div className="message">
            <div className="error">
             {messageError && <div style={{ color: 'red' }}>{messageError}</div>}
            </div>

            <div className="success">
              {sendEmail && <div>Email cadastrado!</div>}
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
}
