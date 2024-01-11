import React from 'react'
import Hinn from './Hindi/Hinn'
import Hins from './Hindi/Hins'
import Hinu from './Hindi/Hinu'

export default function HindiMain() {
  return (
    <>
      <Hinn />
      <div className="flex">
        <Hins />
        <Hinu />
      </div>
      
    </>
  )
}