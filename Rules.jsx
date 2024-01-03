import { IconClose } from "../svg/IconClose.jsx";

export function Rules ({setRules, bonus = false}) {

   return (
      <div className={'fixed top-0 right-0 left-0 bottom-0 bg-black/80 backdrop-blur-[12px] flex items-center justify-center z-10'}>

         <div className={'flex flex-col justify-around h-full items-center'}>
            <h1 className={'text-center text-6xl text-white/60 tracking-[2px]'}>RULES</h1>

            <img src={`/public/images/image-rules${bonus ? '-bonus': ''}.svg`} alt="a" />

            <IconClose onClick={() => setRules(false)} className={'cursor-pointer text-gray-400 hover:text-white'} />
         </div>
      </div>
   )
}