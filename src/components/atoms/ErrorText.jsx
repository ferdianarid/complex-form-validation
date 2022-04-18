import React from 'react'

const ErrorText = ({ children }) => {
    return (
        <><h1 className="py-1 px-2 bg-red-100 w-fit rounded-md font-medium text-xs text-red-600">{children}</h1></>
    )
}

export default ErrorText