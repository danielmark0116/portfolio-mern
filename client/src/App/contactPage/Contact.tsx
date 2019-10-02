import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import PageContainer from '../common/PageContainer/PageContainer';

import Title from '../common/Title/Title';
import Subtitle from '../common/Subtitle/Subtitle';
import Text from '../common/Text/Text';

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
              <Text>Call me</Text>
              <Subtitle>967 276 456</Subtitle>
              <Text>Email me</Text>
              <Subtitle>mail@mail.com</Subtitle>
              <Text>Or find me here</Text>
              <Subtitle>mail@mail.com</Subtitle>
            </Col>
          </Row>
        </PageContainer>
      </div>
    );
  }
}
