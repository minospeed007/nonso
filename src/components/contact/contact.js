import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import  {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact=()=>{
    const form=useRef();
const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_2jxawlk','template_tzfscrf', form.current, 'GOdK9VvadFV6OK00N')
    e.target.reset();
   
}
    return(<>
    <section id='contact' >
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
            <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>nwannemino@gmail.com</h5>
<a  href='mailto:nnwannemino@gmail.com'  target='_blank' rel="noreferrer" >Send a message</a>
            </article>
            
            <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
 <a href='https://api.whatsapp.com/send?phone=+233598471511' 
  target='_blank' rel="noreferrer" >Send a message</a>
            </article>
            </div>
            <div className='gap'></div>
            <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' className='input' name='name' placeholder='Your Full Name' required/>
                <input type='email' className='input'  name='email' placeholder='Your Email' required/>
                <textarea name='message' row='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='contact-btn btn-primary'>Send Message</button>

            </form>
            </div>
        </div>
    </section>
    </>)
}
export default Contact
