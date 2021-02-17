import React, { Component } from 'react';

var saudacao = "";
class CepEntrada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          exib: "",
          value:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const valorCEP = this.state.value;
        event.preventDefault();
        var endereco = {};
        const apiUrl = 'https://viacep.com.br/ws/'+ valorCEP +'/json/';
          fetch(apiUrl, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          .then((response) => response.json())
          .then(function(data) {
            endereco = data;
            saudacao = "Fala dev de " + endereco.localidade + "!";
            alert(saudacao);
          });
        }

      render() {
        return (
          <div style={{color: "red", fontSize: 40, marginTop: 10}}>
            <h1 style={{color: "black"}}>Entre com seu CEP e clique em exibir cidade. O programa alertará sua cidade!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              CEP:
              <input style={{fontSize: 40}} type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input style={{height: 30}} type="submit" value="Exibir endereço" />
          </form>
          <h1>{this.exib}</h1>
          </div>
        );
       
      }
}

export default CepEntrada;