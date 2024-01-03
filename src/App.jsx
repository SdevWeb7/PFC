import { Header } from "./components/Header.jsx";
import { Rules } from "./components/Rules.jsx";
import { useState } from "react";
import { Choice } from "./pages/Choice.jsx";
import { Result } from "./pages/Result.jsx";
import GameContext from "./GameContext.jsx";
import { ResultBonus } from "./pages/ResultBonus.jsx";
import { ChoiceBonus } from "./pages/ChoiceBonus.jsx";


function App() {

   const [rules, setRules] = useState(false)
   const [choice, setChoice] = useState('')
   const [result, setResult] = useState(false)
   const [total, setTotal] = useState(0)
   const [bonus, setBonus] = useState(false)

   const gameContext = {choice, result, total, setChoice, setResult, setTotal}

  return (
     <GameContext.Provider value={gameContext}>
     {bonus ?
     <>
        {rules && <Rules setRules={setRules} bonus={true} />}
        <Header total={total} />

        {result ? <ResultBonus choice={choice} /> : <ChoiceBonus setResult={setResult} setChoice={setChoice} />}

        <button onClick={() => setBonus(v => !v)} className={'border-2 border-[#FDFDFD]/60 py-2 px-6 text-[#FDFDFD]/80 tracking-[2px] rounded-[8px] cursor-pointer fixed bottom-4 left-4 hover:text-white z-0'}>NORMAL</button>
        <button onClick={() => setRules(true)} className={'border-2 border-[#FDFDFD]/60 py-2 px-6 text-[#FDFDFD]/80 tracking-[2px] rounded-[8px] cursor-pointer fixed bottom-4 right-4 hover:text-white z-0'}>RULES</button>
     </> :
     <>
      {rules && <Rules setRules={setRules} />}
      <Header total={total} />

      {result ? <Result choice={choice} /> : <Choice setResult={setResult} setChoice={setChoice} />}

      <button onClick={() => setBonus(v => !v)} className={'border-2 border-[#FDFDFD]/60 py-2 px-6 text-[#FDFDFD]/80 tracking-[2px] rounded-[8px] cursor-pointer fixed bottom-4 left-4 hover:text-white z-0'}>BONUS</button>
      <button onClick={() => setRules(true)} className={'border-2 border-[#FDFDFD]/60 py-2 px-6 text-[#FDFDFD]/80 tracking-[2px] rounded-[8px] cursor-pointer fixed bottom-4 right-4 hover:text-white z-0'}>RULES</button>
     </>}
     </GameContext.Provider>

  )
}

export default App
