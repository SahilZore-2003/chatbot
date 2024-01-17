import React, { useRef, useState } from 'react'
import "./Main.scss"
import { PiLinkSimpleHorizontal } from "react-icons/pi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdOutlineSend } from "react-icons/md";


const Main = ({ setShowNav }) => {
    const inputBox = useRef(null)
    const [userInput, setUserInput] = useState("");
    const [chat, setChat] = useState([]);

    const months = {
        0: "jan",
        1: "feb",
        2: "mar",
        3: "apr",
        4: "may",
        5: "jun",
        6: "july",
        7: "aug",
        8: "sep",
        9: "oct",
        10: "nov",
        11: "dec",
    }

    const getTimeAndDate = () => {
        const date = new Date();

        let amorpm = date.getHours() >= 12 ? "pm" : "am";
        let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const customDate = `${hour}:${date.getMinutes()} ${amorpm} ${date.getDate()} ${months[date.getMonth()]}`;
        return customDate;
    }

    const handleApi = () => {

        let msgObj = {
            roll: "user",
            message: userInput,
            time: getTimeAndDate()
        }

        setChat([...chat, msgObj]);

        setUserInput("")
        inputBox.current.focus()
    }

    const handleClick = () => {
        setShowNav(false)
    }
    return (
        <main onClick={handleClick}>

            <div className="main-message-container">
                {
                    chat.map((e, i) => (
                        <div className="message-container qustion" key={i}>
                            <div className="time">{e?.time}</div>
                            <div className="message">{e?.message}</div>
                        </div>
                    ))
                }
                <div className="input-box">
                    <div className='input'>
                        <PiLinkSimpleHorizontal className='links' />
                        <input type="text" ref={inputBox} value={userInput} onChange={(e) => setUserInput(e.target.value)} spellCheck={false} name="" id="" />
                        <MdOutlineKeyboardVoice />
                        <MdOutlineSend onClick={handleApi} className={userInput.length > 0 ? "send" : ""} />
                    </div>
                </div>
            </div>



        </main>
    )
}

export default Main
