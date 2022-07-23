import React, {useState} from 'react'; 

const Form = (props)=> {
    //getter and setter with en empty array that we will add into
    const [colorArr, setColorArr] = useState([]); 
    //need another state to store the color value that will go into the array
    const [color, setColor] = useState(''); 

    const submitHandler =(e) =>{
        e.preventDefault(); 
        setColorArr([...colorArr, color]);

    }

    return(
        <div>
            <form onSubmit ={ submitHandler } className='d-flex justify-content-center'>
                <div>
                    <label>Color</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <input type="submit" value="Add"/>
            </form>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {/* always need curly bracketse when typing in javascript, too looop through an array*/}
                {
                    colorArr.map((color)=>{
                        return <div style ={{height: "50px", width: "50px", backgroundColor: color}}></div>
                    })
                }
            </div>
        </div>
    ); 
}
export default Form; 