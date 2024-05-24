import React, { Component } from 'react';
import "./detalleNotas.css";

class DetalleNotas extends Component{
    render(){
        return(
            <section className='detalle-nota'>
                <header className='detalle-nota_header'>
                    <h3 className='detalle-nota_titulo'>Nota </h3>
                    <p className='detalle-nota_texto'>Registrar la nota</p>
                </header>
            </section>
        )
    }
}

export default DetalleNotas;