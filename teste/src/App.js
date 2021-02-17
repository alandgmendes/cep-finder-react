//Este aplicativo recebe um CEP para consulta de endereço. Ele é uma versão bem primária
//e bem simplificada.
import CepEntrada from './CepEntrada';
import Saudacao from './Saudacao'

function App() {
  return (
    <div className="App">
      <CepEntrada />  
      <Saudacao />
    </div>
  );
    
}

export default App;
