import React, { Component } from 'react'

export class Beers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: []
		}
	}

	fetchData() {
		fetch ('https://api.punkapi.com/v2/beers')
			.then( response => response.json() )
			.then( data => data.map( beer => ({
				name: beer.name,
				tagline: beer.tagline,
				abv: beer.abv,
				ibu: beer.ibu,
			})))
			.then( beers => this.setState({
				beers,
			}))
			.catch( error => console.log("parsing failed", error) )
	}

	componentDidMount() {
		this.fetchData();
	}

	render() { return (

		<ul className="beers-list">
			{ this.state.beers.map(( beer ) => (

				<li key={beer.name} className="beer-card m-t">
					<div className="beer-details">
						<h5 className="name-line">{beer.name}</h5>
						<span className="tagline-line">Tagline: {beer.tagline}</span><br/>
						<span className="abv-line">ABV: {beer.abv}</span><br/>
						<span className="ibu-line">IBU: {beer.ibu}</span><br/>
					</div>
					<button className="btn m-t" onclick="likeClicked()">Like</button>
				</li>

			))}
		</ul>

	)}
}

export default Beers;