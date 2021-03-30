import React from 'react';
import Table from 'react-bootstrap/Table';

export const Customers = ({ customers }) => {
	const tableHeader = (
		<thead className='bgvi'>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Address</th>
				<th>Zipcode</th>
			</tr>
		</thead>
	);

	return (
		<Table striped bordered hover>
			{tableHeader}
			<tbody>
				{customers.map((customer, index) => (
					<tr key={index} className='even'>
						<td> {index + 1} </td>
						<td>{customer.firstName}</td>
						<td>{customer.lastName}</td>
						<td>{customer.email}</td>
						<td>{customer.address}</td>
						<td>{customer.zipcode}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
