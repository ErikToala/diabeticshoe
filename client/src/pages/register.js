import React, { useState } from 'react';
import '../pages/styles/register.css';
import Axios from "axios"
import {Link} from "react-router-dom"

function Register() {

    const [name, setNombre] = useState("");
    const [lastname, setApellido] = useState("");
    const [age, setEdad] = useState(0);
    const [height, setEstatura] = useState(0.0);
    const [stage, setEtapa] = useState("");
    const [gender, setGenero] = useState("");

    const addPaciente = () => {
        Axios.post("http://localhost:3001/create",{
            name: name,
            lastname: lastname,
            age: age,
            height: height,
            stage: stage,
            gender: gender
        }).then(() => {
            console.log("suceses");
        });
    };

  return (
      <header className='men'>
        <div className='contenedor'>
            <div className='title'> Registro Clinico</div>
            <form action='#'>
                <div className='user-details'>
                    <div className='input-box'>
                        <span className='details'>Nombre</span>
                        <input type='text' placeholder='Ingrese nombre' required onChange={(event) =>{setNombre(event.target.value)}}></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Apellidos</span>
                        <input type='text' placeholder='Ingrese apellidos' required onChange={(event) =>{setApellido(event.target.value)}}></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Edad</span>
                        <input type='text' placeholder='Ingrese su edad' required onChange={(event) =>{setEdad(event.target.value)}}></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Estatura Cms</span>
                        <input type='text' placeholder='Ingrese su estatura' required onChange={(event) =>{setEstatura(event.target.value)}}></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Etapa de diabetes</span>
                        <input type='text' placeholder='Ingrese etapa' required onChange={(event) =>{setEtapa(event.target.value)}}></input>
                    </div>
                </div>

                <div className='gender-details'>
                    <input type="radio" name='gender' id='dot-1' value="Hombre"  onChange={e=>setGenero(e.target.value)}></input>
                    <input type="radio" name='gender' id='dot-2' value="Mujer" onChange={e=>setGenero(e.target.value)}></input>
                    <span className='title-g'>Genero</span>
                    <div className='category'>
                        <label htmlFor="dot-1">
                        <span className='dot one'></span> 
                        <span className='gender' >Hombre</span>
                        </label>
                        <label htmlFor="dot-2">
                        <span className='dot two'></span> 
                        <span className='gender'>Mujer</span> 
                        </label>
                    </div> 
                </div>
               
                <div className='button'>
                    <Link to={"/historial-clinico"}>
                        <input type="submit" value="Registrar" requered onClick={addPaciente}></input>
                    </Link>
                    
                </div>
            </form>
        </div>
    </header>
  );
}

export default Register;
