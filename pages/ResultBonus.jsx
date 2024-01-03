import { Token } from "../components/Token.jsx";
import { useContext, useEffect, useState } from "react";
import GameContext from "../GameContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

export function ResultBonus () {
   const { setTotal, choice, setResult } = useContext(GameContext)
   const [houseResult, setHouseResult] = useState('')
   const [verdict, setVerdict] = useState('')
   const listChoice = ['paper', 'scissors', 'rock', 'spock', 'lizard']

   useEffect(() => {
      setTimeout(() => {
         handleResult()
      }, 2000)
   }, [])

   useEffect(() => {
      if (houseResult.length > 0) {
         if (houseResult === choice) {
            setVerdict('draw')
         } else {
            switch (choice) {
               case 'paper':
                  if (houseResult === 'scissors' || houseResult === 'lizard') {
                     setVerdict('lose')
                  } else {
                     setVerdict('win')
                     setTotal(t => t + 1)
                  }
                  break
               case 'scissors':
                  if (houseResult === 'paper' || houseResult === 'lizard') {
                     setVerdict('win')
                     setTotal(t => t + 1)
                  } else {
                     setVerdict('lose')
                  }
                  break
               case 'rock':
                  if (houseResult === 'paper' || houseResult === 'spock') {
                     setVerdict('lose')
                  } else {
                     setVerdict('win')
                     setTotal(t => t + 1)
                  }
                  break
               case 'spock':
                  if (houseResult === 'lizard' || houseResult === 'paper') {
                     setVerdict('lose')
                  } else {
                     setVerdict('win')
                     setTotal(t => t + 1)
                  }
                  break
               case 'lizard':
                  if (houseResult === 'scissors' || houseResult === 'rock') {
                     setVerdict('lose')
                  } else {
                     setVerdict('win')
                     setTotal(t => t + 1)
                  }
                  break
               default:
                  break
            }
         }
      }
   }, [houseResult])

   const handleResult = () => {
      setHouseResult(listChoice[Math.floor(Math.random() * 5)])
   }

   return (
      <div className="flex items-center flex-wrap justify-evenly mt-24 600:mt-0">

         <div className={'600:scale-[85%] 600:max-w-[180px] relative'}>

            {verdict === 'win' && <div className={'absolute -top-11 -left-28 -right-28 -bottom-28 bg-white/70 rounded-full win-gradient opacity-[.8]'} style={{zIndex: -1}}></div>}

            <h1 className={'text-3xl text-center text-white/75 mb-8'}>YOU PICKED</h1>
            <Token value={choice} resultMode={true} />
         </div>

         <AnimatePresence>
         {verdict.length > 0 ?
         <motion.div initial={{transform: 'scale(2)'}} exit={{transform: 'scale(2)'}} animate={{transform: 'scale(1)'}} className={'flex flex-col justify-center 600:order-first 600:w-[450px] 600:text-center 600:mb-8'}>
            <h1 className={'text-5xl text-white mb-8 tracking-[2px]'}>
               {verdict === 'draw' && 'DRAW'}
               {verdict === 'win' && 'YOU WIN'}
               {verdict === 'lose' && 'YOU LOSE'}
            </h1>
            <button onClick={() => setResult(false)} className={'text-custom1 text-small hover:text-white bg-white hover:bg-custom3 py-2 rounded-[8px]'}>PLAY AGAIN</button>
         </motion.div> :
            <div className={'600:order-first 600:text-center 600:mb-8 flex justify-center 600:w-[400px]'}>
               <img className={'rounded-full'} src="/public/images/sablier.gif" alt="a" />
            </div>}
         </AnimatePresence>

         <div className={'flex flex-col items-center 600:scale-[85%] 600:max-w-[180px] relative'}>

            {verdict === 'lose' && <div className={'absolute -top-11 -left-28 -right-28 -bottom-28 bg-white/70 rounded-full win-gradient opacity-[.8]'} style={{zIndex: -1}}></div>}

            <h1 className={'text-3xl text-center text-white/75 mb-8'}>THE HOUSE PICKED</h1>

            {verdict.length > 0 ?
               <Token value={houseResult} resultMode={true} /> :
               <div className={'h-[167px] w-[167px] flex items-center justify-center'}>
                  <div className={'w-[80%] h-[80%] bg-[#172240] rounded-full'}></div>
               </div>}
         </div>


      </div>
   )
}