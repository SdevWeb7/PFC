import { useContext } from "react";
import GameContext from "../GameContext.jsx";

export function Token ({value, resultMode = false}) {

   const { setChoice, setResult } = useContext(GameContext)

   const handleChoice = (value) => {
      setChoice(value)
      setResult(true)
   }

   return (
      resultMode ?
         <div className={`rounded-full ${value}`}>
            <div className={'bg-[#E4E4E4] p-16 rounded-full'}></div>
         </div>:
         <div onClick={() => handleChoice(value)} className={`rounded-full cursor-pointer hover:scale-[105%] transition-all xs:scale-[0.8] ${value}`}>
            <div className={'bg-[#E4E4E4] p-16 rounded-full'}></div>
         </div>
   )
}