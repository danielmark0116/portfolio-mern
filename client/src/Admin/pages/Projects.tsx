import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../common/Title/Title';
import ProjectsList from '../features/ProjectsList/ProjectsListContainer';
import Button from '../common/Button/Button';
import SizedBox from '../common/SizedBox/SizedBox';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Title>Projects</Title>
        <Link to="/admin/projects/add">
          <Button>ADD NEW</Button>
        </Link>
        <SizedBox space={40}></SizedBox>
        <hr />
        <ProjectsList></ProjectsList>
      </div>
    );
  }
}
