
export function Header ({total}) {

   return (
      <div className={'container mx-auto mt-8 mb-12 600:mb-12 p-4 rounded-[6px] border-2 border-custom1 flex justify-between max-w-[700px]'}>

         <img src="/public/images/logo.svg" alt="a" />
         <div className={'bg-[#FDFDFD]/95 p-4 rounded-[6px] px-8'}>
            <p className={'text-custom3 text-center text-xs font-bold tracking-[1.5px]'}>SCORE</p>
            <p className={'text-custom2 text-6xl font-bold text-center'}>{total}</p>
         </div>
      </div>
   )
}