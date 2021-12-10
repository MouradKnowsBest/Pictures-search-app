import React from 'react'

function infiniteCheck(setPageIndex) {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    
        if(scrollHeight - scrollTop === clientHeight) {
            setPageIndex(pageIndex => pageIndex + 1)
        }
    
}

export default infiniteCheck
