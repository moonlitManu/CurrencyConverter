import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_4TjNA3RhNnmRSvWO2oyHdb2XxvHFeyGD5tRqR7Hu")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching data:", error)); // Handle errors
    }, []); // Empty dependency array to run only once
    console.log(data)

    return data;
}

export default useCurrencyInfo;
