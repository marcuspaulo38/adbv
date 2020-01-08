import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button,Table, Tabs, DatePicker, Checkbox,Icon, Modal,  Alert, Select,InputNumber, Popconfirm,  } from 'antd';
import SearchePlantonista from "./SearchePlantonista";
import Highlighter from 'react-highlight-words';
import userpic from '../../../image/editar.png';
import moment from 'moment';
import './tab.css';



const { RangePicker } = DatePicker;
const dateFormat      = 'DD/MM/YYYY';
const monthFormat     = 'YYYY/MM';
const dateFormatList  = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TabPane }     = Tabs;
const { TextArea }    = Input;
const { MonthPicker } = DatePicker;
const { Option } = Select;
const children = [];



for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const children1 = [];
for (let i = 10; i < 36; i++) {
  children1.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function onChange(pagination, filters, sorter, extra) {
	  console.log('params', pagination, filters, sorter, extra);
   
}

class AdvancedSearchForm extends React.Component {
   constructor(props) {
    super(props);
	   this.state = {
	                  expand             : false,
	                  search             : "",
	                  searchText         : '',
	                  searchedColumn     : '',
                    dataplantonista    : '',
                    observacao         :'',
                    visible            : false,
                    visibleData        : false,
                    visibleNome        : false,
                    nomeplantonista    :'',
                    cidade             :'',
                    dataplantonista1   :  '',
                    dataplantonista2   :'',
                    
                  };
    this.handleChange                = this.handleChange.bind(this);
    this.handleChangeNomePlantonista = this.handleChangeNomePlantonista.bind(this);
    this.handleChangeCidade          = this.handleChangeCidade.bind(this);
    this.handleSubmit                = this.handleSubmit.bind(this);
    this.modalPlantonistaVisible     = false;
    this.modalNomeVisible            = false;
    this.pagination                  = {};
    this.loading                     = false;
    
 }
 
 handleChangeNomePlantonista = value=> {
  //console.log(`selected ${value}`);
  
   if (value == "nomeplantonista") {
            this.setState({
                nomeplantonista: value
            });
      }
      else{
          this.setState({ nomeplantonista: value });
          
      }
  
}

 handleChangeCidade = value=> {
  //console.log(`selected ${value}`);
  
   if (value == "cidade") {
            this.setState({
                cidade: value
            });
      }
      else{
          this.setState({ cidade: value });
          
      }
  
}

handleClose = () => {
    this.setState({ visible: false });
};

handleCloseData = () => {
    this.setState({ visibleData: false });
};
handleCloseNome = () => {
    this.setState({ visibleNome: false });
};


onChange = dataplantonista => this.setState({ dataplantonista})


setModalPlantonistaVisible(modalPlantonistaVisible) {
    this.setState({ modalPlantonistaVisible });
}
setModalNomeVisible(modalNomeVisible) {
    this.setState({ modalNomeVisible });
}

handleChange(event) {
  
     if (event.target.name == "dataplantonista") {
            this.setState({
                dataplantonista: event.target.value
              
            });
      }
     
  
     if (event.target.name == "observacao") {
            this.setState({
                observacao: event.target.value
            });
      }
     
}

handleSubmit(event) {
    //alert('Os dados submetidos são:');
    //alert('Data Plantonista : '  + this.state.dataplantonista);
    //alert('Platonista : '        + this.state.plantonista);
    //alert('Observação: '         + this.state.observacao );
    // alert('nomeplantonista: '    + this.state.nomeplantonista );    
    //alert('Data Plantonista : '  + Date.parse(this.state.dataplantonista.toString()));
    
        let a    = "";
        let b    = this.state.dataplantonista;
        let c    = a.concat(b); 
        const str= c;
        let res  = str.split(",");
        let data = new Date(res[0]);
        let dia  = data.getDate().toString();
        let diaF = (dia.length == 1) ? '0'+dia : dia;
        let mes  = (data.getMonth()+1).toString(); //+1 pois no getMonth Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0'+mes : mes;
        let anoF = data.getFullYear();
        this.setState({dataplantonista1: +diaF+"/"+mesF+"/"+anoF});
      
        let data1 = new Date(res[1]);
        let dia1  = data1.getDate().toString();
        let diaF1 = (dia1.length == 1) ? '0'+dia1 : dia1;
        let mes1  = (data1.getMonth()+1).toString(); 
        let mesF1 = (mes1.length == 1) ? '0'+mes1 : mes1;
        let anoF1 = data1.getFullYear();
        this.setState({dataplantonista2: +diaF1+"/"+mesF1+"/"+anoF1});
       
      
    
     if (this.state.nomeplantonista == '' || this.state.nomeplantonista == false ||  this.state.nomeplantonista == undefined) 
     {
       this.setState({ visibleNome: true });
       this.setModalNomeVisible(false);
       event.preventDefault(false);
       return false;
    } 
    
    if (this.state.dataplantonista == '' || this.state.dataplantonista == false || this.state.dataplantonista == undefined) 
    {
       this.setState({ visibleData: true });
       this.setModalPlantonistaVisible(false);
       event.preventDefault(false);
       return false;
    }  
    if (this.state.cidade== false || this.state.cidade == '' || this.state.cidade == undefined)
    {
       this.setState({ visible: true });
       this.setModalPlantonistaVisible(false);
       event.preventDefault(false);
       return false;
    }
    else{ 
         event.preventDefault(true);
         this.setModalPlantonistaVisible(true);
    }
    
}

 getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Localizar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  
render() {
  
  const { dataSource, value } = this.state;
  
  const columns = [
  {
    title: 'Plantonista(s)',
    dataIndex: 'nomeplantonista',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.nomeplantonista.indexOf(value) === 0,
    sorter: (a, b) => a.nomeplantonista.length - b.nomeplantonista.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('nomeplantonista'),
  },
  {
    title: 'Data',
    dataIndex: 'dataplantonista',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataplantonista - b.dataplantonista,
  },
  
  {
    title: 'Cidade(s)',
    dataIndex: 'cidade',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.cidade.indexOf(value) === 0,
    sorter: (a, b) => a.cidade.length - b.cidade.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('cidade'),
  },
  
  {
    title: 'Observações',
    dataIndex: 'observacao',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.observacao - b.observacao,
  },
  {
    title: 'Integrado com Rubi',
    dataIndex: 'integradocomrubi',
  },
  {
    title: 'Criado por',
    dataIndex: 'criadopor',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.criadopor.indexOf(value) === 0,
    sorter: (a, b) => a.criadopor.length - b.criadopor.length,
    sortDirections: ['descend'],
    ...this.getColumnSearchProps('criadopor'),
  },
  {
    title: 'Modificado por',
    dataIndex: 'modificadopor',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.modificadopor.indexOf(value) === 0,
    sorter: (a, b) => a.modificadopor.length - b.modificadopor.length,
    sortDirections: ['descend'],
    ...this.getColumnSearchProps('modificadopor'),
   },
   {
    title: 'editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
  },
  
  
];
  
  const data = [
  {
     key                                 :'1',
     nomeplantonista                     : this.state.nomeplantonista,
     dataplantonista                     :this.state.dataplantonista1+'-'+this.state.dataplantonista2,
     cidade                              :this.state.cidade,
     observacao                          :this.state.observacao,
     integradocomrubi                    :'...',
     criadopor                           :'Antonio Luiz',
     modificadopor                       :'Edson Nascimento',
     editar                              :'Contrato',
  },
 
];
  
 const columns1 = [
  {
    title: 'Plantonista(s)',
    dataIndex: 'nomeplantonista',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.nomeplantonista.indexOf(value) === 0,
    sorter: (a, b) => a.nomeplantonista.length - b.nomeplantonista.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('nomeplantonista'),
  },
  {
    title: 'Data',
    dataIndex: 'dataplantonista',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataplantonista - b.dataplantonista,
  },
  {
    title: 'Cidade(s)',
    dataIndex: 'cidade',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.cidade.indexOf(value) === 0,
    sorter: (a, b) => a.cidade.length - b.cidade.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('plantonista'),
  },
 
  
];
                                
  const data1 = [
  {
     key                                 :'1',
     nomeplantonista                     : this.state.nomeplantonista,
     dataplantonista                     :this.state.dataplantonista1+'-'+this.state.dataplantonista2,
     cidade                              :this.state.cidade,
  },
 
]; 
	    
		return (
		     <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Novo Cadastro" key="1" textStyle={{color: '#fff'}} >
		                 <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
		                     <Row>
                         <table>
                              <tr>
                                <td>
                                  <Form.Item label={`Plantonista(s)`} style={{ marginBottom: 16 , width:400}}>
                                     <Select mode="tags" id="nomeplantonista" name="nomeplantonista" onChange={this.handleChangeNomePlantonista} value={this.state.nomeplantonista}  tokenSeparators={[',']} required="required">
                                  {children}
                                 </Select>,
                                  </Form.Item>
                                  <div>
                                    {this.state.visibleNome ? (
                                      <Alert
                                        message="Atenção: Informe um ou mais Plantonista(s)."
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseNome}
                                      /> ) : null}
                                  </div>
                                
                                </td>
                             
                              </tr>
                            </table>
		                         <table>
		                           <tr>
                               <td>
                               
                               </td>
		                            <td>
                                  <Form.Item label={`Data`}  style={{ marginBottom: 16 , width:400}}>
                                    
                                   <RangePicker
                                      defaultValue={[moment('01/01/2020', dateFormat), moment('31/12/2020', dateFormat)]}
                                      format={dateFormat}
                                      onChange={this.onChange}
                                      value={this.state.dataplantonista}
                                      id="dataplantonista" name="dataplantonista" required="required"
                                    />
                                  </Form.Item>
                                  <div>
                                    {this.state.visibleData ? (
                                      <Alert
                                        message="Atenção: Informe uma competência."
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseData}
                                      /> ) : null}
                                  </div>
				                     
		                            </td>
		                           </tr>
		                         </table>
		                         <table>
		                           <tr>
		                             <td>
			                          <Form.Item label={`Cidade(s)`}  style={{ marginBottom: 16 , width:400}}>
				                          <Select mode="tags" id="cidade" name="cidade" onChange={this.handleChangeCidade} value={this.state.cidade}  tokenSeparators={[',']} required="required">
                                  {children1}
                                 </Select>,
				                        </Form.Item>
                                <div>
                                {this.state.visible ? (
                                  <Alert
                                    message="Atenção: Informe pelo menos uma Cidade."
                                    type="error"
                                    closable
                                    afterClose={this.handleClose}
                                  /> ) : null}
                                  </div>
			                         </td>
		                           </tr>
		                         </table>
                            
		                       <table>
			                     <tr>
			                       <td>
			                         <Form.Item label={`Observação`} > 
				                          <TextArea rows={4} cols={5} style={{ width: 800 }} id="observacao" name="observacao" value={this.state.observacao}  onChange={this.handleChange} />
				                       </Form.Item>
                             </td>
                          
			                     </tr>
			                   </table>
			                  </Row>
		                     <Row>
		                          <Col span={24} style={{ textAlign: 'left' }}>
		                             <Button type="primary" htmlType="submit">  Submit </Button>
					                       <Button type="reset" style={{ marginLeft: 450 }}>  Cancelar </Button>
		                          </Col>
                               <Modal
                                  title="Dados enviados com sucesso!"
                                  style={{ top: 20, width:400 }}
                                  visible={this.state.modalPlantonistaVisible}
                                  onOk={() => this.setModalPlantonistaVisible(false)}
                                  onCancel={() => this.setModalPlantonistaVisible(false)}>
                                 <p><Table dataSource={data1} columns={columns1} />,</p>  
                             </Modal>
                             
                             
		                    </Row>
		                 </Form>
		              </TabPane>
		              <TabPane tab="Lista de Plantonista" key="2">
			            <Table dataSource={data} columns={columns} />
				       </TabPane>
		            </Tabs>
		          </div>
		    );
		   }
		  }
    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
    	export default WrappedAdvancedSearchForm;


