import React, { useEffect,useState } from 'react'
import { useUserForm } from '../../hooks/Custom.hooks';
import { Link } from 'react-router-dom'
//import  { useUserForm }  from '.Custom.hooks'

export const UserForm = () => {

  const { form, setForm, handleChanges} = useUserForm();
  
  const [areEquals,setAreEquals] = useState(true);

  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }
   useEffect(()=>{
    //password es el name de la etiqueta input.... 
     const { password } = form;
     setAreEquals(password === passwordConfirmation); 
   },[passwordConfirmation])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Racionalista Registración¡¡¡</h4>
      <form className="needs-validation" noValidate>
        <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-body-secondary">(Cuenta Válida)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" name ="email" onChange={handleChanges}></input>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Clave:</label>
          <input type="text" className="form-control" id="pwd" placeholder="Clave" name="password" onChange={handleChanges}></input>
        </div>
        <div className="mb-3">
          <label  className="form-label">Confirma Clave:</label>
          <input type="text" className="form-control" id="r_pwd" placeholder="Repita Clave" onChange={handlePasswordConfirmation} ></input>
        </div>
        
        {!areEquals && (<div className="form-text list-group-item-danger">Las claves deben ser iguales</div>)}
        <button disabled={!areEquals} className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Registrate¡¡</button>
        <Link to={"/"} className="btn btn-sm btn-outline-dark">Volver</Link>
      </form>

    </div>
  )
}

//export default UserForm
