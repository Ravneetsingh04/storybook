const numbers = [1,2,3,4,5,6,7,8,9,"❤",0,"⌫"];

const NumberPad = ({ onButtonClick }) => {

    return(

        <div className="keypad">

            {
                numbers.map((item,index)=>(
                    <button key={index} onClick={() => onButtonClick(item.toString())}
>
                        {item}
                    </button>
                ))
            }

        </div>

    )

}

export default NumberPad;