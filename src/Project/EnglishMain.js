import React from 'react'
import Engn from './English/Engn'
import Engs from './English/Engs'
import Engu from './English/Engu'

export default function EnglishMain() {
    return (
        <>
            <Engn />
            <div className="flex">
                <Engs />
                <Engu />
            </div>
        </>
    )
}