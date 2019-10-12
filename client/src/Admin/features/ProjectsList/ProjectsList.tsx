import React, { useEffect } from 'react';
import { stateToProps, dispatchToProps } from './ProjectsListContainer';

import ProjectSummary from '../../common/ProjectSummary/ProjectSummary';

type Props = stateToProps & dispatchToProps;

const ProjectsList = (props: Props) => {
  const { projects, getAll, publish, deleteProject } = props;
  const { pending, error, success } = props.requestData;

  useEffect(() => {
    getAll();
  }, ['']);

  const handlePublish = (id: string) => {
    publish(id);
  };

  const handleDelte = (id: string) => {
    deleteProject(id);
  };

  return (
    <div>
      {projects.map((item, index) => (
        <ProjectSummary
          publish={handlePublish}
          deleteProject={handleDelte}
          key={index}
          project={item}
        ></ProjectSummary>
      ))}
    </div>
  );
};

export default ProjectsList;
