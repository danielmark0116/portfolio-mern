import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import PageContainer from '../common/PageContainer/PageContainer';
import ContactComponent from './components/ContactContainer';

import Title from '../common/Title/Title';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <PageContainer>
          <Row>
            <Col lg="4" md="12">
              <Title align="right">Contact me</Title>
            </Col>
            <Col lg="8" md="12">
              <ContactComponent></ContactComponent>
            </Col>
          </Row>
        </PageContainer>
      </div>
    );
  }
}
