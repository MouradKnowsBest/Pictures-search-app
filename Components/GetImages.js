
export default function GetImages(data, setDataImg){

    const imgsReceived = [];
    
    data.results.forEach((img) => {
        imgsReceived.push(img.urls.regular)
    })

    const newFreshState = [
        [],
        [],
        [],
    ]

    let index = 0;
    for(let i = 0; i<3; i++){
        for(let j = 0; j<10; j++){
            newFreshState[i].push(imgsReceived[index])
            index++;
        }
    }

    setDataImg(newFreshState)
}