import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoTelegram,
  BiLogoTwitter
} from 'react-icons/bi'

import { Container } from "./style";

export default function Share() {
  const urlAtual = window.location.href;

  return(
    <Container>
      <div className="btn facebook">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlAtual}`} target='_blank'>
          <span ><BiLogoFacebook className='Logo'/></span>
        </a>
      </div>

      <div className="btn linkedin">
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${urlAtual}`} target='_blank'>
          <span ><BiLogoLinkedin className='Logo'/></span>
        </a>
      </div>

      <div className="btn telegram">
        <a href={`https://t.me/share/url?url=${urlAtual}`} target='_blank'>
          <span ><BiLogoTelegram className='Logo'/></span>
        </a>
      </div>

      <div className="btn twitter">
        <a href={`https://twitter.com/intent/tweet?text=${urlAtual}`} target='_blank'>
         <span ><BiLogoTwitter className='Logo'/></span>
        </a>
      </div>

      <div className="btn whatsapp">
        <a href={`https://api.whatsapp.com/send?phone=&text=${urlAtual}`} target='_blank'>
          <span ><BiLogoWhatsapp className='Logo'/></span>
        </a>
      </div>
    </Container>
  )
}
