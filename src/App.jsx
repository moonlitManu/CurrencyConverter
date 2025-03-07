import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
import InputBox from "./components/InputBox.jsx";

function App() {
  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo();

  // Convert amount when currency or value changes
  useEffect(() => {
    if (currencyInfo?.data && currencyInfo.data[from] && currencyInfo.data[to]) {
      const conversionRate = currencyInfo.data[to] / currencyInfo.data[from];
      setConvertedAmount(Math.round(amount * conversionRate * 100) / 100);
    }
  }, [amount, from, to, currencyInfo]);  // Added "to" in dependencies
  

  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center h-screen p-4">
        {/* Pass the setAmount function to update the state */}
        <InputBox label={from} amount={amount} onAmountChange={setAmount} onCurrencyChange={setFrom} currencyOptions={Object.keys(currencyInfo.data || {})}/>
        <InputBox label={to} amount={convertedAmount} onCurrencyChange={setTo}  currencyOptions={Object.keys(currencyInfo.data || {})}/>
      </div>
    </>
  );
}

export default App;
