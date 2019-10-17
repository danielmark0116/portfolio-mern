import React, { useEffect } from 'react';
import { stateToProps, dispatchToProps } from './PostsListContainer';

import PostSummary from '../../common/PostSummary/PostSummary';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const PostsList = (props: Props) => {
  const { getAll, posts } = props;
  const { pending, success, error } = props.requestData;

  useEffect(() => {
    getAll();
  }, ['']);

  if (pending) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        {posts.map((post, index) => (
          <PostSummary post={post} key={index}></PostSummary>
        ))}
      </div>
    );
  }
};

export default PostsList;
