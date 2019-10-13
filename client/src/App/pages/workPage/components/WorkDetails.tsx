import React from 'react';
import { projectDataElements } from '../../../../types/projectData';

interface IProps {
  projectData: projectDataElements;
}

const WorkDetails = (props: IProps) => {
  const {
    title,
    tags,
    category,
    desc,
    link,
    repo_link,
    technologies,
    pic
  } = props.projectData;

  return (
    <div>
      <h3>{title}</h3>
      <br />
      work details
      <br />
      <p>{desc}</p>
      <p>{desc}</p>
      <p>{JSON.stringify(tags)}</p>
      <p>{JSON.stringify(technologies)}</p>
    </div>
  );
};

export default WorkDetails;
