import React, { useContext, useRef, useState } from 'react'
import { colors } from '../../App';

export default function Engu() {
    const { theme, changetheme } = useContext(colors);

    const [img, setimg] = useState("");
  
    const inputref = useRef(null);
  
    const handleimgchange = (e) => {
      setimg(e.target.files[0]);
      console.log("first");
    };
    return (
        <div style={{ backgroundColor: `${theme}` }}>
            <div className="btn">
                <button onClick={() => changetheme("black")}>Dark</button>
                <button onClick={() => changetheme("white")}>Light</button>
                <button onClick={() => changetheme("pink")}>Pink</button>
            </div>
            <div className="circle">
                {img ? (<img style={{ height: "100px", borderRadius: "50px", width: "100px", border: "none" }} src={URL.createObjectURL(img)} alt="" />
                ) : (<img style={{
                    height: "100px", borderRadius: "50px", width: "100px", border: "none",
                }} src="https://previews.123rf.com/images/sarahdesign/sarahdesign1509/sarahdesign150901050/44517597-upload-button-upload-icon.jpg"
                    alt="" />
                )}
                <input ref={inputref} onChange={handleimgchange} type="file" id="myFile" name="filename" />
            </div>
            <br />
            <div className="userin">
                <input type="text" />
                <br />
                <button>Update</button>
            </div>
            <div className="theme"></div>
        </div>
    )
}