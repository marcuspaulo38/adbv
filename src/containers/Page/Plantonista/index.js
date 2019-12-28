import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select, DatePicker, Checkbox } from 'antd';
import './tab.css';

import SearchField from "react-search-field";



import userpic from '../../../image/editar.png';
import calendario from '../../../image/calendario.png';
import window from '../../../image/window.jpg';
import livro from '../../../image/livro.png';


import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'MM/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const plainOptions = ['Fortaleza', 'Recife', 'Salvador', 'Aracaju'];

const { TabPane } = Tabs;

const { Option } = Select;

const { TextArea } = Input;

function onChange(checkedValues) {
	  console.log('checked = ', checkedValues);
}

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function Calendario() {
	  return  <img alt="user" src={calendario} height="25" width="25"/>;
}
function Window() {
	  return  <img alt="user" src={window} height="25" width="25"/>;
}
function Livro() {
	  return  <img alt="user" src={livro} height="25" width="25"/>;
}

function handleChange(value) {
	  console.log(value); 
	  alert("Localizando...:"+value);
}

function onSearchClick(value) {
	    
	 console.log(value); 
	 alert("Localizando...:"+value);
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



const columns = [
  {
        title: 'Data',
        dataIndex: 'data',
  },
  {
        title: 'Platonista Fortaleza',
        dataIndex: 'platonistafortaleza',
        render: text => <a>{text}</a>,
  },
  {
	    title: 'Platonista Recife',
	    dataIndex: 'platonistarecife',
	    render: text => <a>{text}</a>,
  },
  {
	    title: 'Platonista Salvador Aracaju',
	    dataIndex: 'platonistasalvadoraracaju',
	    render: text => <a>{text}</a>,
  },
  
  {
	    title: 'Observações',
	    dataIndex: 'obs',
  },
  {
	    title: 'Integrado com o rubi',
	    dataIndex: 'integradocomrubi',
  },
  {
	    title: 'Criado por',
	    dataIndex: 'criadopor',
	    renderIndex: text => <a>{text}</a>,
  },
  {
	    title: 'Modificado por',
	    dataIndex: 'modificadopor',
	    renderIndex: text => <a>{text}</a>,
  },
  {
	    title: 'Editar',
	    dataIndex: 'editar',
	    render: text => <a>{<Img />}</a>,
  },
];
const data = [
  {
    key                        : '1',
    data                       : "01/12/2019",
    platonistafortaleza        : "Luiz Camargo Reis, David Tavares, Mario Moreira Vasconcelos",
    platonistarecife           : "Robson Carvalhos de Sousa",
    platonistasalvadoraracaju  : "",
    obs                        : "",
    integradocomrubi           : "Não",
    criadopor                  : "Samuel",
    modificadopor              : "Marcus Paulo",
    editar                     : "Editar"
  },
  {
	    key                        : '2',
	    data                       : "02/12/2019",
	    platonistafortaleza        : "Luiz Camargo Reis, David Tavares, Mario Moreira Vasconcelos",
	    platonistarecife           : "Robson Carvalhos de Sousa Silva",
	    platonistasalvadoraracaju  : "",
	    obs                        : "",
	    integradocomrubi           : "Não",
	    criadopor                  : "Valeria Carmo",
	    modificadopor              : "Madson",
	    editar                     : "Editar"
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
              <TabPane tab="Novo Cadastro" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                     <Row>
                         <table>
                           <tr>
                            <td>
	                         <Form.Item label={`Data`}  style={{ marginBottom: 16 , width:400}}>
	                           <RangePicker
	                             defaultValue={[moment('01/01/2015', dateFormat), moment('01/01/2015', dateFormat)]}
	                             format={dateFormat}
	                             name="date" id="date"  onChange = {this.handleDateChange}  required="require"
	                           />	   
	                         </Form.Item>
                            </td>
                           </tr>
                         </table>
                         <table>
                           <tr>
                             <td>
	                          <Form.Item label={`Plantonista`}  style={{ marginBottom: 16 , width:400}}>
		                          <Checkbox.Group options={plainOptions} defaultValue={['Dados']} onChange={onChange} />
		                      </Form.Item>
	                         </td>
                           </tr>
                         </table>
                       
	                     <table>
	                     <tr>
	                       <td>
	                       
		                       <Form.Item label={`Observação`} > 
		                          <TextArea rows={4} cols={5} style={{ width: 800 }} id="obs" name="obs" />
		                       </Form.Item> 
		                     
		                  </td>
		                         
	                      
	                     </tr>
	                   </table>
	                         
                         
                         
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
              <TabPane tab="Lista de Plantonista" key="2">
		              <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		                <SearchField  name="localizarPlatonista" id="localizarPlanonista"  onChange={this.handlelocalizarPlatonistaChange} placeholder='Localizar Plantonista' onSearchClick={onSearchClick} />
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


