import React from 'react'

interface GettingChildrenPropsType {
    children: React.ReactNode
    id: number
    name: string
}

export const GettingChildren: React.FC<GettingChildrenPropsType> = ({ children, id, name }) => {
    return (
        <div>
            <p>name:{name}</p>
            <p>id: {id}</p>
            <div>{children}</div>
        </div>
    )
}
