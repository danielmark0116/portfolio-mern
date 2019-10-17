import React, { useEffect } from 'react';
import { stateToProps, dispatchToProps } from './PostsListContainer';

import PostSummary from '../../common/PostSummary/PostSummary';
import Loader from '../../common/Loader/Loader';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const PostsList = (props: Props) => {
  const { getAll, posts, deletePost } = props;
  const { pending, success, error } = props.requestData;

  useEffect(() => {
    getAll();
  }, ['']);

  if (pending) return <Loader></Loader>;
  if (error) return <p>Error</p>;
  if (!pending && success && !error && posts.length === 0)
    return <p>No posts...</p>;
  if (!pending && success && !error)
    return (
      <div>
        {posts.map((post, index) => (
          <PostSummary
            deletePost={deletePost}
            post={post}
            key={index}
          ></PostSummary>
        ))}
      </div>
    );
  return <p>No posts...</p>;
};

export default PostsList;
