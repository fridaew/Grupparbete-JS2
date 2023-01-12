const BAS_URL = ('https://fnd22-shared.azurewebsites.net/swagger/index.html')


fetch(BAS_URL)
.then(responser => responser.json())
.then
