import React from 'react'
import "./Section.scss"
import { FiMessageSquare } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuDelete } from "react-icons/lu";
const Section = () => {

    const prompts = [
        "Impact of ai on user experience",
        "Voice user experience",
        "Data driven Ux",
        // "Chatbot and conversional ai",
        // "Visual Recognation in ai",
        // "Ethical Ai Design"
    ]

    return (
        <section>
            <h1>Text Genrator</h1>
            <div className="recent-prompt">
                {
                    prompts.map((e, i) => (<div className="prompt" key={i}>
                        <FiMessageSquare />
                        <p>{e}</p>
                    </div>))
                }
            </div>
            <div className="button-container">
                <button><IoAddCircleOutline />New Chat</button>
                <button><LuDelete />Clear Conversation</button>
            </div>
        </section>
    )
}

export default Section
