import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted To Upper Case', 'success')
    }

        const handleLoClick = () =>{
            let newText = text.toLocaleLowerCase()
            setText(newText);
            props.showAlert('Converted To Lower Case', 'success')
    }

        const handleClear = () =>{
            setText("")
            props.showAlert('Text Cleared', 'success')
        }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState("Wel Come To My World")
    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'red':'black'}}  >
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'cyan':'white', color : props.mode==='dark'?'red':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div> 
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button> 
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClear}> Clear Text</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'red':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split (/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split (" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
                <h2 className='cotainer my-3'>Preview</h2>
                <p>{text.length>0?text: "Enter Your Text Here"}</p>
            </div>
        </>
    )
}