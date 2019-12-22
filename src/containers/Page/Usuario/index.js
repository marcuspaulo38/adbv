import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select } from 'antd';
import './tab.css';
import SearchField from "react-search-field";
import userpic from '../../../image/editar.png';


function Img() {
  return  <img alt="user" src={userpic} height="25" width="25"/>;
}



function handleChange(value) {
	  console.log(value); 
	  alert("Localizando...:"+value);
}

function onSearchClick(value) {
	    
	 console.log(value); 
	 alert("Localizando...:"+value);
}

const { TabPane } = Tabs;

const { Option } = Select;

const columns = [
  {
    title: 'Colaborador',
    dataIndex: 'colaborador',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Inicio de Apontamento',
    dataIndex: 'datainicio',
  },
  {
    title: 'Termino de Apontamento',
    dataIndex: 'datafim',
  },
  {
    title: 'Gestor',
    dataIndex: 'gestor',
   },
   {
    title: 'Apontamento Controlado por Escala',
    dataIndex: 'apontamentocontroladoporescala',
  },
   {
    title: 'Editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
   },
];

	 
const data = [
  {
    key                           : '1',
    colaborador                   : "Antonio Dos Santos",
    datainicio                    : "21/01/2019",
    datafim                       : "",
    gestor                        : "Lucio Amâncio",
    apontamentocontroladoporescala: "Não",
    editar                        : "Visualizar",
  },
  {
    key            : '2',
    colaborador                   : "Ademira Maria",
    datainicio                    : "05/01/2019",
    datafim                       : "",
    gestor                        : "Jorge Silveira",
    apontamentocontroladoporescala: "Não",
    editar                        : "Visualizar",
    
  },
  
 
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', 
    name: record.name,
  }),
};

class AdvancedSearchForm extends React.Component {
   state = {
    expand: false,
  };
   
   
 
  render() {
    return (
       <div className="card-container">
         <Tabs type="card">
              <TabPane tab="Novo Cadastro" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                      <Row>
                       <Col span={13}>
                         <Form.Item label={`Colaborador`}>
                         
                           <Input type="text" name="colaborador" id="colaborador"  onChange = {this.handleColaboradoroChange}  required="require"/>
                         </Form.Item>
                        <Col span={12}>
                          <div>
                            <table>
                              <tr>
                                <td>
                                  <div style={{ marginBottom: 16 , width:200}}>
                                     Data Inicio de Apontamento
                                     <br />
                                     <Input type="date" name="datainicioapontamento" id="datainicioapontamento"  onChange = {this.handleDataInicioApontamentoChange}  required="require"/>
                                   </div>
                                 </td>
                                  <td>
                                  <div style={{ marginBottom: 16 , width:200}}>
                                     Data de Término Apontamento 
                                     <br />
                                     
                                     <Input type="date" name="dataterminoapontamento" id="dataterminoapontamento"  onChange = {this.handleDataTerminoApontamentoChange}  required="require"/>
                                   </div>
                                 </td>
                                </tr>
                           </table>
                           
                           <table>
                           <tr>
                             <td>
	                             <Col span={44}>
	                              <Form.Item label={`Observações`}>
	                                 <textarea name="obs" id="obs"  onChange = {this.handleObsChange}  required="require"/>
	                              </Form.Item>
	                             </Col>
                             </td>
                           </tr>
                        </table>
                           
                         
                           <table>
                           <tr>
                             <td>
                               <div style={{ marginBottom: 16 , width:300}}>
                                  Gestor
                                  <Input type="text" name="gestor" id="gestor"  onChange = {this.handleGestorChange} required="require"/>
                                </div>
                              </td>
                               <td>
	                               <div style={{ marginBottom: 16 , width:200}}>
		                               Apontamento por escala? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'sim' }}
			                                  style={{ width: 200 }}
			                                  name="apontamentoescala" id="apontamentoescala"  onChange = {this.handleapontamentoEscalaChange}> 
			                                  <Option value="sim">Sim</Option>
			                                  <Option value="sim">Não</Option>
			                                </Select>
		                              
	                                </div>
                              </td>
                              
                             </tr>
                        </table>
                        
                        <table>
                        <tr>
                          <td>
                            <div style={{ marginBottom: 16 , width:300}}>
                               Cargo Prestação de Serviço
                               <Input type="text" name="cargoprestacaoservico" id="cargoprestacaoservico"  onChange = {this.handlecargoPrestacaoServicoChange} required="require"/>
                             </div>
                           </td>
                            <td>
	                               <div style={{ marginBottom: 16 , width:200}}>
		                               Possui Restrição? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'sim' }}
			                                  style={{ width: 200 }}
			                                  name="restricao" id="restricao"  onChange = {this.handlerestricaoChange}>
			                                  <Option value="sim">Sim</Option>
			                                  <Option value="sim">Não</Option>
			                                </Select>
		                              
	                                </div>
                           </td>
                           
                          </tr>
                     </table>
                     
                     <table>
                     <tr>
                       <td>
                         <div style={{ marginBottom: 16 , width:300}}>
                            Pré-Filtro
                            <Input type="text" name="prefiltro" id="prefiltro"  onChange = {this.handlepreFiltroChange} required="require"/>
                          </div>
                        </td>
                         <td>
	                               <div style={{ marginBottom: 16 , width:200}}>
		                               Tipo Restrição? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'nenhuma' }}
			                                  style={{ width: 200 }}
			                                  name="tiporestricao" id="tiporestricao"  onChange = {this.handlepretipoRestricaoChange} required="require">
			                                  <Option value="nenhuma">Nenhuma</Option>
			                                  <Option value="retricao">Restrição</Option>
			                                </Select>
		                              
	                                </div>
                        </td>
                        
                       </tr>
                  </table>
                  <table>
                  <tr>
                    <td>
                      <div style={{ marginBottom: 16 , width:300}}>
                      É Colaborador? <br />
                      <Select
                         labelInValue
                         defaultValue={{ key: 'sim' }}
                         style={{ width: 200 }}
                         name="colaborador" id="colaborador"  onChange = {this.handleprecolaboradorChange} required="require">
                         <Option value="sim">Sim</Option>
                         <Option value="nao">Não</Option>
                       </Select>
                 
                       </div>
                     </td>
                      <td>
	                     <div style={{ marginBottom: 16 , width:200}}>
	                       CPF
	                      <Input type="text" name="cpf" id="cpf"  onChange = {this.handlecpfChange} required="require"/>
		                 </div>
                     </td>
                   </tr>
               </table>
                         </div>
                        </Col>
                       </Col>
                      </Row>
                      <Row>
                          <Col span={24} style={{ textAlign: 'left' }}>
                            <Button type="primary" htmlType="submit" >
                              Salvar
                            </Button>
                            <Button style={{ marginLeft: 450 }}>
                              Cancelar
                            </Button>
                            
                          </Col>
                     </Row>
                 </Form>
              </TabPane>
              <TabPane tab="Lista de Usuários" key="2">
	              <div>
	                <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
	                  <SearchField  name="localizarUsuario" id="localizarUsuario"  onChange={this.handlelocalizarUsuarioChange} placeholder='Localizar Usuário..' onSearchClick={onSearchClick} />
	                </h1>
	                <Table columns={columns} dataSource={data} />,
	             </div>
              </TabPane>
              
          </Tabs>
       </div>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


export default WrappedAdvancedSearchForm;



