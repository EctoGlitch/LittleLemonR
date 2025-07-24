import search from '../Img/icons_assets/search.png'
import { useState, useRef } from 'react'

const Search = ( { onSearch } ) => {
    const search_ref = useRef(null)
    const [expand, setExpand] = useState(true)

    const handleChange = (e) => {
        const searchValue = e.target.value.trim().toLowerCase()
        onSearch(searchValue)
    }

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <>
            <div className='h-[60px] flex flex-row relative self-center'>
                <input type='text' placeholder='Search' id='search_bar' onChange={handleChange}  ref={search_ref} className={'bg-grey  h-[60px] p-7 font-p text-black text-semibold w-[380px] max-sm:w-full rounded-full ' 
                + `${expand ? 'search_open' : 'search_closed'}`}/>
                <button onClick={ handleExpand } className={'bg-black absolute -right-1 rounded-full w-[60px] h-[60px] flex justify-center content-center '}>
                    <img className='w-[30px] h-[30px] self-center' src= { search } />
                </button>
            </div>
        </>
    )
}
export { search }
export default Search