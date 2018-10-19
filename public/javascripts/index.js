document.addEventListener('DOMContentLoaded', function(event){

  let url = 'https://moviereviewstori.herokuapp.com/movies'

  axios.get('url').then((response) =>{
    console.log(response)
  })
})
