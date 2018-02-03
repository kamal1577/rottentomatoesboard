import React, { Component } from 'react';

class Comments extends React {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
        this.setState({value: event.target.value});
  }

  handleSubmit(event) {
        console.log('An essay was submitted: ' + this.state.value);
        event.preventDefault();
  }
  componentWillMount(){
    		fetch('/api/messages', {
    			headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
            }
    }).then((response) => response.json())
        .then((results) => {
            console.log(results)
        });
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      <div>
          <h1>Look at the console.log inside your componentWillMount()</h1>
      </div>
    </form>
    );

  }
}

export default Comments
