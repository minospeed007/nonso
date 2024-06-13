import {AiOutlineHome} from  'react-icons/ai'
import {AiOutlineUser} from  'react-icons/ai'
import {BiBook} from  'react-icons/bi'
import {RiServiceLine} from  'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import './nav.css'
const Nav=()=>{
    const [activeNav, setActiveNav]=useState('#')
    
    return(<>
     <div className='nav-div'>
    <nav>
       
        
 <a href='#' className={activeNav ==='#' ? 'active': ''} onClick={()=>setActiveNav('#')}>
 <AiOutlineHome className="nav-icon"/></a>
            
    <a href='#about' className={activeNav==='#about' ? 'active': ''}
     onClick={()=>setActiveNav('#about')} >
            <AiOutlineUser  className="nav-icon"/></a>
<a href='#experience' onClick={()=>setActiveNav('#experience')} 
className={activeNav==='#experience' ? 'active': ''}>
            <BiBook  className="nav-icon"/></a>
<a href='#services' onClick={()=>setActiveNav('#services')} 
className={activeNav ==='#services' ? 'active': ''}>
            <RiServiceLine  className="nav-icon"/></a>
<a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}>
<BiMessageSquareDetail className="nav-icon"/></a>
    </nav>
    </div>

    </>)
}
export default Nav
