import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  
    const [result,setResult]=useState({});
    const API=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect(()=>{
        const result=fetch(API)
                    .then(val=>val.json())
                    .then(data=>setResult(data[currency]));
    },[currency]);
  
    return result;
}

export default useCurrencyInfo;