import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function NumBtn(props) {


  return <div onClick={() => {
    props.setCurrNum(props.currNum * 10 + props.value)
    props.setShowTotal(false)
  }} className="button">
    <h3>{props.value}</h3>
  </div>
}

function App() {

  const [total, setTotal] = useState(0);
  const [currNum, setCurrNum] = useState(0);
  const [showTotal, setShowTotal] = useState(true);

  return <div>
    <div style={{height: "100px", display: "flex", justifyContent: "flex-end", alignItems: "center", width: "30%", fontSize: "36px"}}>{showTotal ? total : currNum}</div>
    <div style={{display: "flex", flexWrap: "wrap", width: "30%", justifyContent: "center"}}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => {
      return <NumBtn key={key} value={key} currNum={currNum} setCurrNum={setCurrNum} setShowTotal={setShowTotal}/>
    })}
    < div className='button' onClick={() => {
      setTotal(total + currNum)
      setCurrNum(0)
      setShowTotal(true)
    }}>+</div>
    < div className='button' onClick={() => {
      setTotal(total + currNum)
      setCurrNum(0)
      setShowTotal(true)
    }} style={{backgroundColor: "orange"}}>=</div>
    < div className='button' onClick={() => {
      setTotal(0)
      setCurrNum(0)
      setShowTotal(false)
    }} style={{width: "100%"}}>Clear</div>

  </div>
  
  </div>
}

export default App;
