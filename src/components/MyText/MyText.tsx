import React, { useState } from 'react'

export const MyText: React.FC = () => {
    const [value, setValue] = useState<string>('Text')

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setValue('Clicked Text')
        console.log(event.target)
    }

    const handleChange = () => {
        console.log('change')
    }

    return (
        <>
            <h4>{value}</h4>
            <input onClick={handleClick} type="text" onChange={handleChange} />
        </>
    )
}
