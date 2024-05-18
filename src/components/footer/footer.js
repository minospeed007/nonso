import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'


const Footer=()=>{
    return(<>
    <footer >
<a href="#" className='footer__logo'>Nonso</a> 
<ul className='permalinks'>
    <li><a href='#'></a></li>
    <li><a href='#about'></a></li>
    <li><a href='#experience'></a></li>
    <li><a href='#services'></a></li>
    <li><a href='#portfolio'></a></li>
    <li><a href='#testimonials'></a></li>
    <li><a href='#contact'></a></li>

</ul> 
<div className='footer__socials'>
    <a href='https://web.facebook.com/nonso.okeke'><FaFacebookF/></a>
    <a href='https://githuh.com/minospeed007' target='_blank'><FaGithub/></a>
    <a href='https://twitter.com/minospeed007'><IoLogoTwitter/></a>


    </div> 
    <div className='footer__copyright'>
        <small>&copy; Nonso Okeke. All rights reserved.</small>
    </div>
 </footer>
    </>)
}
export default Footer
