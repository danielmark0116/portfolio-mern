import React, { Fragment } from 'react';
import { postData } from '../../../types/postData';
import { Link } from 'react-router-dom';

import Subtitle from '../Subtitle/Subtitle';
import TextBox from '../TextBox/TextBox';
import Button from '../Button/Button';
import ActionBtn from '../ActionBtn/ActionBtn';
import Pill from '../Pill/Pill';

interface IProps {
  post: postData;
  deletePost: Function;
}

const PostSummary = (props: IProps) => {
  const { title, author, id, content, createdAt, updatedAt } = props.post;
  const { deletePost } = props;

  return (
    <Fragment>
      <Subtitle>
        <Fragment>
          {title}
          <Link to={`/admin/posts/edit/${id}`}>
            <ActionBtn action={() => {}}></ActionBtn>
          </Link>
        </Fragment>
      </Subtitle>
      <Pill>{`Added: ${new Date(createdAt).toLocaleString()}`}</Pill>
      <Pill>{`Edited: ${new Date(updatedAt).toLocaleString()}`}</Pill>
      <br />
      <br />
      <Pill type="success">{`By: ${author}`}</Pill>
      <TextBox htmlParse={true} html={content}></TextBox>
      <Button type="secondary" size="small" action={() => deletePost(id)}>
        Delete
      </Button>
      <hr style={{ margin: '30px 0', opacity: 0.2 }} />
    </Fragment>
  );
};

export default PostSummary;
