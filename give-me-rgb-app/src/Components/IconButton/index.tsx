import React, { ComponentProps } from "react"

export type IconButtonProps = ComponentProps<'button'> & 
{
    children: React.ReactNode
}

export const IconButton = ({children,...props}:IconButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}