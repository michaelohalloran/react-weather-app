import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log(this.state.term);
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});

    }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input 
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            type="text" 
            onChange={this.onChange}
            value={this.state.term}
        />
        <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// const mapStateToProps = state => ({
//     weather: state.weather
// });

export default connect(null, {fetchWeather})(SearchBar);

