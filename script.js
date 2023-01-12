const BAS_URL = ('https://fnd22-shared.azurewebsites.net/swagger/v1/swagger.json')

const userList = []

const form = document.querySelector('.formulär')
const button = document.querySelector('.button')


const load = () => {
    fetch(BAS_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);




        })

}

load()
const handleSubmit = e => {
}
form.addEventListener('submit', handleSubmit)


button.addEventListener('submit', e =>{
    e.preventDefault()
    
})