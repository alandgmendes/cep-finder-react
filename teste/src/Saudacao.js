import React, { Component } from 'react';
var data = 0;
var retorno = <h1></h1>;
if (data != 0){
    retorno = <h1>returns</h1>
}
class Saudacao extends React.Component {
    
    render(){
        return (
        retorno
        )
    }
}
export default Saudacao;