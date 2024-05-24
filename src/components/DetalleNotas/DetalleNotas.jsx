import React, { Component } from 'react';
import "./detalleNotas.css";

class DetalleNotas extends Component{
    render(){
        return(
            <section className='detalle-nota'>
                <header className='detalle-nota_header'>
                    <h3 className='detalle-nota_titulo'>{this.props.titulo}</h3>
                    <p className='detalle-nota_texto'>{this.props.nota}</p>
                </header>
            </section>
        )
    }
}

export default DetalleNotas;