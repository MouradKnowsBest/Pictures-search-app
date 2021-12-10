import React from 'react'

async function infiniteFetchData(pageIndex, searchState, setFirstCall, dataImg, setDataImg) {

    return (

        await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`)
        .then((response) => {
            return response.json()
        })

            .then((data) => {

                const imgsReceived = getImages(data)

                const ImgsTable = createImgsTable(imgsReceived, dataImg)

                setDataImg(ImgsTable)
                
                setFirstCall(false)
            })

    )
}

export default infiniteFetchData

function getImages(data){

    const imgsReceived = [];

    data.results.forEach((img) => {
        imgsReceived.push(img.urls.regular)
    })

    return(imgsReceived)
}

function createImgsTable(imgsReceived, dataImg){
    const ImgsTable = [
        [...dataImg[0]],
        [...dataImg[1]],
        [...dataImg[2]],
    ]

    let index = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 10; j++){
            ImgsTable[i].push(imgsReceived[index])
            index++;
        }
    }

    return(ImgsTable)
}
