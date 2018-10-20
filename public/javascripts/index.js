
//THINGS YOU CAN DO-------------------------------------------------------------
function deleteItem(event){
  let recordId = event.target.getAttribute('data-id')
  // DELETE THIS RECORD!
  axios.delete(`/movies/${recordId}`)
  .then((response) => {
    event.target.parentElement.parentElement.remove()
  })
  .catch((err) => {
    console.log(err)
  })
}

function addMovie(event){
  //show form
  event.preventDefault()
  let form = document.getElementById("form")
  form.hidden = false

  //add Event listener to form
  let submitMovieForm = document.getElementById("edit-movie")
  submitMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //add info from form to database
    let formElements = event.target.elements
    let data = {
      title: formElements[0].value,
      director: formElements[1].value,
      year: parseInt(formElements[2].value),
      rating: parseInt(formElements[3].value),
      poster_url: formElements[4].value
    }
    axios.post('/movies', data).then((results) => {
      console.log(results)
      makeMoviesTable()
      form.hidden = true
    })
  })

}

function editItem(event){
  event.preventDefault()
  let form = document.getElementById("form")
  form.hidden = false
  let idToEdit = event.target.attributes[1].value
  //add Event listener to form
  let submitMovieForm = document.getElementById("edit-movie")
  submitMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //add info from form to database
    let formElements = event.target.elements
    console.log("formElements: ", formElements)
    let data = {
      title: formElements[0].value,
      director: formElements[1].value,
      year: parseInt(formElements[2].value),
      rating: parseInt(formElements[3].value),
      poster_url: formElements[8].value
    }
    console.log("data: ", data)
    axios.put(`/movies/${idToEdit}`, data).then((results) => {
      console.log("results: ", results)
      makeMoviesTable()
      form.hidden = true
    })
  })
}

function makeMoviesTable(){
  let movieData = []
  let table = {}
  axios.get('/movies')
    .then((response) =>{
      movieData = response.data
      table = document.getElementById('movie-data')

      movieData.forEach((movie) => {
        //create a new row in the table
        let tr = document.createElement('tr')

        //create each data point and insert data from the results
        let image = document.createElement('IMG')
        let imageTD = document.createElement('td')
        imageTD.appendChild(image)
        image.setAttribute("src", movie.poster_url)
        image.setAttribute("height", 250)
        image.setAttribute("width", 180)
        let title = document.createElement('td')
        title.innerText = movie.title
        let year = document.createElement('td')
        year.innerText = movie.year
        let rating = document.createElement('td')
        rating.innerText = movie.rating
        let director = document.createElement('td')
        director.innerText = movie.director

        //add delete button
        let del_td = document.createElement('td')
        let del_button = document.createElement('button')
        del_button.innerText = 'Delete'
        del_button.setAttribute("class", "waves-effect waves-light btn")
        //adding attribute for event listener:
        del_button.setAttribute('data-id', movie.id)

        //add edit button
        let edit_td = document.createElement('td')
        let edit_button = document.createElement('button')
        edit_button.setAttribute("class", "waves-effect waves-light btn")
        //save the movie id to an attribute on the button
        edit_button.innerText = 'Edit'
        //adding attribute for event listener:
        edit_button.setAttribute('data-id', movie.id)

        //create event listeners for buttons
        del_button.addEventListener('click', deleteItem)
        edit_button.addEventListener('click', editItem)

        //append buttons
        del_td.appendChild(del_button)

        //append to the table:
        tr.appendChild(imageTD)
        tr.appendChild(title)
        tr.appendChild(director)
        tr.appendChild(year)
        tr.appendChild(rating)
        tr.appendChild(edit_button)
        tr.appendChild(del_td)
        table.appendChild(tr)
    })
  })

}


//DO THE THINGS-----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(event){

  let addMovieBtn = document.getElementById("add-movie-btn")
  addMovieBtn.addEventListener('click', addMovie)

  makeMoviesTable()

})
