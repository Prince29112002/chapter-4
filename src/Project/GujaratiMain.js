import React from 'react'
import Guju from './Gujarati/Guju'
import Gujs from './Gujarati/Gujs'
import Gujn from './Gujarati/Gujn'

const GujaratiMain = () => {
    return (
        <>
            <Gujn />
            <div className="flex">
                <Gujs />
                <Guju />
            </div>

        </>
    )
}

export default GujaratiMain