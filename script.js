const BAS_URL = ' https://fnd22-shared.azurewebsites.net/api/Cases'
const userList = [] // skapar en tom array där varje fall sparas
const lista = document.querySelector('#userLista')
const form = document.querySelector('.formulär')
const button = document.querySelector('.button')


const load = () => {
    fetch(BAS_URL)      //hämtar ut information från api
        .then(res => res.json())
        .then(data => {
      
        data.forEach(user => {    //sparar anvöndar i min lokaka array
          userList.push(user)
        })
            listinUser()
           
           
          console.log(userList);

        })
}

load()



const listinUser = () => { //visar listan över alla cases

  lista.innerHTML ='';

  userList.sort((a, b) => {
    return new Date(b.modified) - new Date(a.modified);
  });

  userList.forEach(users => {
    const userElement = createElement(users)
    lista.appendChild(userElement)
    })
  
}


const createElement = (userInput) => { //skapar html element
 
  let user = document.createElement('a')
  user.classList.add('userLista')
  user.setAttribute('href',`details.html?id=${userInput.id}`)

  let subject = document.createElement('p')
  subject.classList.add('userLista-subject')
  subject.innerText = ('Ärende: ') + userInput.subject

  let email = document.createElement('p')
  email.classList.add('userLista-email')
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

const load2 = (caseId) => { 
  console.log(caseId);
const url = BAS_URL + '/' + caseId;
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data); // "data" will contain the case with the ID of caseId

    userList.push(data)
    listinUser()
    console.log(userList);
    
  })
  
}

const handleSubmit = e => { //skapar ett objekt som ska skickas till databasen
    e.preventDefault()

  

    const newUser = {
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
        subject: document.querySelector('#subject').value,
        
    }
    // console.log(newUser);


  fetch(BAS_URL,{
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    
  },
 
  
  
 })
  .then((response) => response.json())
  .then((data) =>load2(data));

   userList.push()
   listinUser()
  
  form.reset()//rensar formuläret
}
form.addEventListener('submit', handleSubmit)


