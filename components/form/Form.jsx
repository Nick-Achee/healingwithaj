import React, { FormEvent } from 'react'


const Form = () => {
    return (
        <form
            id={id}
            className="bg-white bg-opacity-90 backdrop-filter backdrop-blur max-w-1/2 md: max-w-1/2 rounded-md shadow-2xl mx-auto  sm:p-8 "
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}

export default Form