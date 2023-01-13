const BAS_URL = (' https://fnd22-shared.azurewebsites.net/api/cases')

const userList = []

const form = document.querySelector('.formulär')
const button = document.querySelector('.button')


const load = () => {
    fetch(BAS_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(post => {
               // console.log(post);
               form.innerHTML += `
               <article>
               <h2>${post.email}</h2>
               <small>${post.message}</small>
               <p>${post.subject}</p>
               </article>
               `

                
            });




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




    
