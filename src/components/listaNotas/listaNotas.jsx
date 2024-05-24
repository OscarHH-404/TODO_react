import React, { Component } from 'react';
import  DetalleNotas  from '../DetalleNotas/';
import "./listaNotas.css";

class ListaNotas extends Component{ 

    render(){
        return(
            <ul className='lista-notas'>
                {this.props.notas.map((valor, index) => {
                    return(
                        <li className='lista-notas_item' key = {index}>
                            <DetalleNotas titulo = {valor.titulo} nota = {valor.nota}></DetalleNotas>
                        </li>
                    )
                })}
                {console.log("ejemplo 1")}
                
            </ul>
        )
    }
}   

export default ListaNotas;