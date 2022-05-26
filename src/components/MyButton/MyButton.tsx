import React from 'react'

export const MyButton:React.FC = ()=>{

    const handleClick = (event:React.MouseEvent<HTMLButtonElement|HTMLAnchorElement>)=>{
        //event:React.MouseEvent - Event Type
        //<HTMLButtonElement|HTMLAnchorElement> - where in HTML action is used

        console.log('click')
    }

    return <>
        <button onClick={handleClick}>Click on me!</button>
    </>
}