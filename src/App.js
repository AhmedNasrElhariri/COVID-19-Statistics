import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components/index'
import styles from './App.module.css';
import {fetchData} from './api/index';
import image from './images/image.png';

class App extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data: {},
             country: ''
        }
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });  

    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData , country : country });
    }
    
    render(){
        const {data, country } = this.state;
        return(
            
            <div className={styles.container}>
                <img src={image} className={styles.image} alt="COVID-19"/>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;