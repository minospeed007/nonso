import React from 'react'
import CTA from './cta.js'
import ME from  '../../assests/nono.jpg'
import Headersocial from './headersocial'
import { motion } from 'framer-motion';

import './header.css'
const Header=()=>{
    const [displayText, setDisplayText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
     const animatedText='Full-stack Developer';
    React.useEffect(() => {
        let timer;
    
        const handleType = () => {
          if (isDeleting) {
            timer = setTimeout(() => {
              setDisplayText(displayText.slice(0, -1));
            }, 20); 
          } else {
            timer = setTimeout(() => {
              setDisplayText(animatedText.slice(0, displayText.length + 1));
            }, 10); 
          }
        };
    
        const handleDelete = () => {
          if (isDeleting && displayText === '') {
            setIsDeleting(false);
          } else if (!isDeleting && displayText === animatedText) {
            setIsDeleting(true);
          } else {
            handleType();
          }
        };
    
        timer = setTimeout(handleDelete, 250); 
        return () => clearTimeout(timer);
      }, [displayText, isDeleting, animatedText]);
    
    return(
    <header className='container '  >
    <div  >
        <div className='header__text'>
            <div>
      <h2 className='text-light'>Hello! I am </h2> 
      <h1>Nonso Okeke</h1>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <h2 className='text-display'>{displayText}</h2>
      </motion.span>

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
