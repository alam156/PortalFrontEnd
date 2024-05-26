import React, { useState } from 'react';
import styled from 'styled-components';
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import CoBotAvatar from "./CoBotAvatar";
const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;

const ChatHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const BotAvatarContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const ChatTitle = styled.h3`
  margin: 0;
`;

const ChatCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const ChatBody = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(255,255,255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const ChatIcon = styled.i`
  font-size: 24px;
`;

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChatButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ChatButton onClick={handleChatButtonClick}>
                <ChatIcon className="fas fa-comment-alt" />
            </ChatButton>
            {isOpen && (
                <ChatContainer>
                    <ChatHeader>

                        <ChatTitle></ChatTitle>
                        <BotAvatarContainer>
                            <CoBotAvatar />
                        </BotAvatarContainer>
                        <ChatCloseButton onClick={handleChatButtonClick}>&times;</ChatCloseButton>
                    </ChatHeader>
                    <ChatBody>
                        <Chatbot
                            config={config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                        />
                        {/* Add chat messages here */}
                    </ChatBody>
                    {/*<ChatInput type="text" placeholder="Type a message..." />*/}
                </ChatContainer>
            )}
        </>
    );
};


export default Chatbox;
