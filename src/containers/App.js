import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/errorBoundary';
import './App.css';
import {setSearchField, fetchRobots} from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onGetRobots: ()  => dispatch(fetchRobots())
  }
}
class App extends Component {



  componentDidMount() {
    this.props.onGetRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            {isPending ? <h1>Loading</h1> :
              <ErrorBoundary>
                <CardList robots={filteredRobots} />
              </ErrorBoundary> 
            }
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);