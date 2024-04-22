import React from "react";

import BotAvatar from "./icons/bot.svg";

const CoBotAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none", width: '40px', height: '40px' }}
            >
                <img alt="BotAvatar" src={BotAvatar} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
};

export default CoBotAvatar;