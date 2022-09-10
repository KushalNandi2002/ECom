import React from "react";
function Slide()
{
    return(
        <div className="slidepart">
            <div className="logoslider">
                <div className="slides">
                    <input type={"radio"} name="radio-btn" id="radio1"></input>
                    <input type={"radio"} name="radio-btn" id="radio2"></input>
                    <input type={"radio"} name="radio-btn" id="radio3"></input>
                    <input type={"radio"} name="radio-btn" id="radio4"></input>

                    <div className="slide first">
                        <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                    </div>
                    <div className="slide">
                        <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                    </div>
                    <div className="slide">
                        <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                    </div>
                    <div className="slide">
                        <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    <label for="radio4" className="manual-btn"></label>
                </div>
            </div>
        </div>
    );
    // var counter = 1;
    // setInterval(function({
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if(counter > 4)
    //     {
    //         counter = 1;
    //     }
    // },5000);
}
export default Slide;