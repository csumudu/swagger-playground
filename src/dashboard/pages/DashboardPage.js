import React from 'react';
import { Row, Col, Card } from 'antd';
import './DashbaordPage.scss';
import SwaggerPlayground from '../components/swagger-playground/SwaggerPlayground';

const DashboardPage = () => {
  return (
    <>
      <Row type="flex" className="dashboard">
        <Col xm={24} style={{ padding: 15 }}>
          <Card>
            <SwaggerPlayground />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
