import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';

import userpic from '../../../image/visualizar.png';

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}


const data = [

  {
    key                : '1',
    projeto            : "LIC-MICROSOFT/EX-91544-SAM MICROSOFT AMBIENTE FUNASA - CC(10128)",
    aprovador          : "Mauro Neves Araujo",
    centrodecusto      : "10.128",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    projeto           : "LIC-MICROSOFT/EX-94633-SAM MICROSOFT AMBIENTE CNJ - CC(11984)",
    aprovador          : "Valdinei Zimmer",
    centrodecusto      : "11.984",
    visualizar         : "visualizar",
    
  },
  
  {
    key                : '3',
    projeto            : "LIC-MICROSOFT/EX-80659-SAM MICROSOFT AMBIENTE BASA- CC(8910)",
    aprovador          : "Antônio Arthur Cavalcante Rocha",
    centrodecusto      : "89.10",
    visualizar         : "visualizar",
    
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
    title: 'Projeto',
    dataIndex: 'projeto',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.projeto.indexOf(value) === 0,
    sorter: (a, b) => a.projeto.length - b.projeto.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('projeto'),
  },
  {
    title: 'Aprovador',
    dataIndex: 'aprovador',
    onFilter: (value, record) => record.aprovador.indexOf(value) === 0,
    sorter: (a, b) => a.aprovador.length - b.aprovador.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('aprovador'),
   
  },
  {
    title: 'Centro de Custo',
    dataIndex: 'centrodecusto',
  },
  {
    title: 'Visualizar',
    dataIndex: 'visualizar',
    render: text => <a>{<Img />}</a>,
  
  },
];


    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
