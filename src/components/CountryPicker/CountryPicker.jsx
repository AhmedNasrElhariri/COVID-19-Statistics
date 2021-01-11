import React ,{useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/index'
import styles from './CountryPicker.module.css'


const CounteryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        };
        fetchApi();
    },[setCountries]);
        return(
               <FormControl className={styles.formControl}>
                   <NativeSelect defaultValue="" onChange={ e => handleCountryChange(e.target.value)}>
                        <option value="Global">Global</option>
                        {countries.map((country,i) => <option value={country} key={i}>{country}</option> )}
                   </NativeSelect>
               </FormControl>
           
        )
}

export default CounteryPicker;