import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select, Checkbox  } from 'antd';
import './tab.css';

import SearchField from "react-search-field";

import calendario from '../../../image/calendario.png';



const { TabPane } = Tabs;

const { Option } = Select;

function Calendario() {
	  return  <img alt="user" src={calendario} height="25" width="25"/>;
}

function handleChange(value) {
	  console.log(value); 
	  alert("Localizando...:"+value);
}

function onSearchClick(value) {
	    
	 console.log(value); 
	 alert("Localizando...:"+value);
}

function onChange(e) {
	  console.log(`checked = ${e.target.checked}`);
	}

const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User', 
		    name: record.name,
		  }),
		};

const { Search } = Input;
const { TextArea } = Input;


const columns = [
  {
    title: 'Título',
    dataIndex: 'titulo',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tipo do Apontamento',
    dataIndex: 'tipodoapontamento',
  },
  {
    title: 'Data da atividade',
    dataIndex: 'datadaatividade',
  },
  {
    title: 'Horário de Inicio',
    dataIndex: 'horariodeinicio',
  },
  {
    title: 'Horário de Término',
    dataIndex: 'horariodetermino',
  },
  {
    title: 'Tempo Gasto',
    dataIndex: 'tempogasto',
   },
   {
    title: 'Atividade Interna',
    dataIndex: 'atividadeinterna',
  },
  {
    title: 'Projeto',
	dataIndex: 'projeto',
  },
  {
    title: 'Contrato',
    dataIndex: 'contrato',
  },
  {
	title: 'Observações',
	dataIndex: 'observacoes',
  },
  {
   title: 'Finalizar Apontamento de Atividades',
   dataIndex: 'finalizarapontamentodeatividades',
  },
  {
   title: 'Status',
   dataIndex: 'status',
   },
  {
   title: 'Criado por',
   dataIndex: 'criadopor',
  },
  {
   title: 'Aprovador',
   dataIndex: 'aprovador',
  },
  {
   title: 'Centro de Custo',
   dataIndex: 'centrodecusto',
  },
  {
   title: 'Classificação',
   dataIndex: 'classificao',
  }
  
];
const data = [
  {
      key                                   :'1',
      titulo                                :'2',
      tipodoapontamento                     :'3',
      datadaatividade                       :'4',
      horariodeinicio                       :'5',
      horariodetermino                      :'6',
      tempogasto                            :'7',
      atividadeinterna                      :'8',
      projeto                               :'9',
      contrato                              :'1',
      observacoes                           :'2',
      finalizarapontamentodeatividades      :'3',
      status                                :'4',
      criadopor                             :'5',
      aprovador                             :'6',
      centrodecusto                         :'7',
      classificao                           :'8',
  },
  {
      key                                   :'2',
      titulo                                :'2',
      tipodoapontamento                     :'3',
      datadaatividade                       :'4',
      horariodeinicio                       :'5',
      horariodetermino                      :'6',
      tempogasto                            :'7',
      atividadeinterna                      :'8',
      projeto                               :'9',
      contrato                              :'1',
      observacoes                           :'2',
      finalizarapontamentodeatividades      :'3',
      status                                :'4',
      criadopor                             :'5',
      aprovador                             :'6',
      centrodecusto                         :'7',
      classificao                           :'8',
  },
 
];

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	  };

	  render() {
	    
return (
 
       <div className="card-container">
         <Tabs type="card">
              <TabPane tab="Novo Item" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                     
                      <Row>
                       <Col span={13}>
                       
                       <table>
                       <tr>
                          <td>
                           <div style={{ marginBottom: 16 , width:200}}>
                              Data da Atividade
                              <br />
                              <Input type="date" name="dataatividade" id="dataatividade"  onChange = {this.handledataatividadeChange}  required="require"/>
                            </div>
                          </td>
                          
                          <td>
	                         <Calendario />
	                      </td>
                          
	                      <td>
                           <div style={{ marginBottom: 16 , width:150}}>
                              Tipo de Apontamento 
                              <br />
                              <Select
                              labelInValue
                              defaultValue={{ key: 'nomal' }}
                              style={{ width: 300 }}
                              onChange={handleChange} id="tipoDeApontamento" name="tipoDeApontamento"
                            >
                              <Option value="normal">Normal</Option>
                              <Option value="outros">Outros</Option>
                            </Select>
                            </div>
                          </td>
                           
                         </tr>
                    </table>
		                <div style={{ marginBottom: 16 , width:200}}>
			               <Form.Item label={`Horário de Inicio`} >
			                  <Input type="text" name="horainicio" id="horainicio"  onChange = {this.handleHorainicioChange} placeholder="00:00:00"   required="require"/>
			               </Form.Item>
		                </div>
		                <Col span={12}> <br />
                          <div>
                            <table>
                              <tr>
                                <td>
                                <Form.Item label={`Classificação`} > 
                                    <Select
                                     labelInValue
                                     defaultValue={{ key: 'nomal' }}
                                     style={{ width: 200 }}
                                     onChange={handleChange} id="classificacao" name="classificacao"
                                   >
                                     <Option value="normal">Normal</Option>
                                     <Option value="outros">Outros</Option>
                                   </Select>
                                   </Form.Item>
                                 </td>
                                 <td>
                                 <div style={{ marginBottom: 16 , width:25}}>
                                    &nbsp;&nbsp;&nbsp;
                                  </div>
                                </td>
                                 <td>
                                      <Form.Item label={`Filtro`} > 
	                                     <Search
	                                     placeholder="TIC Sistemas"
	                                     onSearch={value => console.log(value)}
	                                     style={{ width: 300 }}  id="filtro" name="filtro"/>
	                                 </Form.Item> 
                                  
                                 </td>
                                </tr>
                           </table>
                           <table>
                              <tr>
                                <td>
                                   <Form.Item label={`Observação`} > 
	                                  <TextArea rows={4} cols={5} style={{ width: 400 }} id="obs" name="obs" />
	                               </Form.Item> 
	                             </td>
	                             <td>
                                 &nbsp;&nbsp; 
	                             </td>
	                             <td>
	                                  <Form.Item label={`Fatos Relevantes`} > 
	                                  <Checkbox onChange={onChange} style={{ width: 500 }} id="fatosrelevantes" name="fatosrelevantes">Marque esta opção para compor o ciário Projeto ou EGP</Checkbox>
	                                 </Form.Item> 
                                 </td>
                                </tr>
                           </table>
                           <table>
                           <tr>
                             <td>
                                <Form.Item label={`Número do SDM`} style={{ width: 200 }}> 
                                      <Input type="text" name="numerosdm" id="numerosdm"  onChange = {this.handleHorainicioChange}   required="require"/>
	                                 
	                               </Form.Item> 
	                             </td>
	                             <td>
                                    &nbsp;&nbsp; 
	                             </td>
	                             <td>
	                                  <Form.Item label={`Finalizar Apontamento`} > 
	                                  <Checkbox onChange={onChange} style={{ width: 300 }} id="finalizarApontamento" name="finalizarApontamento" >Deseja manter o apontamento?</Checkbox>
	                                 </Form.Item> 
                                 </td>
                                 <td>
	                                 <Form.Item label={`Combustível`} > 
	                                 <Checkbox onChange={onChange} style={{ width: 300 }} id="combustivel" name="combustivel">Realizou atividade com relocamento?</Checkbox>
	                                </Form.Item> 
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
              <TabPane tab="Lista de Apontamento" key="2">
		              <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		                <SearchField  name="localizarListaApontamento" id="localizarListaApontamento"  onChange={this.handlelocalizarListaApontamentoAvulsaChange} placeholder='Localizar Apontamento...' onSearchClick={onSearchClick} />
	                  </h1>
                      <Table columns={columns} dataSource={data} />,
              </TabPane>
              
              
          </Tabs>
          </div>
    );
    	  }
    	}

    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


    	export default WrappedAdvancedSearchForm;


