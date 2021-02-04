import { useState, useEffect } from 'react'

export default function useCountries() {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)

    async function fetchData(){
        try{
            const result = await fetch("https://restcountries.eu/rest/v2/all")
            const data = await result.json()
            setCountries(data)
        } catch (error){
            setError(error)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])


    return [error, countries];
}
