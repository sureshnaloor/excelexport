
import React from 'react'
import {Header} from './components/Header'
import {Customers} from './components/Customers'
// import {ExportCsv} from './components/ExportCsv'
import {ExportCsvLib} from './components/ExportCsvLib'
import './App.css'

const App = () => {

    const customers = () => {
			let custs = [];
			for (let i = 0; i <= 25; i++) {
				custs.push({
					firstName: `first${i}`,
					lastName: `last${i}`,
					email: `abc${i}@gmail.com`,
					address: `000${i} street city, ST`,
					zipcode: `0000${i}`,
				});
			}
			return custs;
		};

    return (
        <div>
            {/* <h3> This is demo for excel export </h3> */}
            <Header />
            <Customers customers={customers()} />
			<ExportCsvLib csvdata={customers()} filename='testcustomers.xls' />
        </div>
    )
}

export default App
