import React from 'react';
import '../pages/styles/home.css';
import image from '../images/illustration.svg'


function Home(){
    return( 
            <header className='hero'>
                <section className='hero__main container'>
                    <div className='hero_text'>
                        <h1 className='hero__title'>Zapato de monitorio para pie diabetico</h1>
                        <p className='hero_subtitle'>Calzado capaz de monitorear los parametros de humedad, temperatura, presion e irragacion sanguinea para prevenir el desarollo de ulceras en pie diabetico.</p>
                    </div>

                    <figure className='nav__picture'>
                        <img src={image} className='nav__img'></img>
                    </figure>
                </section>

            </header>
    );
}

export default Home;