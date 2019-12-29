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
    projeto            : "COMP-INT BEL GOV -RORAIMA- COMPLEMENTAR ON 57121 ON CN 60629 -CC5977CC5971",
    aprovador          : "Paulo Fco Brito Moreira",
    centrodecusto      : "5977",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 67335 -2013 ON 62295 -CC5977CC123971",
    aprovador          : "Samuel Teixeira",
    centrodecusto      : "6459",
    visualizar         : "visualizar",
  },
  {
    key                : '3',
     projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 63335 -2013 ON 62295 -CC5977CC1453971",
    aprovador          : "Rafael Morais dos Santos",
    centrodecusto      : "6479",
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
	
