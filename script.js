const BAS_URL = ' https://fnd22-shared.azurewebsites.net/api/Cases '
const userList = []
const lista = document.querySelector('.userLista')
const form = document.querySelector('.formulär')
const button = document.querySelector('.button')


const load = () => {
    fetch(BAS_URL)      //hämtar ut information från api
        .then(res => res.json())
        .then(data => {
      
        data.forEach(user => {    //sparar anvöndar i min lokaka array
          userList.unshift(user)
        })
            listinUser()
        

            console.log(userList);
      })
}

load()


const listinUser = () => {
  lista.innerHTML ='';

  userList.forEach(users => {
    const userElement = createElement(users)
    lista.appendChild(userElement)
  })
}


const createElement = (userInput) => {

  let user = document.createElement('div')
  user.classList.add('userLista')

  let subject = document.createElement('p')
  subject.classList.add('userLista-subject')
  subject.innerText = ('Ärende: ') + userInput.subject

  let email = document.createElement('p')
  subject.classList.add('userLista-email')
  email.innerText = ('Email: ') + userInput.email

  let status = document.createElement('p')
  status.classList.add('userLista-ärendestatus')
  status.innerText = ('Status: ') + userInput.status.statusName

  let time = document.createElement('p')
  time.classList.add('userLista-tidpunkt')
  time.innerText = ('Tidpunkt: ') + userInput.modified

  user.appendChild(subject)
  user.appendChild(email)
  user.appendChild(status)
  user.appendChild(time)

  return user
}


const handleSubmit = e => { //skapar ett objekt som ska skickas till databasen
    e.preventDefault()


    const newUser = {
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value ,
        subject: document.querySelector('#subject').value,
    }
    // console.log(newUser);


  fetch (BAS_URL, {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',

  },
  
 })
// fetch(BAS_URL)
  .then((response) => response.json())
  .then((data) => console.log(data));

  form.reset()


  
}
form.addEventListener('submit', handleSubmit)




    
