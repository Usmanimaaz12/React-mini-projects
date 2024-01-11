import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // default is also object so that the code doesn't break
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;