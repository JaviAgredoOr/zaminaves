import React, { Component } from 'react';
import { Fabrica } from './naves/fabrica';



class App extends Component {

    constructor() {
        super();
        this.state = {
            tipo: "",
            nombre: "",
            sistema: "",
            ton: "",
            pais: "",
            transporte: "",
            vuelo: "",
        };

        this.fabrica = new Fabrica();

        this.addNave = this.addNave.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.crearNaveEnFabrica = this.crearNaveEnFabrica.bind(this);
    }

    addNave(e) {
        console.log(this.state);
        fetch('/api/nave', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: 'Nave guardada' });
                this.setState({
                    tipo: "",
                    nombre: "",
                    sistema: "",
                    ton: "",
                    pais: "",
                    transporte: "",
                    vuelo: "",
                });
                this.fetchNave();

            })
            .catch(err => console.error(err));

        e.preventDefault();
    }

    //
    componentDidMount() {
        console.log('Componente montado');
        
        this.crearNaveEnFabrica("62ad3d10c2d7e997c10e6e5c");
        this.crearNaveEnFabrica("62ad5576772bb1bb3b51458a");
        
        this.fetchNave();
    }

    crearNaveEnFabrica(id) {
        console.log('Creando nave en fabrica');
        fetch('/api/nave/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const nave = this.fabrica.crearNave(data)
                console.log(nave);
                nave.iniciar();
            });
    }

    fetchNave() {
        fetch('/api/nave')
            .then(res => res.json())
            .then(data => console.log(data));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNave}>
                    <input name="tipo" value={this.tipo} onChange={this.handleChange} type="text"></input>
                    <input name="nombre" value={this.nombre} onChange={this.handleChange} type="text"></input>
                    <input name="sistema" value={this.sistema} onChange={this.handleChange} type="text"></input>
                    <input name="ton" value={this.ton} onChange={this.handleChange} type="text"></input>
                    <input name="pais" value={this.pais} onChange={this.handleChange} type="text"></input>
                    <input name="transporte" value={this.transporte} onChange={this.handleChange} type="text"></input>
                    <input name="vuelo" value={this.vuelo} onChange={this.handleChange} type="text"></input>
                    <button>Agregar</button>
                </form>


                <div>
                    <h1>NAVE</h1>

                </div>
            </div>

        )
    }
}

export default App;