import React from 'react';

import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Row,
  Col,
  Select,
  Input, InputNumber, DatePicker, AutoComplete, Cascader,
  Tooltip, Icon 
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


import actions from '../../../redux/calculator/actions';



const { Option } = Select;

const {
  loadProducts,
  searchProducts,
  requestAddItemToEstimative
  
} = actions;

const theme = {
  spacing: 2,
};




class CalculatorComponent extends React.Component {

  constructor(props) {
     super(props);

     this.handleColaboradorChange            = this.handleColaboradorChange.bind(this);
     this.handleInicioaChange                = this.handleInicioaChange.bind(this);
     this.handleTermoaChange                 = this.handleTermoaChange.bind(this);
     this.handleObsChange                    = this.handleObsChange.bind(this);
     this.handleGestorChange                 = this.handleGestorChange.bind(this);
     this.handleApontamentocontrescalaChange = this.handleApontamentocontrescalaChange.bind(this);
     this.handleCargoprestservChange         = this.handleCargoprestservChange.bind(this);
     this.handleRestricaoChange              = this.handleRestricaoChange.bind(this);
     this.handlePrefiltroChange              = this.handlePrefiltroChange.bind(this);
     this.handleTiporestricaoChange          = this.handleTiporestricaoChange.bind(this);
     this.handleCadastroplantaoChange        = this.handleCadastroplantaoChange.bind(this);
     this.handleTotalcadastroplantaoChange   = this.handleTotalcadastroplantaoChange.bind(this);
     this.handleEcolaboradorChange           = this.handleEcolaboradorChange.bind(this);
     this.handleCpfChange                    = this.handleCpfChange.bind(this);
     
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.state = {
                   colaborador: '',
                   inicioa:'',
                   termoa:'',
                   obs:'',
                   gestor:'',
                   apontamentocontrescala:'',
                   cargoprestserv:'',
                   restricao:'',
                   prefiltro:'',
                   tiporestricao:'',
                   cadastroplantao:'',
                   totalcadastroplantao:'',
                   ecolaborador:'',
                   cpf:''
                  };
  
  }
  
  handleSubmit(event) {
    alert('Colaborador:           '+ this.state.colaborador+
          'Inicio Apontamento     '+this.state.inicioa+
          'Termo Apontamento      '+this.state.termoa+
          'Obs                    '+this.state.obs+
          'Gestor                 '+this.state.gestor+
          'apontamentocontrescala:'+this.state.apontamentocontrescala+
          'cargoprestserv:        '+this.state.cargoprestserv+
          'restricao:             '+this.state.restricao+
          'prefiltro:             '+this.state.prefiltro+
          'tiporestricao:         '+this.state.tiporestricao+
          'cadastroplantao:       '+this.state.cadastroplantao+
          'totalcadastroplantao:  '+this.state.totalcadastroplantao+
          'ecolaborador:          '+this.state.ecolaborador+
          'cpf:                   '+this.state.cpf
        );
    event.preventDefault();
  }
 
  
  handleColaboradorChange( event ){ 
   this.setState ({colaborador: event.target.value}); 
 } 
 handleInicioaChange (event ){ 
 this.setState ({inicioa: event.target.value}); 
 }
  handleTermoaChange (event ){ 
 this.setState ({termoa: event.target.value}); 
 }
  handleObsChange (event ){ 
  this.setState ({obs: event.target.value}); 
 }
 
 handleGestorChange (event ){ 
  this.setState ({gestor: event.target.value}); 
 }
 handleApontamentocontrescalaChange (event ){ 
  this.setState ({apontamentocontrescala: event.target.value}); 
 }
 handleCargoprestservChange (event ){ 
  this.setState ({cargoprestserv: event.target.value}); 
 }
 handleRestricaoChange (event ){ 
  this.setState ({restricao: event.target.value}); 
 }
  handlePrefiltroChange (event ){ 
  this.setState ({prefiltro: event.target.value}); 
 }
  handleTiporestricaoChange (event ){ 
  this.setState ({tiporestricao: event.target.value}); 
 }
  handleCadastroplantaoChange (event ){ 
  this.setState ({cadastroplantao: event.target.value}); 
 }
 handleTotalcadastroplantaoChange (event ){ 
  this.setState ({totalcadastroplantao: event.target.value}); 
 }
  handleEcolaboradorChange (event ){ 
  this.setState ({ecolaborador: event.target.value}); 
 }
 
 handleCpfChange (event ){ 
  this.setState ({cpf: event.target.value}); 
 }
 
