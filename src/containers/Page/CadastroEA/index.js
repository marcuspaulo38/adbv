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

     this.handleColaboradorChange = this.handleColaboradorChange.bind(this);
     this.handleInicioaChange = this.handleInicioaChange.bind(this);
     this.handleTermoaChange = this.handleTermoaChange.bind(this);
     this.handleObsChange = this.handleObsChange.bind(this);
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.state = {
                   colaborador: '',
                   inicioa:'',
                   termoa:'',
                   obs:''
                  };
  
  }
  
  handleSubmit(event) {
    alert('Colaborador: ' + this.state.colaborador+'Inicio Apontamento'+this.state.inicioa+'Termo Apontamento'+this.state.termoa+'Obs'+this.state.obs);
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
                                   Colaborador *<Input type="text" name="colaborador" id="nome" value = {this.state.colaborador} onChange = {this.handleColaboradorChange}/>
                                   
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
                                      &nbsp;Inicio de Apontamento *<Input type="date" name="inicioa" id="inicioa" value = {this.state.inicioa} onChange = {this.handleInicioaChange}/>
                   
                                    </div>
                                  </td>
                                  <td>
                                  <div style={{ marginBottom: 16 , width:250}}>
                                  <img src='./images/calendario.png'  width='22' height='22'/>
                                  &nbsp;Termo de Apontamento *<Input type="date" name="termoa" id="termoa" value = {this.state.termoa} onChange = {this.handleTermoaChange}/>
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
                                            Gestor  *<Input type="text" />
                                            Usuário que receberá notificações caso o apontamento seja incompleto
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:700}}><br />
                                             Apontamento controlado por escala? <br /> 
                                             <select defaultValue="Não" style={{ width: 225, height:30}}>
                                              <option value="Não">Não</option>
                                              <option value="Sim">Sim</option>
                                             </select><br />
                                             Marcar Não apenas para áreas que não prestam serviços <br />para Projeto/Contrato
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
                                            Cargo prestação de serviço  *<Input type="text" />
                                            Preencher somente se colaborador <br />presta serviços para Cliente - Essa informação
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:500}}><br />
                                             Possuei Restrição? <br />
                                              <select defaultValue="Não" style={{ width: 225, height:30}}>
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
                                            Pré-Filtro  *<Input type="text" />
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:500}}><br /><br />
                                             Tipo de Restrição <br />
                                              <select defaultValue="Nenhuma:" style={{ width: 225, height:30}}>
                                               <option value="Nenhuma">Nenhuma</option>
                                               <option value="Sim">Sim</option>
                                              </select><br />
                                              Caso seja marcada a opção Contrato, o período de fechamento dos relatórios será de 01 a 30
                                           </div>
                                        </td>
                                       </tr>
                                </table>
                              </div>
                              <td>Cadastro de plantão</td>
                              <div style={{ marginBottom: 16}} >
                                 <table>
                                  <tr>
                                  
                                   <td>
                                     <select id="s" multiple style={{ width: 225, height:100}}>
                                        
                                       <option value="a">Poo de Recursos-For</option>
                                       <option value="b">Poo de Recursos-Rec</option>
                                       <option value="c">Poo de Recursos-Salv</option>
                                     </select>
                                    
                                   </td>
                                   <td valign="center">
                                     &nbsp;&nbsp;<a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; listbox_moveacross('s', 'd')" data-cf-modified-13ce572d586f6e3b4267b954-=""><img src='./images/avancar.png'  width='22' height='22'/></a>
                                     &nbsp;&nbsp;<a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; listbox_moveacross('d', 's')" data-cf-modified-13ce572d586f6e3b4267b954-=""><img src='./images/retornar.png'  width='22' height='22'/></a>&nbsp;
                                   </td>
                                   <td>
                                    <select id="d" size="10" multiple style={{ width: 225, height:100}} >
                                      <option value="a">Outros</option>
                                    </select>
                                   </td>
                                </tr>
                               </table>
                               <div>
                                 O usuário não poderá escolher a Classificação e o filtro no Formulário - deve-se preencher abaixo
                               </div>
                             </div>
                             
                              <div>
                                <table>
                                       <tr>
                                        <td>
                                          <div style={{ marginBottom: 16}}>
                                           É colaborador <br />
                                            <select  value={this.state.favoriteColor2} onChange={this.handleColorSelect2} style={{ width: 211, height:30}}>
                                             <option value="s">Sim</option>
                                             <option value="n">Não</option>
                                           </select>
                                           </div>
                                        </td>
                                        <td>
                                           <div style={{ marginBottom: 16 , width:200}}>
                                             CPF
                                             <Input type="text" />
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