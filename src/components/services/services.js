import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services=()=>{
    return(<>
    <section id='services' >
       <h5>What I Offer</h5>
       <h2>Services</h2>
       <div className='container services__container'>
         <div className='service-div'>
        <article className='service'>
         <div className='service__head'>
            <h3>UI/UX Design </h3>
         </div>
         <ul className='service__list'>
            <li className='text-light'>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>User Experience</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>User Interface Design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Responsive Design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>User Research</p>
            </li>
           
         </ul>
        </article>
        </div>
        <div className='service-div'>

        <article className='service'>
         <div className='service__head'>
            <h3>Web Development</h3>
         </div>
         <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Top Notch Websites</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Websites Maintainance</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>SEO Optimization</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Performance Optimization</p>
            </li>
           
         </ul>
        </article>
        </div>
        <div className='service-div'>

        <article className='service'>
         <div className='service__head'>
            <h3>Content Creation</h3>
         </div>
         <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Documentation</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Information Architecture</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Editing and Proofreading</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p className='text-light'>Technical Writing</p>
            </li>
           
         </ul>
        </article>
        </div>
       </div>

    </section>
    </>)
}
export default Services
