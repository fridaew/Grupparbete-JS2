const BAS_URL = ('https://fnd22-shared.azurewebsites.net/swagger/v1/swagger.json')

const userList = []

const form = document.querySelector('.formulär')
const button = document.querySelector('.button')


const load = () => {
    fetch(BAS_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.message);




        })

}

load()
const handleSubmit = e => { //skapar ett objekt som ska skickas till databasen
    e.preventDefault()


    const newUser = {
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value ,
        subject: document.querySelector('#subject').value,
    }
    //console.log(newUser);


 fetch(BAS_URL, {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 })
  .then((response) => response.json())
  .then((json) => console.log(json));


}


form.addEventListener('submit', handleSubmit)




    
