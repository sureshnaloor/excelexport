import React from 'react';
import { CSVLink } from 'react-csv';
import Button from 'react-bootstrap/Button';

export const ExportCsvLib = ({ csvdata, filename }) => {
	return (
		<div>
			<Button variant='warning'>
				{' '}
				<CSVLink data={csvdata} filename={filename}>
					Export
				</CSVLink>
			</Button>
		</div>
	);
};
