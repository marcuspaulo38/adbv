import React from 'react';
import Table from './tableStyle';

export default function tableFinancial(props) {
  const { data, columns } = props;
  return <Table columns={columns} dataSource={data} pagination={false} />;
}
