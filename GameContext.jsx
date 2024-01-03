import React from 'react'

export default React.createContext({
   choice: '',
   result: false,
   total: 0,
   setChoice: () => null,
   setResult: () => null,
   setTotal: () => null
})