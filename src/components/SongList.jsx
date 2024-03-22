import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // After mapStateToProps, now props is:
    // this.props === { songs: state.songs }
    // console.log(this.props);
    // console.log(this.props.songs)
    // console.log(this.props);

    return <div className='ui divided list'>{this.renderList()}</div>;
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

// Everytime we click on that select button, this function should rerun and
// is going to be called with a new state object a second time, third time,
// or fourth time
// Anytime we click the button, we should see new console.log and we should
// see the new selected song printed out inside that state object
const mapStateToProps = (state) => {
  // console.log(state);
  // return state;
  console.log(state);

  return { songs: state.songs };
};

// Second argument to connect function is an action creator
// The connect function is going to take that selectSong action creator
// and pass it into our Component as a prop

/* The reason we aren't directly calling action creators inside our component
 * above but instead,
 * passing it as a second argumnet to the connect function is:
 * */

// Redux is not Magic!!
// * Redux does not automatically detect action creators begin called.
// * Redux does not automatically detect a function returning an object that
// is an 'action'.

// The connect function does special operation on the second argument
// i.e functions inside that object
// It looks at all the functions inside this object and
// It essentially wraps them up in another JS function
// When we call new JS function, connect function is automatically going
// to call our action creator, it's going to automatically take the action
// that gets returned and its going to automatically call the dispatch()
// function for us.
//
// So by passing our action creator into that connect function, whenver we call
// props.actionCreator or the action creator that gets added to our props object,
// the connect function is going to automatically take the action that gets
// returned and throw it into the dispatch function for us!
//
// So all that is happening behind the scenes and we don't really have to think
// about it when we're making use of the connect function!

// So antime we ever want to call the action creator from the component,
// We're always going to pass it into this connect function as opposed to just
// arbitrarily calling it directly inside the component!
export default connect(mapStateToProps, { selectSong })(SongList);
