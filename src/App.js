import { Component } from "react";
import ListaNotas from "./components/listaNotas/";
import RegistroNotas from "./components/RegistroNotas/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.notas = [];
  }  
  
  register(titulo, nota){
    const objeto = {titulo, nota};
    this.notas.push(objeto);
    //console.log("El titulo es "+ titulo + " y la nota es " + nota);
    console.log(this.notas.length);
  }

  render(){
    return (
      <section className="contenido">
        <RegistroNotas registrar = {this.register.bind(this)}/> 
        <ListaNotas notas = {this.notas}/>
      </section>
    );
  }
}

export default App;
