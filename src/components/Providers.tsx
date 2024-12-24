'user client'

import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  return <>
    <Toaster position = 'bottom-left' reverseOrder = {false}/>
      {children}
  </>
}

export default Providers