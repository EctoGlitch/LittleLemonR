import React from 'react';

const Hero = ({ children }) => {
    return (
        <div className={"max-sm:overflow-hidden max-sm:px-6 max-sm:gap-y-10 px-80 py-16 bg-dark_green grid max-sm:grid-cols-1 grid-cols-[50%_1fr]"}>
            { children }
        </div>
    )
}
export default Hero