import React, { Component } from 'react';
import "./registroNotas.css";

class RegistroNotas extends Component {
    constructor(props){
        super(props);
        this.titulo ="";
        this.notas = "";
    }
    
    _handleTitulo(event){
        event.stopPropagation(); //evita conflictos de eventos
        this.titulo = event.target.value;  
    }

    _handleNota(event){
        event.stopPropagation(); //evita conflictos de eventos
        this.nota = event.target.value;  
    }

    _register(event){
        event.preventDefault(); //no hace refresh
        event.stopPropagation(); //evita conflictos de eventos
        this.props.registrar(this.titulo, this.nota);
    }

    render() { 
        return (
            <form className='registro-nota' onSubmit={this._register.bind(this)}>
                <input 
                    className='registro-nota_input' 
                    type="text" 
                    placeholder="Titulo"
                    onChange = {this._handleTitulo.bind(this)}
                > 
                </input>

                <textarea 
                    rows={15} 
                    className='registro-nota_input' 
                    placeholder="Registro de nota"
                    onChange={this._handleNota.bind(this)}
                >
                </textarea>

                <button 
                    className='registro-nota_input registro-nota_submit' 
                >
                    Registrar la nota
                </button>
            </form>
        );
    }
}

export default RegistroNotas;