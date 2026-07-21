const PasscodeDisplay = ({ code }) => {

    return (
        <div className="display">
            {[0, 1, 2, 3].map((index) => (
                <div className="box" key={index}>
                    {code[index] && <div className="passcode-dot"></div>}
                </div>
            ))}
        </div>
    );
};

export default PasscodeDisplay;