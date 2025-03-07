function InputBox({ label, amount, onAmountChange, disabled = false, currencyOptions = [], onCurrencyChange }) {
    return (
      <div className="m-2">
        <label className="text-white m-2 font-bold">{label}</label>
        <input
          type="number"
          value={amount}
          min="0"
          onChange={(e) => onAmountChange && onAmountChange(parseFloat(e.target.value) || 0)}
          disabled={disabled}
          className="p-2 rounded border-2 border-gray-300 text-black bg-white"
        />
        <select onChange={(e) => onCurrencyChange(e.target.value)} className="p-2 ml-2 border-2 border-gray-300 bg-white">
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    );
}

export default InputBox;
