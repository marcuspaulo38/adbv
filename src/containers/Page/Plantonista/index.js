import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select, DatePicker, Checkbox  } from 'antd';
import './tab.css';
import SearchePlantonista from "./SearchePlantonista";
import SearchField from "react-search-field";
import Highlighter from 'react-highlight-words';
import userpic from '../../../image/editar.png';
import moment from 'moment';

import {
	  Card,
	  CardBody,
	  CardImage,
	  CardTitle,
	  CardText
	} from "mdbreact";

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'MM/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const plainOptions = ['Fortaleza', 'Recife', 'Salvador', 'Aracaju'];
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;


function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function onChange(pagination, filters, sorter, extra) {
	  console.log('params', pagination, filters, sorter, extra);
}

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	    search: "",
	    searchText: '',
	    searchedColumn: '',
	    
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
			                             name="date" id="date" onChange = {this.handleDateChange}  required="require"
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
			             <SearchePlantonista />
				       </TabPane>
		            </Tabs>
		          </div>
		    );
		   }
		  }
    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
    	export default WrappedAdvancedSearchForm;


