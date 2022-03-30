import React from 'react'
import {Link} from "react-router-dom"

const List = ({patientsList, setListUpdated}) =>{

    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3001/delete/'+ id, requestInit).then(res => res.text()).then(res => console.log(res))

        setListUpdated(true)
    }

    return(
        <div className="table-container">
            <h2 className="heading">Pacientes</h2>
                <Link to={"/historial-clinico/nuevo-paciente"}><button>Nuevo paciente</button></Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Edad</th>
                            <th>Peso</th>
                            <th>Etapa debetico</th>
                            <th>Género</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientsList.map(pats => (
                            <tr key={pats.id}>
                                <td>{pats.name}</td>
                                <td>{pats.lastname}</td>
                                <td>{pats.age}</td>
                                <td>{pats.height}</td>
                                <td>{pats.stage}</td>
                                <td>{pats.gender}</td>
                                <td>
                                    <button onClick={() => handleDelete(pats.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
        </div>
    );
}

export default List;
