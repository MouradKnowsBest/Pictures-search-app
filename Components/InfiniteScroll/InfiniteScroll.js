import React, {useState, useEffect, useRef} from 'react'
import infiniteFetchData from './infiniteFetchData'
import searchFetchData from './searchFetchData'
import {v4 as uuidv4} from 'uuid'
import './InfiniteScroll.css'
import infiniteCheck from './infiniteCheck'


export default function InfiniteScroll() {


    const [dataImg, setDataImg] = useState([[], [], []])
    const [pageIndex, setPageIndex] = useState(1)
    const [searchState, setSearchState] = useState('random')
    const [firstCall, setFirstCall] = useState(true)

    const inpRef = useRef()

    useEffect(() => {
        if(firstCall) return;
        searchFetchData(pageIndex, searchState, setDataImg)
    },[searchState])


    useEffect(() => {
        infiniteFetchData(pageIndex, searchState, setFirstCall, dataImg, setDataImg) ;
    }, [pageIndex])

    
    useEffect(() => {
        window.addEventListener('scroll', infiniteCheck);
        
        return () => {
            window.removeEventListener('scroll', infiniteCheck)
        }
    }, [])


    const handleSearch = e => {
        e.preventDefault()
        setSearchState(inpRef.current.value)
        setPageIndex(1)
    }

    return (
        <div className="container">

            <form onSubmit={handleSearch}>
                <h1>  <a href="./"> Pictures Search App </a>  </h1>
                <input className="search" type="text" id="search" placeholder="Your Research Here..." ref={inpRef} />
            </form>


            <div className="card-list">

            <div>
                {dataImg[0].map(img => {
                        return <img key={uuidv4()} src={img} alt='' />
                    })}
                </div>
                <div>
                    {dataImg[1].map(img => {
                        return <img key={uuidv4()} src={img} alt='' />
                    })}
                </div>
                <div>
                    {dataImg[2].map(img => {
                        return <img key={uuidv4()} src={img} alt='' />
                    })}
                </div>

            </div>


        </div>
    )
}
