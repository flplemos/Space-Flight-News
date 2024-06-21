import React from "react";

export class Counter extends React.Component {
    constructor(){
        super()
        // this.contador = 0;
        this.state = { contador: 0, name: '', password: '' }
    }


    render() {
        return(
            <div style={{marginTop: '20px', marginLeft: '20px'}}>
                <h1>{this.state.contador}</h1>

                <div>
                    <button onClick={() => {
                    // !   this.contador = this.contador - 1
                        this.setState({contador: this.state.contador - 1})
                        }}
                    >
                        Diminuir
                    </button>

                    <button onClick={() => {
                        // this.contador+= 1;
                        this.setState({contador: this.state.contador + 1})
                        
                        }}
                    >
                        Aumentar
                    </button>
                </div>
                <form style={{marginTop: '40px'}}>
                    <input type="text" placeholder="None" value={this.state.name}
                    onChange={(e) => {
                        this.setState({name: e.target.value})
                    }}
                    />
                    <input type="password" placeholder="Senha" value={this.state.password}
                    onChange={(e) => {
                        this.setState({password: e.target.value})
                    }}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}