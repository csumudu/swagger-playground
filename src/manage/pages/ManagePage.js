import React from 'react';
import { Row, Col, Card } from 'antd';
import UploadFile from '../components/upload/UploadFile';
import FileList from '../components/file-list/FileList';

const ManagePage = () => {
  return (
    <Row type="flex" className="dashboard">
      <Col xm={24} style={{ padding: 15 }}>
        <Card>
          <UploadFile />
        </Card>
      </Col>
      <Col xm={24} style={{ padding: 15 }}>
        <Card>
          <FileList />
        </Card>
      </Col>
    </Row>
  );
};

export default ManagePage;
