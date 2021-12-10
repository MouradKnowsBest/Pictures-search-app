import React from 'react'

async function searchFetchData(pageIndex, searchState, setDataImg) {

        await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`)
        .then((response) => {
            return response.json()
        })

        .then((data) => {

            const imgsReceived = getimgsReceived(data)

            const newFreshState = getnewFreshState(imgsReceived)

                setDataImg(newFreshState)
        })
}

export default searchFetchData

function getimgsReceived(data){

    const imgsReceived = [];

    data.results.forEach((img) => {
        imgsReceived.push(img.urls.regular)
    })

    return(imgsReceived)

}

function getnewFreshState(imgsReceived) {

    const newFreshState = [
        [],
        [],
        [],
    ]

    let index = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 10; j++){
            newFreshState[i].push(imgsReceived[index])
            index++;
        }
    }
    return(newFreshState)

}