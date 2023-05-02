import React, { useState } from 'react'

export const Pie = () => {
    const [clicks,setClicks] = useState(0);
    const anio = new Date().getFullYear();
    const empresa = "ReneDescartes Company Inc";
    const handleClick  = () => {
       setClicks(clicks+1) ;
    }

  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; {anio} {empresa} Clicks={clicks}</p>
        <span  className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark"
        onClick={handleClick}
        >
            <img className="App-logo"
                height="52"
                src="rene_6.png"
                alt="cogito-ergo-sum">
            </img>
        </span>
        <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        </footer>
    </div>    
  )
}

export default Pie
