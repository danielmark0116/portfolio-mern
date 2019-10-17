import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../common/Title/Title';
import PostsList from '../features/PostsList/PostsListContainer';
import Button from '../common/Button/Button';
import SizedBox from '../common/SizedBox/SizedBox';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Title>Posts</Title>
        <Link to="/admin/posts/add">
          <Button>ADD NEW</Button>
        </Link>
        <SizedBox space={40}></SizedBox>
        <hr />
        <PostsList></PostsList>
      </div>
    );
  }
}
