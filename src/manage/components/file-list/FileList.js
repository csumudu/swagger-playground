import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import ctx from '../../../shared/services/ContextService';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'File Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Display Name',
    dataIndex: 'displayName',
    key: 'displayName',
    render: (text) => <a>{text}</a>,
  },
];

const FileList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const sb = ctx.allFiles$.subscribe((f) => setData(f));
    return () => sb.unsubscribe();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default FileList;
