import React, { Fragment } from 'react';

import WorkSummary from './WorkSummary';

import { projectData } from '../../../../types/projectData';

interface IProps {
  projects: projectData[];
}

const Works = (props: IProps) => {
  const { projects } = props;

  return (
    <Fragment>
      {projects.map((project, index) => (
        <WorkSummary index={index + 1} project={project} key={index} />
      ))}
    </Fragment>
  );
};

export default Works;
