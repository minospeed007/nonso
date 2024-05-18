import CTA from './cta.js'
import ME from  '../../assests/nono.jpg'
import Headersocial from './headersocial'
import './header.css'
const Header=()=>{

    return(
    <header className='container '  >
    <div  >
        <div className='header__text'>
            <div>
      <h2 className='text-light'>Hello! I am </h2> 
      <h1>Nonso Okeke</h1>
      <h2 className='text-light'>Full-stack Developer</h2>
      
      <CTA/>
      </div>
      </div>
      <div className='me'>
     

      <div className='header__div'>
      <Headersocial/>
            <div className='header__cointainer'>
                <img className='about__me-images' src={ME} alt=''/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>

            </div>

            </div>
      
     

    </div>
    </header>
    )
}
export default Header
