import React from 'react';

import { connect } from 'react-redux'

import {
  Row,
  Col
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
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleTextChange = this.handleTextChange.bind(this);
     this.handleColorSelect = this.handleColorSelect.bind(this);
     this.handleAnimalSelect = this.handleAnimalSelect.bind(this);
     this.state = {name: '', favoriteColor: 'blue', favoriteAnimal: ''}
     
    
  }
  handleSubmit(event) {
    alert(
      `Dados: name is ${this.state.name}, your favorite color is ${this.state.favoriteColor}` +
      `and your favorite animal is ${this.state.favoriteAnimal}`
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
                    <div> 
                       <form onSubmit={this.handleSubmit}>
        <div>
        
          
          <label>
            Colaborador:
            <input type="text" placeholder="Entre com o nome do Colaborador"  onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label>
          <br />
          <label>
            Data de Inicio de Apontamento *
            <input type="date" name= "apontamento" value={this.state.apontamento} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label> <br />
          <label>
          Data de Termo de Apontamento:
          <input type="date" name="apontamento1" value={this.state.apontamento1} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label> <br />
          <label>
          OBS
          <input type="text" name="obs"  value={this.state.obs} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label> <br />
          <label>
          Gestor *
          <input type="text" name="gestor" value={this.state.gestor} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          <br />Usuario qye receberá notificações caso o apontamento esteja incompleto
          </label> <br />
          <label>
           Apontamento controlado por escala? *
          <select value={this.state.ApontamentoControladoEscala} onChange={this.handleColorSelect1}>
            <option value="s">Sim</option>
            <option value="n">Não</option>
           <br /> Somente marcar não para áreas que não prestam serviços para Projeto,Contrato.
          </select>
          
          </label> <br />
          <label>
          Cargo prestação de serviço 
          <select value={this.state.CargoPrestacaoServiço } onChange={this.handleColorSelect2}>
            <option value="s">Sim</option>
            <option value="n">Não</option>
          </select>
          <br />Preencher somente se colaborador presta serviços para Cliente - Essa infromação
          aparece abaixo
          </label> <br />
          <label>
          Pre Filtro
          <input type="text" name="obs"  value={this.state.obs} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label> <br />
          <label>
          Tipo de Restrição 
          <select value={this.state.favoriteColor2} onChange={this.handleColorSelect2}>
            <option value="">Nenhuma</option>
            <option value="c">Contrato</option>
          </select>
          <br />Caso seja marcada a opção Contrato, o período de fechamento dos relatórios será de 01 a 30
          </label> <br />
          
          <label>
          Cadastro de Plantão
          <select value={this.state.favoriteColor2} onChange={this.handleColorSelect2}>
            <option value="">Nenhuma</option>
            <option value="c">Contrato</option>
          </select>
         <br /> Caso seja marcada a opção Contrato, o período de fechamento dos relatórios será de 01 a 30
          </label> <br />
          
          <label> É colaborador
           <select value={this.state.favoriteColor2} onChange={this.handleColorSelect2}>
            <option value="s">Sim</option>
            <option value="n">Não</option>
          </select>
        
          </label> <br />
          <label>
          CPF
          <input type="text" name="obs"  value={this.state.cpf} onChange={ this.handleTextChange } value={ this.state.currentText }/>
          </label> <br />
         
        </div>
        <div>
          <input type="submit" value="Salvar" />&nbsp;&nbsp;
          <input type="reset" value="Cancelar" />
        </div>
      </form>
     </div>

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