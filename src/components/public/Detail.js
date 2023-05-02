import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMortyService';

export const Detail = () => {
    const [mascota, setMascota] = useState({});
    const { id } = useParams();
    const {patname} = useLocation();
    useEffect(()=> {
        RickAndMortyService.getCharacterById(id)
        .then((data) => setMascota(data))
    },[])

return (
    <div className="col">
        <div className="card shadow-sm">
            <img className="rounded-circle mx-auto d-block" src={mascota.image} alt="imagen"  width="500" height="600"></img>
            <h3 className="mb-0 text-dark"> {mascota.name} </h3>
            <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                    <Link to={"/"} className="btn btn-sm btn-outline-dark">Volver</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

//export export default Detail
//