import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import './tab.css';

import userpic from '../../../image/editar.png';

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

  const data = [
  {
    key            : '1',
    matricula      : "FORTALEZA - F9612101",
    nome           : "ANTONIO L. RODRIGUES",
    horainicio     : "08:00 00:00",
    terminoalmoco  : "12:30 00:00",
    horafim        : "14:00 00:00",
    quantidadehoras: "8,8",
    totaldescanso  : "01:30 00:00:",
    editar         : "Editar | Excluir"
  },
  {
    key            : '2',
    matricula      : "FORTALEZA - F9412102",
    nome           : "MARCUS PAULO",
    horainicio     : "08:00 00:00",
    terminoalmoco  : "12:30 00:00",
    horafim        : "14:00 00:00",
    quantidadehoras: "18,8",
    totaldescanso  : "02:30 00:00",
    editar         : "Editar | Excluir"
    
  },
  
  {
    key            : '3',
    matricula      : "FORTALEZA - F9512222",
    nome           : "MIKAEL MADSON",
    horainicio     : "08:10 00:00",
    terminoalmoco  : "12:40 00:00",
    horafim        : "14:30 00:00",
    quantidadehoras: "5,5",
    totaldescanso  : "01:30 00:00",
    editar         : "Editar | Excluir"
    
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
    title: 'Matricula',
    dataIndex: 'matricula',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
    onFilter: (value, record) => record.nome.indexOf(value) === 0,
    sorter: (a, b) => a.nome.length - b.nome.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('nome'),
  },
  {
    title: 'Inicio',
    dataIndex: 'horainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.horainicio - b.horainicio,
  },
  {
    title: 'Almoço',
    dataIndex: 'terminoalmoco',
  },
  {
    title: 'Término',
    dataIndex: 'horafim',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantidadehoras',
   },
   {
    title: 'Total',
    dataIndex: 'totaldescanso',
  },
   {
    title: 'Editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
   },
];
  
    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
