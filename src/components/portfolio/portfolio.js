import './portfolio.css';
import cryptokong from '../../assests/crypto_pic.avif';
import Afia from '../../assests/e-commerce.jpg';
import Momobook from '../../assests/momobook.png';

const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
                <h5>My Recent Works</h5>
                <h2>Portfolio</h2>
                <div className='portfolio__container'>
                    <div className="portfolio__child">
                        <article className='portfolio__item-image'>
                            <div >
                            <div className='portfolio__div-image'>

                                <img src={cryptokong} className='portfolio__image' alt='portfolio-img' />
                           </div>
                            <div className='portfolio-div-parent'>
                                <div>
                                    <h3>CryptoKong </h3>
                                    <h5 className='text-light'>CryptoKong is a Platform that provides Crypto enthusiasts with up-to-date
                                        news, prices, charts about their favorite crypto coins.
                                    </h5>
                                    <div className='portfolio__item-cta'>
                                        <a href='https://github.com/minospeed007' className='btn' target='_blank' rel='noreferrer'>Github</a>
                                        <a href='https://cryptocurrencys.onrender.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </article>
                    </div>
                    <div className="portfolio__child">
                        <article className='portfolio__item-image'>
                            <div >
                            <div className='portfolio__div-image'>

                                <img src={Momobook} className='portfolio__image' alt='portfolio-img' />
                            </div>
                            <div className='portfolio-div-parent'>
                                <div className='portfolio-div'>
                                    <h3>Momobook </h3>
                                    <h5 className='text-light'>Momobook is an efficient software that helps Mobile money Vendors to perform transactions
                                        more efficiently. With Momobook, Vendors will no longer need to record transactions manually into a book.
                                    </h5>
                                    <div className='portfolio__item-cta'>
                                 <a href='https://github.com/minospeed007' className='btn' target='_blank' rel='noreferrer'>Github</a>
                                        <a href='https://github.com/minospeed007' className='btn btn-primary' target='_blank'rel='noreferrer'>Live Demo</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </article>
                    </div>
                    <div className="portfolio__child">
                        <article className='portfolio__item-image'>
                            <div >
                                <div className='portfolio__div-image'>
                                <img src={Afia} className='portfolio__image' alt='portfolio-img' />
                           </div>
                            <div className='portfolio-div-parent'>
                                <div>
                                    <h3>Afia </h3>
                                    <h5 className='text-light'>
                                        Afia is an Ecommerce website that offers secure and convenient shopping experiences to online shoppers.
                                    </h5>
                                    <div className='portfolio__item-cta'>
                                        <a href='https://github.com/minospeed007/afia' className='btn' target='_blank' rel='noreferrer'>Github</a>
                                        <a href='https://afiacom.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </article>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Portfolio;
