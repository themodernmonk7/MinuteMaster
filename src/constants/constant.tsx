import React from 'react'

export const ClockIcon = () => {
    return (
        <svg stroke="currentColor" fill="#4A4A68" strokeWidth="0" viewBox="0 0 16 16" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path fill='#28a745' d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path></svg>
    )
}

export const QuestionCircle = () => {
    return (
        <svg stroke="currentColor" fill="#4A4A68" strokeWidth="0" viewBox="0 0 16 16" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path fill='#28a745' d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path></svg>
    )
}

export const AwardIcon = () => {
    return(
        <svg stroke="currentColor" fill="#4A4A68" strokeWidth="0" viewBox="0 0 16 16"  height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"></path><path fill='#28a745' d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg>
    )
}

export const detailList = [
    {
        id: 1, 
        title: '10 Mins', 
        description: `Keep in mind that it's a time bound quiz`,
        icon: <ClockIcon />
    },
    {
        id: 2, 
        title: '5 Questions', 
        description: `We believe that you will ace it!`,
        icon: <QuestionCircle/>
    },
    {
        id: 3, 
        title: '50% Passing Criteria', 
        description: `All the best! See you on the other side.`,
        icon: <AwardIcon/>
    },
]