import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
import { Fade } from "react-awesome-reveal";

const Experience=()=>{
    return(<>
        <Fade direction='up'>
    <section  id='experience'>
        
        <h5>My Skills</h5>
        <h2>My Experience</h2>
        <div className=' experience__container'>
          
            <div className='front-end-div'>
            
        <div>
        <div>
          <h3>Frontend Skills</h3>

          </div>
         <div className='experience__content-div'>
        <div className='experience__content'>
        <article className='experience__details'>
        
                
            <BsPatchCheckFill className='experience__details-icon'/>
            <h4 className='text-lights'>HTML</h4>
            
           
        </article>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'></small>
            </div>
        </article>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'></small>
            </div>
        </article>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'></small>
            </div>
        </article>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'></small>
            </div>
        </article>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'></small>
            </div>
        </article>
        </div>
        </div>
        </div>

        </div>
            
           
        <div className='front-end-div'>  
        <div className=" experience__backend ">
        <h3 className=" experience__backend-text " >
            Backend Skills</h3>
        <div className="backend__div">
            <div className="experience__content">
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>NodeJs</h4>
                    <small className='text-light'></small>
                    </div>
                </article>
                <article className="experience__details">
                
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>MYSQL</h4>
                    <p className='text-light'></p>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>ExpressJs</h4>
                    <small className='text-light'></small>
                    </div>
                </article><article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>API</h4>
                    <small className='text-light'></small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>Git/Github</h4>
                    <small className='text-light'></small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>MongoDB</h4>
                    <small className='text-light'></small>
                    </div>
                </article>
                </div>
                </div>
            </div>
            </div> 
               
                   
        </div>

    </section>
    </Fade>
    </>)
}
export default Experience
