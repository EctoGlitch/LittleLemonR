import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <>
            <div className={"max-sm:px-6 max-sm:gap-y-10 max-sm:overflow-hidden px-80 py-16"}>
                { children }
            </div>
        </>
        
    )
}
export default Wrapper