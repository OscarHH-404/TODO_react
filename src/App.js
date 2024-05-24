import { Component } from "react";
import ListaNotas from "./components/listaNotas/";
import RegistroNotas from "./components/RegistroNotas/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    }
  }  
  
  register(titulo, nota){
    const objeto = {titulo, nota};
    const nuevoArray = [...this.state.notas, objeto];
    const state = {
      notas: nuevoArray
    }
    this.setState(state);
    //console.log("El titulo es "+ titulo + " y la nota es " + nota);
    //console.log(this.notas.length);
  }

  render(){
    return (
      <section className="contenido">
        <RegistroNotas registrar = {this.register.bind(this)}/> 
        <ListaNotas notas = {this.state.notas}/>
      </section>
    );
  }
}

export default App;
