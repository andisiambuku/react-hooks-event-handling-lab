// Code Keypad Component Here

function Keypad (){
    function keyPadChange(event){
        console.log("Entering password..." );
    }
    return (
        <div>
            <input
            type="password"
            name="password"
            onChange={keyPadChange}
            placeholder="Enter Password"
            />
            
        </div>
    )
}

export default Keypad;