import React from 'react';
import './BusinessList.css';
import {Business} from '../Business/Business.js';

export class BusinessList extends React.Component {
	render() {
		return (
			<div class="BusinessList">
  				{this.props.businesses.map((business) => 
					  <Business business = {business} />
				  )}
    		</div>
		)
	}
};



