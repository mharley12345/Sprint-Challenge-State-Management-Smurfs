import React, { useEffect } from 'react';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Smurf from './Smurf'

function SmurfsList({ state, getData}) {
	useEffect(() => {
		getData()
	}, [getData])

	// Display a loading Screen
	if(state.isFetching){
		return <h1>Loading...</h1>
	}

	// Show the data once it has been fetched
	return (
		<section>
			<h2>The Smurf Village!</h2>
			<div>
				{state.smurfs.map( smurf => {
					return <Smurf key={uuid()} smurf={smurf}/>
				})}
			</div>
		</section>
	)
}

const mapStateToProps = state => {
	return {
		state
	}
}
export default connect(mapStateToProps, {getData})(SmurfsList);