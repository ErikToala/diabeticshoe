import React from 'react';
import image from '../images/bio.jpg'
import dev1 from '../images/pers.jpg'
import dev2 from '../images/erik.jpg'
import './styles/team.css';


function Team(){
    return(
            <section className='ba'>
                <div className='container'>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <img src={image} alt='card background' className='card-img'></img>
                            <img src={dev1} alt='profile image' className='profile-img'></img>
                            <h1>Bernardo Ortiz Gutiérrez</h1>
                            <p className='job-title'>Biomedico</p>
                            <p className='about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                        <div className='card'>
                            <img src={image} alt='card background' className='card-img'></img>
                            <img src={dev1} alt='profile image' className='profile-img'></img>
                            <h1>Leonardo Ferifer Ruíz Nucamendi</h1>
                            <p className='job-title'>Biomedico</p>
                            <p className='about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                        <div className='card'>
                            <img src={image} alt='card background' className='card-img'></img>
                            <img src={dev1} alt='profile image' className='profile-img'></img>
                            <h1>Dr. Enrique Tadeo Santoyo Espinosa</h1>
                            <p className='job-title'>Asesor de proyecto</p>
                            <p className='about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                        <div className='card'>
                            <img src={image} alt='card background' className='card-img'></img>
                            <img src={dev1} alt='profile image' className='profile-img'></img>
                            <h1>Dra. Diana Paulina Martínez Cancino</h1>
                            <p className='job-title'>Evaluadora de proyectos</p>
                            <p className='about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                        <div className='card'>
                            <img src={image} alt='card background' className='card-img'></img>
                            <img src={dev2} alt='profile image' className='profile-img'></img>
                            <h1>Ing. Erik de Jesús Toalá Gutiérrez</h1>
                            <p className='job-title'>Asesor de Software</p>
                            <p className='about'>
                            Egresador en ingeniería en Desarrollo de Software de la UPCH, apacionado en aprender nuevas cosas de tecnología. Ha desarrollado aplicaciones móviles, Web y de escritorio. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
    );
}

export default Team;