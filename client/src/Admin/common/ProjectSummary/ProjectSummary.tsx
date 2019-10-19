import React, { Fragment } from 'react';
import { projectData } from '../../../types/projectData';
import { Link } from 'react-router-dom';

import Subtitle from '../Subtitle/Subtitle';
import TextBox from '../TextBox/TextBox';
import Button from '../Button/Button';
import ActionBtn from '../ActionBtn/ActionBtn';
import Pill from '../Pill/Pill';
import UpdateOrder from '../../features/UpdateOrder/UpdateOrderContainer';

interface IProps {
  project: projectData;
  publish: Function;
  deleteProject: Function;
}

const ProjectSummary = (props: IProps) => {
  const { title, tags, short_desc, published, _id } = props.project;
  const { publish, deleteProject } = props;

  return (
    <Fragment>
      <Subtitle>
        <Fragment>
          {title}
          <Link to={`/admin/projects/edit/${_id}`}>
            <ActionBtn action={() => {}}></ActionBtn>
          </Link>
        </Fragment>
      </Subtitle>
      {tags.map((item, index) => (
        <Pill key={index}>{item}</Pill>
      ))}
      <br />
      <br />
      {published ? (
        <Pill type="success">published</Pill>
      ) : (
        <Pill type="danger">not published</Pill>
      )}
      <TextBox>{short_desc}</TextBox>
      <Button size="small" type="primary" action={() => publish(_id)}>
        publish
      </Button>
      <Button size="small" type="secondary" action={() => deleteProject(_id)}>
        Delete
      </Button>
      <UpdateOrder id={_id}></UpdateOrder>
      <hr style={{ margin: '30px 0', opacity: 0.2 }} />
    </Fragment>
  );
};

export default ProjectSummary;
