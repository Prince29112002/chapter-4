import React, { useContext, useState } from 'react'
import GujaratiMain from './GujaratiMain'
import HindiMain from './HindiMain'
import EnglishMain from './EnglishMain'

const Main = () => {

  const [data, setData] = useState("English")

  const handal = (val) => {
    setData(val)
  }

  return (
    <>
      <div className="lang">
        <select id="" onClick={(e) => handal(e.target.value)}>
          <option value="English">English</option>
          <option value="ગુજરાતી">ગુજરાતી</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {data === "English" ?
        <>
          <EnglishMain />
        </> : data === "ગુજરાતી" ? <><GujaratiMain /></>
          : <><HindiMain /></>}
    </>
  )
}

export default Main