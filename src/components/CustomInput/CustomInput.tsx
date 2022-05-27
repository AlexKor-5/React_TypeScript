import React from 'react'

export const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        console.log(event.target.value)
    }

    const handleClick: React.MouseEventHandler<HTMLInputElement> = event => {
        console.log(event)
    }

    return <input type="text" {...props} onChange={handleChange} onClick={handleClick} />
}
