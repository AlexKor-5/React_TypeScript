import React from 'react'
import { MyButton } from './components/MyButton/MyButton'
import { MyText } from './components/MyText/MyText'
import { GettingChildren } from './components/GettingChildren/GettingChildren'

export const App: React.FC = () => {
    return (
        <>
            <MyButton />
            <MyText />
            <GettingChildren id={56} name={'alex'}>
                Some inner text
            </GettingChildren>
        </>
    )
}
