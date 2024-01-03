import { Token } from "../components/Token";
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from "react";

export function ChoiceBonus () {

   const [popup, setPopup] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => {
         setPopup(false)
      }, 3000)

      return () => {
         clearTimeout(timer)
      }
   }, [])

   const variants = {
      hidden: {opacity: 0, scale: 3},
      visible: {opacity: 1, scale: 1}
   }

   return (
      <div className="max-w-[500px] min-h-[500px] mx-auto flex flex-col items-center container-choice-bonus">

         <Token value={'spock'} />

         <div className={'flex justify-between w-full -mt-4 mb-4'}>
            <Token value={'paper'} />
            <Token value={'scissors'} />
         </div>

         <AnimatePresence mode={'popLayout'}>
            {popup && <motion.h1 variants={variants} initial={'visible'} exit={'hidden'} className={'text-white/80 text-center text-6xl popup'}>MAKE YOUR CHOICE !</motion.h1>}
         </AnimatePresence>

         <div className={'flex justify-evenly w-full'}>
            <Token value={'rock'} />
            <Token value={'lizard'} />
         </div>

      </div>
   )
}