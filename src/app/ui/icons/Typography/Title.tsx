import { titles } from '@/config/font'
import React, { FC, ReactNode } from 'react'

interface TitleProps {
    children: ReactNode
}

export const Title: FC<TitleProps> = ({children}) => {
  return (
    <h1 className={`${titles.className} text-3xl text-center md:text-start`} >
        {children}
    </h1>
  )
}
