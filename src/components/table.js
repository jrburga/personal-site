import React, { Component } from 'react';

class Table extends Component {
	constructor(props) {
		super(props)
		this.header = this.props.data.header;
		this.body   = this.props.data.body;
	}
	render() {
		const header = this.header.map((item, index) => 
			<th key={index}>{item}</th>
		)
		const body = this.body.map((row, index) => 
			<Row key={index} items={row} />
		)
		return (
			<table className='table'>
				<TableHeader headers={header}/>
				<TableBody rows={body}/>
			</table>
		)
	}
}

function TableHeader(props) {
	return (
		<thead>
			<tr>{props.headers}</tr>
		</thead>
	)
}

function TableBody(props) {
	return (
		<tbody>
			{props.rows}
		</tbody>
	)
}

function Row(props) {
	return (
		<tr>
			{props.items.map((item, index) => 
				<td key={index}>{item}</td>
			)}
		</tr>
	)
}

export default Table;