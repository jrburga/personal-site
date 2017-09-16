import React, { Component } from 'react';
import Table from '../components/table.js'

const axios = require('axios');
const csv = require('csv');

// const blockspring = require('blockspring');

let residents;

const header = ['Name', 'Kerberos']

axios.get('jrburga.scripts.mit.edu/index.py')
	.then(function (response) {
		console.log(response.data)
	 })
// $.ajax({
//   url:'https://spreadsheets.google.com/feeds/list/1cmpOlmerdjFQug6ID1YBEGQmfk7JNYpHlg8kl438qp0/1/public/basic?alt=json',
//   success: function(data){
//     console.log(data);
//   }
// });	

const resident_lists = [
{ 'year': 2018,
	'residents' : [
		['Jake Burga', 'jrburga'],
		['Duncan Wheeler', 'duncanw'],
		['Kate Weishaar', 'katew']
	]
}
]
class Residents extends Component {
	render() {
		return (
			<div>
				{resident_lists.map((res_list, index) => (
					<div key={index}>
						<h1>{res_list.year}</h1>
						<Table data={
							{
								header: header,
								body: res_list.residents}
						} />
					</div>
				))}
			</div>
		)
	}
}

export default Residents;