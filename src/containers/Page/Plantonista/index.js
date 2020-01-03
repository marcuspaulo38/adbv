import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button,Table, Tabs, DatePicker, Checkbox,Icon, Modal,  Alert  } from 'antd';
import SearchePlantonista from "./SearchePlantonista";
import Highlighter from 'react-highlight-words';
import userpic from '../../../image/editar.png';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import './tab.css';

const { RangePicker } = DatePicker;
const dateFormat      = 'DD/MM/YYYY';
const monthFormat     = 'YYYY/MM';
const dateFormatList  = ['DD/MM/YYYY', 'DD/MM/YY'];
const plainOptions    = ['Fortaleza', 'Recife', 'Salvador', 'Aracaju'];
const { TabPane }     = Tabs;
const { TextArea }    = Input;
const { MonthPicker } = DatePicker;


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
	                  expand: false,
	                  search         : "",
	                  searchText     : '',
	                  searchedColumn : '',
                    dataplantonista: '',
                    plantonista    :'',
                    observacao     :'',
                    visible        : false,
                    visibleDat     : false,
                    
                };
    this.onChange1                = this.onChange1.bind(this);     
    this.handleChange             = this.handleChange.bind(this);
    this.handleSubmit             = this.handleSubmit.bind(this);
    this.modalPlantonistaVisible  = false;
    this.pagination               = {};
    this.loading                  = false;
    
   
    
    
 }

handleClose = () => {
    this.setState({ visible: false });
};

handleCloseData = () => {
    this.setState({ visibleData: false });
};

onChange = dataplantonista => this.setState({ dataplantonista})


onChange1(checkedValues) {
  this.setState({ plantonista: checkedValues})
  
}

setModalPlantonistaVisible(modalPlantonistaVisible) {
    this.setState({ modalPlantonistaVisible });
}

handleChange(event) {
  
     if (event.target.name == "dataplantonista") {
            this.setState({
                dataplantonista: event.target.value
              
            });
      }
      
      if (event.target.name == "plantonista") {
            this.setState({
                plantonista: event.target.value
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
      //alert('Data Plantonista : '       + this.state.dataplantonista);
      //alert('Platonista : '              + this.state.plantonista);
      //alert('Observação: '               + this.state.observacao );
    
    if (this.state.dataplantonista == '')
    {
       this.setState({ visibleData: true });
       this.setModalPlantonistaVisible(false);
       event.preventDefault(false);
       return false;
    }  
    if (this.state.plantonista== false)
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
    title: 'Data',
    dataIndex: 'dataplantonista',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataplantonista - b.dataplantonista,
  },
  {
    title: 'Plantonistas',
    dataIndex: 'plantonista',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.plantonista.indexOf(value) === 0,
    sorter: (a, b) => a.plantonista.length - b.plantonista.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('plantonista'),
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
     dataplantonista                     :'this.state.dataplantonista',
     plantonista                         :this.state.plantonista,
     observacao                          :this.state.observacao,
     integradocomrubi                    :'...',
     criadopor                           :'Antonio Luiz',
     modificadopor                       :'Edson Nascimento',
     editar                              :'Contrato',
  },
 
];
  
 const columns1 = [
  {
    title: 'Data',
    dataIndex: 'dataplantonista',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataplantonista - b.dataplantonista,
  },
  {
    title: 'Plantonistas',
    dataIndex: 'plantonista',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.plantonista.indexOf(value) === 0,
    sorter: (a, b) => a.plantonista.length - b.plantonista.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('plantonista'),
  },
  
  {
    title: 'Observações',
    dataIndex: 'observacao',
    onFilter: (value, record) => record.observacao.indexOf(value) === 0,
    sorter: (a, b) => a.observacao.length - b.observacao.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('observacao'),
  },
  
];
                                
  const data1 = [
  {
     key                                 :'1',
     dataplantonista                     :'this.state.dataplantonista',
     plantonista                          :this.state.plantonista,
     observacao                          :this.state.observacao,
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
                                        message="Atenção: informe uma data"
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
			                          <Form.Item label={`Plantonista`}  style={{ marginBottom: 16 , width:400}}>
				                          <Checkbox.Group options={plainOptions} defaultValue={['Dados']} value={this.state.plantonista} onChange={this.onChange1} required="required"/>
				                        </Form.Item>
                                <div>
                                {this.state.visible ? (
                                  <Alert
                                    message="Atenção: marque ao menos um PLANTONISTA"
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


