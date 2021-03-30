import React from 'react';
import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

export const ExportCsv = ({ csvdata, filename }) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';

	const exportToCsv = (csvData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<div>
			<Button variant='warning' onClick={(e) => exportToCsv(csvdata, filename)}>
				{' '}
				Export to CSV
			</Button>
		</div>
	);
};
