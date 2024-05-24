import React, { Component } from 'react';
import  DetalleNotas  from '../DetalleNotas/';
import "./listaNotas.css";

class ListaNotas extends Component{ 

    render(){
        return(
            <ul className='lista-notas'>
                {this.props.notas.map((curso, index) =>{
                    return(
                        <li className='lista-notas_item' key = {index}>
                            <div className='lista-nota_texto'>{curso}</div>
                            <DetalleNotas></DetalleNotas>
                        </li>
                    )
                })}
                {console.log("ejemplo 1")}
                
            </ul>
        )
    }
}   

export default ListaNotas;