import { useState } from 'react';
import './Lancamento-mensal.module.css'

export const LancamentoGeracaoMensal = () => {

  const [unidadeGeradora, setUnidadeGeradora] = useState('');
  const [mesAno, setMesAno] = useState('');
  const [totalGerado, setTotalGerado] = useState('');
  const lancamento = {unidadeGeradora: unidadeGeradora,mesAno: mesAno,totalGerado: totalGerado};

  return (
    <div>
      <header>
        <h1>Lançamento de geração mensal</h1>
      </header>
      
      <div className='formulario'>
        <form>
          <div className="unidade">
            <label htmlFor="">Unidade Geradora</label>
            <select name="" id="">
              {/* <option value="">Selecione</option> */}
            </select>
            
          </div>
          <div className='data'>
            <label htmlFor="">Mês/ano</label>
            <input type="month" name="" id="" />
          </div>
          <div className='total'>
            <label htmlFor="">Total kw gerado</label>
            <input type="number" name="" id="" />
          </div>
          <div className='botao'>
            <button
              type="submit"
              className="btn btn-primary"

            >Cadastro</button>
          </div>
        </form>
      </div>
    </div>
  );
};
