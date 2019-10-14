import React, { Fragment } from 'react';

import FlexGrid from '../../../common/FlexGrid/FlexGrid';
import SizedBox from '../../../common/SizedBox/SizedBox';
import JumboPic from '../../../common/JumboPic/JumboPic';
import Tag from '../../../common/Tag/Tag';
import Title from '../../../common/Title/Title';
import Point from '../../../common/Point/Point';
import SocialIcon from '../../../common/SocialIcon/SocialIcon';
import Separator from '../../../common/Separator/Separator';
import Text from '../../../common/Text/Text';

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
    <Fragment>
      <JumboPic picString={pic}></JumboPic>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tags && tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
      </div>

      <SizedBox />
      <Title align="left">{title}</Title>
      <Point title={'stack'}>
        <Fragment>
          {technologies &&
            technologies.map((x, i) => (
              <span key={i}>
                {x} {`${i < technologies.length - 1 ? ' / ' : ''}`}
              </span>
            ))}
        </Fragment>
      </Point>
      <Point title="check source on">
        <a href={repo_link && repo_link} target="_blank">
          <SocialIcon renderAnimation={false} icon="github" />
        </a>
      </Point>
      <Point title="live preview">
        <span>
          <a href={link && link} target="_blank">
            link
          </a>
        </span>
      </Point>
      <Separator />
      <Text htmlParse={true} html={desc && desc} />
      <SizedBox size={80} />
    </Fragment>
  );
};

export default WorkDetails;
