import React, {Fragment, useState, useEffect } from "react";
import List from '../components/List';
import '../pages/styles/patients.css'


function Patients(){

    const [patientsList, setPatientsList] = useState([]);

    const [listUpdate, setListUpdated] = useState(false)

    useEffect(() => {
        const getPatients = () =>{
            fetch("http://localhost:3001/pacientes").then(res => res.json()).then(res => setPatientsList(res))
        }
        getPatients()
        setListUpdated(false)
    }, [listUpdate])


    return(
        <div className="b">
        <Fragment>
            <List patientsList={patientsList}  setListUpdated={setListUpdated}/>
        </Fragment>
        </div>

    );

 
}

export default Patients;