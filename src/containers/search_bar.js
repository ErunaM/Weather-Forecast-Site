import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this); // binds the components this to the function
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {term: ''};
  }

  //if passing call backs around and using context e.g "this" always bind it
  // in constructor
  onInputChange(event) {

    this.setState({ term: event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    //We need to go fetch the Weather data
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); // clears the search bar after use
  }
  render(){

     // bootstrap documentation
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forcast in your favorite citys!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({ fetchWeather },dispatch); //gives us access to this.props.fetchWeather
}
//null because we dont care about the state here
export default connect(null,mapDispatchToProps)(SearchBar);
