import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    // After mapStateToProps, now props is:
    // this.props === { songs: state.songs }
    console.log(this.props);

    return <div>SongList</div>;
  }
}

// @ mapStateToProps or getMyState
// Take state object, essentially all of the data that's inside of Redux store
// and run some calculations on it or some computation that's going to cause
// that data to eventually show up as props inside this Component
// This function is going to get called with all of the state inside of our
// Redux store
// i.e It's always going to get first argument of state
// And is always going to return an object that is going to show up as props
// inside of our Component
const mapStateToProps = (state) => {
  // console.log(state);
  // return state;

  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
