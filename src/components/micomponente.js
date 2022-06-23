import React, {Component}from "react";
class MiComponente extends React.Component{


  render(){
    let receta={
        nombre:'pitzza',
        animal: 'chancho',
        ingredientes:['tomate','queso','jamon cocido','chancho'],
        calorias: 400
    };


    return(
         
       <div className="mi-componente">
        <React.Fragment>
             <h1>{'Receta:' + receta.nombre} </h1>
             <h2>{'CALORIAS:' + receta.calorias}</h2>
             <h3> {'animal '+ receta.animal}</h3>
             {
                
        
                receta.ingredientes.map((ingrediente, i)=>{
                console.log(ingrediente);
                return(
                <li key={(i)}>
                  {i+1}  {ingrediente}{ingrediente.toUpperCase()}
                </li>
                );
                })
             };
             <hr></hr>


       </React.Fragment>

       </div>
    );
  } 
}
export default MiComponente;