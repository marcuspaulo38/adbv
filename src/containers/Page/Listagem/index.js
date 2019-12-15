import React from 'react';

import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import { Table } from 'antd';
import { Tabs } from 'antd';




const columns = [
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
  },
  {
    title: 'Inicio',
    dataIndex: 'horainicio',
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
];
const data = [
  {
    key            : '1',
    matricula      : "FORTALEZA - F9612101",
    nome           : "ANTONIO L. RODRIGUES",
    horainicio     : "08:00 00:00:0000",
    terminoalmoco  : "12:30 00:00:0000",
    horafim        : "14:00 00:00:0000",
    quantidadehoras: "8,8",
    totaldescanso  : "01:30 00:00:0000"
    
  },
  {
    key            : '2',
    matricula      : "FORTALEZA - F9412102",
    nome           : "MARCUS PAULO",
    horainicio     : "08:00 00:00:0000",
    terminoalmoco  : "12:30 00:00:0000",
    horafim        : "14:00 00:00:0000",
    quantidadehoras: "18,8",
    totaldescanso  : "02:30 00:00:0000"
    
  },
  
  {
    key            : '3',
    matricula      : "FORTALEZA - F9512222",
    nome           : "MIKAEL MADSON",
    horainicio     : "08:10 00:00:0000",
    terminoalmoco  : "12:40 00:00:0000",
    horafim        : "14:30 00:00:0000",
    quantidadehoras: "5,5",
    totaldescanso  : "04:30 00:00:0000"
    
  },
  
 
];

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
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






const ListItem = ({ onChange, onDelete, value }) => {
  return (
          <div className="Item-container">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Ações do Site" key="1">
               &nbsp;&nbsp;<img src='./images/lanlink.png'  width='250' height='70'/> Portal TimeSheet <b> > </b>Escala Avulsa
              </TabPane>
              <TabPane tab="Procurar" key="2">
               &nbsp;&nbsp;<img src='./images/lanlink.png'  width='250' height='70'/> Portal TimeSheet <b> > </b> Escala Avulsa
              </TabPane>
              
            </Tabs>,
            <Tabs defaultActiveKey="2" onChange={callback}>
              <TabPane tab="Portal TimeSheet" key="2">
               <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
              </TabPane>
              <TabPane tab="Minhas Aprovações" key="2">
                Minhas Aprovações
              </TabPane>
              <TabPane tab="Relatórios" key="3">
                Relatórios
              </TabPane>
               <TabPane tab="Admin" key="4">
                Admin
              </TabPane>
              <TabPane tab="FAQ" key="5">
                FAQ
              </TabPane>
              <TabPane tab="Treinamento" key="6">
                Treinamento
              </TabPane>
              <TabPane tab="Plantonistas" key="7">
                Plantonistas
              </TabPane>
              <TabPane tab="Indisponibilidades e Ausências" key="8">
                Indisponibilidades e Ausências
              </TabPane>
               <TabPane tab="Importar" key="9">
                Importar
              </TabPane>
               <TabPane tab="Minhas Aprovações" key="10">
                Importar
              </TabPane>
               <TabPane tab="Relatórios" key="11">
                Relatórios
              </TabPane>
            </Tabs>,
          </div>
  );
};

export default ListItem;