  render() {
    return (
      <>
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={20}>
             <p style={{margin: 0}}></p>
            <ColumnStyle>
              <Tabs animated={false} type="card">
                <TabPane tab="Editar" key="1">
                  <TabContentStyle>
                    <SearchBar onQueryChange={this.onSearchProduct}/>
                    <br />
                      <form onSubmit={this.handleSubmit}>
                       <div>
                         <div>
                               <table>
                                <tr>
                                 <td>
                                   <div style={{ marginBottom: 16 , width:500}}>
                                   Colaborador *<Input type="text" name="colaborador" id="nome" value = {this.state.colaborador} onChange = {this.handleColaboradorChange} required="require"/>
                                   
                                   </div>
                                 </td>
                                 <td>
                                   <img src='./images/usuario.png'  width='22' height='22'/> 
                                 </td>
                                 </tr>
                                </table>
                              </div>
                            
                          
                             <div>
                               <table>
                                <tr>
                                 <td>
                                   <div style={{ marginBottom: 16 , width:250}}>
                                     <img src='./images/calendario.png'  width='22' height='22'/>
                                      &nbsp;Inicio de Apontamento *<Input type="date" name="inicioa" id="inicioa" value = {this.state.inicioa} onChange = {this.handleInicioaChange} required="require"/>
                                    </div>
                                  </td>
                                  <td>
                                  <div style={{ marginBottom: 16 , width:250}}>
                                  <img src='./images/calendario.png'  width='22' height='22'/>
                                  &nbsp;Termo de Apontamento *<Input type="date" name="termoa" id="termoa" value = {this.state.termoa} onChange = {this.handleTermoaChange} required="require"/>
                                  </div>
                                 </td>
                                  </tr>
                                </table>
                              </div>
                              <div style={{ marginBottom: 16 , width:500}}>
                                OBS <br /><Input type="text" name="obs" id="obs" value = {this.state.obs} onChange = {this.handleObsChange}/>
                              </div>
                              <div>
                                <table>
                                       <tr>
                                        <td>
                                          <div style={{ marginBottom: 16 , width:400}}><br />
                                            Gestor *<Input type="text" name="gestor" id="gestor" value = {this.state.gestor} onChange = {this.handleGestorChange} required="require"/>
                                            Usuário que receberá notificações caso o apontamento seja incompleto
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:700}}><br />
                                             Apontamento controlado por escala? <br /> 
                                             <select defaultValue="Não" style={{ width: 225, height:30}} name="apontamentocontrescala" id="apontamentocontrescala" value = {this.state.apontamentocontrescala} onChange = {this.handleApontamentocontrescalaChange} >
                                              <option value="Não">Não</option>
                                              <option value="Sim">Sim</option>
                                             </select><br />
                                             Marcar Não apenas para áreas que não prestam serviços <br />para Projeto| Contrato
                                           </div>
                                        </td>
                                       </tr>
                                </table>
                              </div>
                              
                              <div>
                              <table>
                                       <tr>
                                        <td>
                                           <div style={{ marginBottom: 16, width:400 }}><br />
                                            Cargo prestação de serviço
                                            *<Input type="text" name="cargoprestserv" id="cargoprestserv" value = {this.state.cargoprestserv} onChange = {this.handleCargoprestservChange} required="require"/>
                                            Preencher somente se colaborador <br />presta serviços para Cliente - Essa informação
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:500}}><br />
                                             Possuei Restrição? <br />
                                              <select defaultValue="Não" style={{ width: 225, height:30}} name="restricao" id="restricao" value = {this.state.restricao} onChange = {this.handleRestricaoChange} >
                                                <option value="Não">Não</option>
                                                <option value="Sim">Sim</option>
                                              </select><br /> 
                                               O usuário não poderá escolher a Classificação e o filtro <br /> no Formulário - deve-se preencher abaixo
                                           </div>
                                        </td>
                                        
                                       </tr>
                                </table>
                              </div>
                              
                               <div>
                                <table>
                                       <tr>
                                        <td>
                                          <div style={{ marginBottom: 16 , width:400}}>
                                            Pré-Filtro  *<Input type="text" name="prefiltro" id="prefiltro" value = {this.state.prefiltro} onChange = {this.handlePrefiltroChange} required="require"/>
                                            
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:500}}><br /><br />
                                             Tipo de Restrição <br />
                                              <select defaultValue="Nenhuma:" style={{ width: 225, height:30}} name="tiporestricao" id="tiporestricao" value = {this.state.tiporestricao} onChange = {this.handleTiporestricaoChange} >
                                               <option value="Nenhuma">Nenhuma</option>
                                               <option value="Sim">Sim</option>
                                              </select><br />
                                              Caso seja marcada a opção Contrato, o período de fechamento dos relatórios será de 01 a 30
                                           </div>
                                        </td>
                                       </tr>
                                </table>
                              </div>
                           
                             
                              <div>
                                <table>
                                       <tr>
                                        <td>
                                          <div style={{ marginBottom: 16}}>
                                           É colaborador <br />
                                             <select  style={{ width: 211, height:30}}  name="ecolaborador" id="ecolaborador" value = {this.state.ecolaborador} onChange = {this.handleEcolaboradorChange} >
                                             <option value="s">Sim</option>
                                             <option value="n">Não</option>
                                           </select>
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:200}}>
                                             CPF
                                              <Input type="text" name="cpf" id="cpf" value = {this.state.cpf} onChange = {this.handleCpfChange} />
                                           </div>
                                        </td>
                                       </tr>
                                </table>
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

export default Calculator