

// const id = new URLSearchParams(window.location.search).get('id')
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/'



// const userInfo = document.querySelector('#userInfo')

// const getUserInfo = async () =>{
//     const res = await fetch(BASE_URL + id)
//     const post = await res.json()

//     console.log(post);

//     userInfo.appendChild(createUserElement(post))
// }

// getUserInfo()


// const createUserElement = (post) => {
  
//   let user = document.createElement('div')
//   user.classList.add('userLista')

//   let subject = document.createElement('p')
//   subject.classList.add('userLista-subject')
//   subject.innerText = ('Ärende: ') + post.subject

//   let email = document.createElement('p')
//   email.classList.add('userLista-email')
//   email.innerText = ('Email: ') + post.email

//   let status = document.createElement('p')
//   status.classList.add('userLista-ärendestatus')
//   status.innerText = ('Status: ') + post.status.statusName

//   let time = document.createElement('p')
//   time.classList.add('userLista-tidpunkt')
//   time.innerText = ('Tidpunkt: ') + post.modified

  
//   let message = document.createElement('p')
//   message.classList.add('user-message')
//   message.innerText = ('Message: ') + post.message

//   user.appendChild(subject)
//   user.appendChild(email)
//   user.appendChild(status)
//   user.appendChild(time)
//   user.appendChild(message)

//   card.appendChild(user)


//   return user
// }

const BAS_URL = ' https://fnd22-shared.azurewebsites.net/api/Cases/'
const lista = document.querySelector('#userLista')


const params = new URLSearchParams(window.location.search)
const id= params.get('id')

console.log(id);

const post = () => {
    fetch(BAS_URL + id)      //hämtar ut information från api
        .then(res => res.json())
        .then(data => {
            console.log(data);
            lista.appendChild(createElement(data))
      })
        
        
}

post()

const createElement = (userInput) => { //skapar html element
 
    let user = document.createElement('div')
    user.classList.add('userLista')

  
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

    let message = document.createElement('p')
    message.classList.add('user-message')
    message.innerText = ('Message: ') + userInput.message


  
    user.appendChild(subject)
    user.appendChild(email)
    user.appendChild(status)
    user.appendChild(time)
    user.appendChild(message)
  
    
    return user
  }
  




// params.forEach(par =>{
//     console.log(par);
// })
