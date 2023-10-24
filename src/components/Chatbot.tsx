"use client"
import React from 'react'
import { BubbleChat } from 'flowise-embed-react'

function Chatbot() {
  return (
    <BubbleChat
            chatflowid="f345a323-24e5-430b-a343-7f92f3a78a19"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#FFF3D6",
                    right: 20,
                    bottom: 20,
                    size: "large",
                    iconColor: "white",
                    customIconSrc: "./icon.png",
                },
                chatWindow: {
                    welcomeMessage: "welcome to Quran GPT!  I'll love to share quranic knowledge.",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#ffffff",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "./icon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Type your question",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    }
                }
            }}
        />
  )
}

export default Chatbot