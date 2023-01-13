const BAS_URL = ' https://fnd22-shared.azurewebsites.net/api/Cases/'
// const BAS_URL1 = ' https://fnd22-shared.azurewebsites.net/api/statuses'
const userList = [] //sparar användare

const form = document.querySelector('.formulär')
const button = document.querySelector('.button')

//TEST

//Hämtar UL

const load = () => {

  

  fetch(BAS_URL)
      .then(res => res.json())
      .then(data => {
      data.forEach(user => { //sparar användare
        userList.push(user)
      })
          console.log(userList);

          data.forEach(post => {
           form.innerHTML += `
          <article>
          <h2>${post.email}</h2>
          <small>${post.subject}</small>
          <p>${post.id}</p>
          <p>${post.created}</p>

           </article>
          `

          });

       



      })

}
load() 


//TEST SLUT


// const load = () => {

  

//     fetch(BAS_URL)
//         .then(res => res.json())
//         .then(data => {
//         data.forEach(user => { //sparar användare
//           userList.push(user)
//         })
//             console.log(userList);

//             data.forEach(post => {
//              form.innerHTML += `
//             <article>
//             <h2>${post.email}</h2>
//             <small>${post.subject}</small>
//             <p>${post.id}</p>
//             <p>${post.created}</p>

//              </article>
//             `

//             });

         



//         })

// }




// load()


const handleSubmit = e => { //skapar ett objekt som ska skickas till databasen
    e.preventDefault()
    const newUser = {
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value ,
        subject: document.querySelector('#subject').value,
    }
    // console.log(newUser);


  fetch(BAS_URL, {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  
 })
 
  .then((response) => response.json())
  .then((data) => console.log(data));


}



form.addEventListener('submit', handleSubmit)







    
