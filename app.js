
const submitButton = document.querySelector("#submitSearch")
let searchInput = document.querySelector("#searchWord")
const imgElement = document.querySelector("#image")
const feedbackPar = document.querySelector("#feedbackParagraph")

const apiKey = "wyCA4MYBH9Wyq6rYzEUSh8BVCMTl07qQ"
submitButton.addEventListener("click", () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInput.value}`, {mode: "cors"})

    .then((response) => {
        return response.json()
        console.log(response)
    })
    .then((res) => {
        imgElement.src = res.data.images.original.url 
        searchInput.value = ""
    })
    .catch((err) =>{
        console.log(err)
        feedbackPar.textContent = err.message
    })
})