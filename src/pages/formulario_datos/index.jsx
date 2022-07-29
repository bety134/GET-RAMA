import React from 'react'
import './index.css'
import Select from 'react-select'

const estadoCivil = [// desplegable select//
  { value: 'soltera/o', label: 'soltera/o' },
  { value: 'casada/o', label: 'casada/o' },
  { value: 'viuda/o', label: 'viuda/o' },
  { value: 'divorciada/o', label: 'divorciada/o' },
  { value: 'union libre', label: 'union libre' },
  { value: 'prefiero no especificar', label: 'prefiero no especificar' },

]

const sexo = [
    { value: 'mujer', label: 'mujer' },
    { value: 'hombre', label: 'hombre' },
    { value: 'otro', label: 'otro' },
  
  ]

  



export const FormularioDatos = () => {
  // Inicializar el estado del formulario en blanco
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [lastname2, setLastname2] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [municipio, setMunicipio] = React.useState('');
  const [estado, setEstado] = React.useState('');


  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario 
    event.preventDefault();

    // Resetear el estado de error
    setError('');

    // Validar el formulario
    if (name.trim() === '' ||
     lastname.trim() ==="" ||
     lastname2.trim() === ''||
     birthday.trim() === "" ||
     age.trim() ==="" ||
     email.trim() === '' || 
     address.trim() === "" ||
     estado.trim() === '' || 
     municipio.trim() === ""
     ) {
      setError('Please fill in all fields');
      return;
    }
   
    // Enviar el formulario
    // ...

    console.log(`Data submitted:
    name: ${name}
    lastname: ${lastname} 
    lastname2: ${lastname2}
    birthday: ${birthday}
    age: ${age}
    email: ${email}
    address: ${address}
    estado: ${estado}
    municipio: ${municipio}`);
    
    // Mostrar el mensaje de éxito
    setSuccess(true);
  }

  // Mostrar el mensaje de éxito si el estado success es true
  if (success)
    return <div className="registration-datos registration-datos__success"> informacion actualizada con exito</div>

  // Mostrar el formulario
  
  
  
  return (
   <>
   <div className="container">
     <div className="row">
     <div className="col-0 col-md-2 col-lg-3"></div>

<div className="col-12 col-md-8 col-lg-6">
 <div className="card text-center">
  <div className="card-header">
    Informacion complementaria
  </div>
  <div className="card-body">
    <form className='registration-datos' onSubmit={handleSubmit}>
    {error && <div className='registration-datos__error'>{error}</div>}
    <h1>Captura tu informacion</h1>
    <label>
      Name:
      <input type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
    </label>
    <label>
      Apeido paterno:
      <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.currentTarget.value)} />
    </label>
    <label>
      Apeido materno:
      <input type="text" name="lastname2" value={lastname2} onChange={(e) => setLastname2(e.currentTarget.value)} />
    </label>
    <label>
      Sexo:
    <Select  options={sexo} />
    </label>
    <label>
      Fecha de nacimiento:
      <input type="date" id="start" name="trip-start"
    value={birthday} onChange={(e) => setBirthday(e.currentTarget.value)} 
    min="1910-01-01" max="2022-12-31"/>
    </label>
    <label>
      Edad:
      <input type="text" name="age" value={age} onChange={(e) => setAge(e.currentTarget.value)} />
    </label>
    <label>
      Estado civil:
    <Select  options={estadoCivil} />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
    </label>
    <label>
      residencia actual direccion:
      <input type="text" name="address" value={address} onChange={(e) => setAddress(e.currentTarget.value)} />
    </label>
    <label>
      Municipio:
      <input type="text" name="municipio" value={municipio} onChange={(e) => setMunicipio(e.currentTarget.value)} />
    </label>
    <label>
      Estado:
      <input type="text" name="estado" value={estado} onChange={(e) => setEstado(e.currentTarget.value)} />
    </label>

    <button type="submit" className='registration-datos__submit'>Submit</button>
    </form > 
   </div>
</div>
</div>  
<div className= "col-0  col-md-2 col-lg-3"></div>
     </div>
   </div>
     
    </> 
  )
}
