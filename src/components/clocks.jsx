import React, { useState } from 'react'

const Clock = () => {

    const [fecha, setFecha] = useState();
    const [edad, setEdad] = useState(0); 
    const nombre = 'Santiago';
    const apellidos ='Mendoza';

    
    setInterval(() => {
        const date = new Date();
        setFecha(date.toLocaleTimeString())});    
    
        
    setTimeout(() => {
        setEdad(edad + 1);
    }, 1000);

    return (
        <div>
         <h2>
             Hora Actual: {fecha}
         </h2>
         <h3>
             {nombre} {apellidos}
         </h3>
         <h1>
             Edad: {edad} 
         </h1>
        </div>
      )
}
export default Clock;