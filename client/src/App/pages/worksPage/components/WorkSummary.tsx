import React from 'react';

import FlexItem from '../../../common/FlexGrid/FlexItem';
import PresBox from '../../../common/PresentationalBox/PresentationalBox';

import { projectData } from '../../../../types/projectData';

interface IProps {
  project: projectData;
  index: number;
}

const WorkSummary = (props: IProps) => {
  const { project, index } = props;

  return (
    <FlexItem itemsPerRow={3}>
      <PresBox
        projectTitle={project.title}
        projectShortDesc={project.short_desc}
        projectPic={project.pic}
        projectId={project._id}
        index={index}
      ></PresBox>
    </FlexItem>
  );
};

export default WorkSummary;
