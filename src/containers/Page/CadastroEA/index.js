import React from 'react';

import { connect } from 'react-redux'
import 'antd/dist/antd.css';

import {
  Row,
  Col,
  Select,
  Input, InputNumber, DatePicker, AutoComplete, Cascader
} from 'antd';


import styled from 'styled-components';


import {
  ColumnStyle,
  TabContentStyle,
  Tabs,
  TabPane
} from './tab-metadata';

import SearchBar from './Searchbar/index';
import ProductPicker from './ProductPicker';
import openNotification from '../Calculator/Notification/index';
import Estimatives from './Estimatives/index';

import actions from '../../../redux/calculator/actions';

const { Option } = Select;

const {
  loadProducts,
  searchProducts,
  requestAddItemToEstimative
  
} = actions

const EstimativesStyle = styled.div`
  margin-top: 1rem;
`;

class CalculatorComponent extends React.Component {

  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleTextChange = this.handleTextChange.bind(this);
     this.handleColorSelect = this.handleColorSelect.bind(this);
     this.handleAnimalSelect = this.handleAnimalSelect.bind(this);
     this.state = {name: '', colaborador: '', data: '', data1:'', favoriteColor: 'blue', favoriteAnimal: ''}
     
    
  }
  
  handleClick() {
    alert('Clicado')
  }
  handleSubmit(event) {
    alert(
      `Dados: Nome é ${this.state.name}, colaborador ${this.state.colaborador}` +
      `data ${this.state.data} 'data1 é ${this.state.data1}`
    );
    event.preventDefault();
  }
 
  handleTextChange(event) {
    this.setState({name: event.target.value});
    
  }
 
  handleColorSelect(event) {
    this.setState({favoriteColor: event.target.value});
  }
 
  handleAnimalSelect(event) {
    this.setState({favoriteAnimal: event.target.value});
  }
 
 

  render() {
    return (
      <>
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={20}>
                <p style={{margin: 0}}>Escala Avulsa-FORTALEZA\F9612101 </p>
                
          
            <ColumnStyle>
              <Tabs animated={false} type="card">
                <TabPane tab="Editar" key="1">
                <br />
                
                  <TabContentStyle>
                    <SearchBar onQueryChange={this.onSearchProduct}/>
                    <br />
         
        <form onSubmit={this.handleSubmit}>
        <div>
        
              <div style={{ marginBottom: 16 }}>
                 <Input addonBefore="Colaborador" addonAfter="IMG | IMG" defaultValue="Informe o colaborador" name="colaborador" onChange={ this.handleTextChange } value={ this.state.colaborador }/>
              </div>
             
              <div style={{ marginBottom: 16 }}>
                 Data de Inicio de Apontamento * <Input type="date" />
              </div>
              
              <div style={{ marginBottom: 16 }}>
                  Data de Termo de Apontamento *<Input type="date" />
              </div>
               
              <div style={{ marginBottom: 16 }}>
                 OBS *<Input type="text" />
              </div>
               
              <div style={{ marginBottom: 16 }}>
                 Gestor  *<Input type="text" />
              </div>
              
              <div style={{ marginBottom: 16 }}> 
                 Apontamento controlado por escala?
                 <select defaultValue="Não" style={{ width: 90 }}>
                   <option value="Não">Não</option>
                   <option value="Sim">Sim</option>
                 </select>
               </div>
               
               <div style={{ marginBottom: 16 }}>
                 Cargo prestação de serviço  *<Input type="text" />
                 Preencher somente se colaborador presta serviços para Cliente - Essa infromação
               </div>
               
               <div style={{ marginBottom: 16 }}>
                 Possuei Restrição?
                 <select defaultValue="Não" style={{ width: 90 }}>
                   <option value="Não">Não</option>
                   <option value="Sim">Sim</option>
                 </select>
               </div>
               
               <div style={{ marginBottom: 16 }}>
                   Pré-Filtro  *<Input type="text" />
               </div>
               
               
               <div style={{ marginBottom: 16 }}>
                 Tipo de Restrição
                 <select defaultValue="Nenhuma:" style={{ width: 90 }}>
                   <option value="Nenhuma">Nenhuma</option>
                   <option value="Sim">Sim</option>
                  </select>
               </div>
                
               <div style={{ marginBottom: 16 }}> 
                 Cadastro de Plantão
                   <select value={this.state.favoriteColor2} onChange={this.handleColorSelect2}>
                      <option value="">Nenhuma</option>
                      <option value="c">Contrato</option>
                    </select>
               </div>
               <div style={{ marginBottom: 16 }}>
                <table>
                 <tr>
                  <td>
                    <select id="s" size="10" multiple>
	                    <option value="a">Marcus</option>
	                    <option value="b">Samuel</option>
	                    <option value="c">Carlos</option>
	                    <option value="i">France</option>
                    </select>
                  </td>
                  <td valign="center">
                    <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; listbox_moveacross('s', 'd')" data-cf-modified-13ce572d586f6e3b4267b954-="">&gt;&gt;</a>
                    <br/>
                    <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; listbox_moveacross('d', 's')" data-cf-modified-13ce572d586f6e3b4267b954-="">&lt;&lt;</a>
                  </td>
                  <td>
                   <select id="d" size="10" multiple>
	                   <option value="a">Outros</option>
                   </select>
                    <br /> Caso seja marcada a opção Contrato, o período de fechamento dos relatórios será de 01 a 30
                  </td>
               </tr>
              </table>
              </div>
             
             <div style={{ marginBottom: 16 }}> 
              É colaborador
               <select value={this.state.favoriteColor2} onChange={this.handleColorSelect2}>
                <option value="s">Sim</option>
                <option value="n">Não</option>
              </select>
             </div> 
        
              <div style={{ marginBottom: 16 }}>
               CPF
                <Input type="text" />
              </div>
          
            <div>
             <input type="submit" value="Salvar" />&nbsp;&nbsp;
             <input type="reset" value="Cancelar" />
             
            </div>
    </div>
    </form>
                  </TabContentStyle>
                </TabPane>

                
              </Tabs>
            </ColumnStyle>
          </Col>
        </Row>

        
      </>
    );
  }
  
 
}
const Calculator = connect(
  (state) => ({
      products: state.Calculator.products,
      currentEstimative: state.Calculator.currentEstimative,
      lastAddedItem: state.Calculator.lastAddedItem
  }),
  {
      loadProducts,
      searchProducts,
      requestAddItemToEstimative
  }
)(CalculatorComponent)

/*
function mover(fonte, destino) {
  var selecionados = fonte.querySelectorAll("option:checked");
  for ( var i = 0 ; i < selecionados.length ; i++ ) {
      fonte.removeChild(selecionados[i]);
      destino.appendChild(selecionados[i]);
  }
}

document.querySelector("button.dir").onclick = function() {
    mover(document.querySelector("select.esq"),
          document.querySelector("select.dir"));
};

document.querySelector("button.esq").onclick = function() {
    mover(document.querySelector("select.dir"),
          document.querySelector("select.esq"));
};
<div style="display:flex">
 <select multiple class="esq">
  <option>Item A</option>
  <option>Item B</option>
  <option>Item C</option>
  <option>Item D</option>
  <option>Item E</option>
 </select>
 <div style="display:flex; flex-direction:column">
  <button class="dir">▶</button>
  <button class="esq">◀</button>
 </div>
 <select multiple class="dir"></select>
</div>
*/

export default Calculator