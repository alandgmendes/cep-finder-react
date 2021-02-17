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
            this.setState({exib: saudacao});
          });
        }       
      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              CEP:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Exibir endereço" />
          </form>
          <h1>{this.exib}</h1>
          </div>
        );
       
      }
}

export default CepEntrada;