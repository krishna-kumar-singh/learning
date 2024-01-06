import React,{useId} from "react" 

function InputBox(
    {label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOption=[],
    selectCurrency='usd',
    currencyEnabled=false,
    amountEnabled=false,
    className=''}){
        const uniqueId=useId()
    return <div className={`bg-white p-3 rounded-lg flex text-sm ${className}`}>
        <div className="w-1/2">
            <label htmlFor={uniqueId} className="text-black/40 mb-3 inline-block">
                {label}
            </label>
            <input id={uniqueId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" value={amount} disabled={amountEnabled} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className=" flex w-1/2 flex-wrap text-right justify-end ">
            <p className=" w-full text-black mb-3">
                 Curreny Type
            </p>
            <select className=" rounded-lg px-1 py-1 outline-none bg-gray-100 cursor-pointer "
            value={selectCurrency} disabled={currencyEnabled} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
                {currencyOption.map((currency)=>( 
                <option key={currency} value={currency}>
                    {currency}
                </option>))}
            </select>
        </div>
    </div>
}

export  default InputBox