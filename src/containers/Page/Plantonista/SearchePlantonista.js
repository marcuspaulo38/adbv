import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import './tab.css';

import userpic from '../../../image/editar.png';
import calendario from '../../../image/calendario.png';
import window from '../../../image/window.jpg';
import livro from '../../../image/livro.png';

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

  const data = [
  {
     key                                 :'1',
     data                                :'01/07/2013 a 05/12/2013',
     platonista                          :'José Luiz Pires',
     observacoes                         :'...',
     integradocomrubi                    :'...',
     criadopor                           :'Antonio Luiz',
     modificadopor                       :'Edson Nascimento',
     editar                              :'Contrato',
  },
  {
      key                                   :'2',
      data                                :'01/57/2014 a 05/11/2015',
      platonista                          :'Marcus Paulo',
      observacoes                         :'...',
      integradocomrubi                    :'...',
      criadopor                           :'José Luiz Pires',
      modificadopor                       :'Edson Nascimento',
      editar                              :'Contrato',
  },
 
];

	class AdvancedSearchForm extends React.Component {
  	   state = {
  	    expand: false,
  	    search: "",
  	    searchText: '',
  	    searchedColumn: '',
  	    
  	  };


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
	  
  const columns = [
  {
    title: 'Data',
    dataIndex: 'data',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.data - b.data,
  },
  {
    title: 'Platonistas',
    dataIndex: 'platonista',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.tipodoapontamento.indexOf(value) === 0,
    sorter: (a, b) => a.platonista.length - b.platonista.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('platonista'),
  },
  
  {
    title: 'Observacoes',
    dataIndex: 'observacoes',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.observacoes - b.observacoes,
  },
  {
    title: 'Integrado com Rubi',
    dataIndex: 'integradocomrubi',
  },
  {
    title: 'Criado por',
    dataIndex: 'criadopor',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.titulo.indexOf(value) === 0,
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
  
    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
