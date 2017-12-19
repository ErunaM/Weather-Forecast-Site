import React, { Component } from 'react';

export default class SearchBar extends Component{
  render(){
     // bootstrap documentation
    return (
      <form className="input-group">
        <input />
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}
