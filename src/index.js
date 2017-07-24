import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
	super();
	this.state = {
		giphs: [],
		value: ''
	}
  }
  render() {
	return (
	  <section>
		<div className="hero is-primary topNav">
		  <nav className="nav">
			<div className="nav-left nav-item">
			  <h1 className="title is-3">Get Me Giphs</h1>
			</div>
		  </nav>
		</div>
		<form onSubmit={(e) => { e.preventDefault(); fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.state.value}`, { method: 'GET',
				}).then(res => res.json()).then(giph => { this.setState({ giphs: giph.data, }) }) }}>
			<input onChange={(event) => { this.setState({ value: event.target.value })}} placeholder="Search for giphs" className="border" />
			{this.state.value}
		</form>
		<section className="columns is-multiline" style={{ marginTop: '15px' }}>
			{ this.state.giphs.map((giph) => { return ( <img className="column is-one-quarter" src={giph.images.preview_webp.url} /> ) }) }
		</section>
	  </section>
	);
  }
}

ReactDOM.render(<App />, document.getElementById('main'));