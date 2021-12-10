
async function GetData (pageIndex, searchState){
    
    await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`)
    .then((response) => {       
        return response.json()
    })
    .then((data) => {
        return(data)
    })
}


export default GetData