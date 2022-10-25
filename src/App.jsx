import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const options = [
    {"name": "A"},
    {
        "name": "B",
        "childs": [
            {"name": "X"},
            {"name": "Y"}
        ]
    },
    {"name": "C"},
    {
        "name": "D",
        "childs": [
            {
                "name": "Z",
                "childs": [
                    {"name": "K"}
                ]
            }
        ]
    }
    
]

  return (
    <div className="App">
      
      {options.map(function(groupItem, key){ return (
            Object.keys(groupItem).map(function(item){return (
                // <YourComponent group={groupItem} item={item} />
                console.log(groupItem, ' ', item)
            );})
        );})}
        
    </div>
  )
}

export default App
