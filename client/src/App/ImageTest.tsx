import React, { Component } from 'react';

import { connect } from 'react-redux';

import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../actions/actionTypes';
import {
  projectsAddOneThunk,
  projectsEditOneThunk
} from '../actions/projectsActions';

interface IProps {
  addNew: Function;
  edit: Function;
}

class ImageTest extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  state = {
    pic: '',
    picData: '',
    loading: true
  };

  componentDidMount() {
    // this.image();
  }

  image = async () => {
    try {
      let response = await axios.get(
        'http://localhost:8000/api/project/5da0d8a92c00818688cff2c4'
      );

      console.log(response);

      const picc = response.data.response[0].pic;

      this.setState({
        pic: picc,
        loading: false
      });
      console.log('resp: ', picc);
    } catch (err) {
      console.log(err.message);
    }
  };

  addImage = (files: FileList | null) => {
    console.log(files);
    this.setState({
      picData: files
    });
  };

  addNewPro = (e: any) => {
    e.preventDefault();

    let formData = new FormData();

    formData.set('title', 'EDITED EDITED EDITED');
    formData.set('tags', 'testTag,testTag2,isItWokrng?');
    formData.set('technologies', 'tech1,tech2');
    formData.set('category', 'test category');
    formData.set('short_desc', 'test short decs');
    formData.set('desc', 'test decs Lorem lorem palorem');
    formData.set('link', 'google.com');
    formData.set('repo_link', 'repo_link.com');
    formData.set('picType', 'image/jpeg');

    console.log(this.state.picData[0]);

    // formData.append('pic', this.state.picData[0]);

    setTimeout(() => {
      console.log('adding new entry to the database');
      this.props.edit('5da0f736caa7cc0a2114d75f', formData, false);
    }, 500);
  };

  render() {
    const { loading, pic } = this.state;

    return (
      <div>
        <form onSubmit={this.addNewPro}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={e => {
              this.addImage(e.target.files);
            }}
          />
          <button type="submit"> asdd</button>
        </form>
      </div>
    );

    // if (loading) return <h3>LOADING</h3>;

    // return (
    //   <div>
    //     <img src={`data:image/jpeg;base64,${pic}`} alt="" />
    //   </div>
    // );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  addNew: (data: FormData) => dispatch(projectsAddOneThunk(data)),
  edit: (id: string, data: FormData, withPic: Boolean) =>
    dispatch(projectsEditOneThunk(id, data, withPic))
});

export default connect(
  null,
  mapDispatchToProps
)(ImageTest);
