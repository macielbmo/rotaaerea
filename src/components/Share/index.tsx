import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoTelegram,
  BiLogoTwitter
} from 'react-icons/bi'

import { Container } from "./style";

export default function Share() {
  return(
    <Container>
      <div className="btn facebook">
        <span ><BiLogoFacebook className='Logo'/></span>
      </div>

      <div className="btn instagram">
        <span ><BiLogoInstagram className='Logo'/></span>
      </div>

      <div className="btn linkedin">
        <span ><BiLogoLinkedin className='Logo'/></span>
      </div>

      <div className="btn telegram">
        <span ><BiLogoTelegram className='Logo'/></span>
      </div>

      <div className="btn twitter">
        <span ><BiLogoTwitter className='Logo'/></span>
      </div>

      <div className="btn whatsapp">
        <span ><BiLogoWhatsapp className='Logo'/></span>
      </div>
    </Container>
  )
}
