import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertCurrency,setConvertCurrency]=useState(0)
  const CurrencyInfo =useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)
  const swap =()=> {
    setFrom(to)
    setTo(from)
    setAmount(convertCurrency)
    setConvertCurrency(amount)
  }
  const convertedAmount=()=>{
    setConvertCurrency(amount * CurrencyInfo[to])
  }
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=612x612&w=0&k=20&c=XRsOnrdHQIoqaolR00ganJACUpCxD4JCELt3N3Mm3tk=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convertedAmount()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            selectCurrency={from}
                            currencyOption={options}
                            onCurrencyChange={(currency)=> setFrom(currency)}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button onClick={swap}
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertCurrency}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountEnabled
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
