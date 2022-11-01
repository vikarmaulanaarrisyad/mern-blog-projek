import React from 'react'
import './footer.scss'
import { ICInstagram, LogoKabayan } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon' />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={LogoKabayan} alt='logo'/>
            </div>
            <div className='social-wrapper'>
                <Icon img={ICInstagram} />
                <Icon img={ICInstagram} />
                <Icon img={ICInstagram} />
                <Icon img={ICInstagram} />
                <Icon img={ICInstagram} />
                <Icon img={ICInstagram} />
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer