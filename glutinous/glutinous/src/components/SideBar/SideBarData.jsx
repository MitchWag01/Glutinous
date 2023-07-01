import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IOIcons from "react-icons/io"


export const SidebarData =[
    {
        title: 'Home',
        path:'../../App',
        icon: <AiIcons.AiFillHome/>,
        ClassName:'side-text'
    },
    {
        title: 'Contact',
        path:'/Contact',
        icon: <AiIcons.AiFillPhone/>,
        ClassName:'side-text'
    },
    {
        title: 'Scan',
        path:'/Scan',
        icon: <AiIcons.AiFillCamera/>,
        ClassName:'side-text'
    },
    
]

