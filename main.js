const url = 'https://jsonplaceholder.typicode.com/todos/'
const button = document.querySelector('button')
button.addEventListener('click', fetchApiData)

function fetchApiData(){
    fetch(url) //o .then pode ser como um 'depois', então depois do fetch obter os dados da API o .then chamda esses dados de response e os converte para json
    .then(response => response.json()) //apos o .then pegar os dados do fetch e converter para json nos pegamos essa informçaõ e a chamammos de data
    .then(data => { //em seguida mapeamos o array obtido pela requisão e nomeamos cada item de 'item' e exibimos seu id no console.log
        data.map((item) => {
            console.log(item.id)
        })
    })
}