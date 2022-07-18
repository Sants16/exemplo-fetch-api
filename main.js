const url = 'https://jsonplaceholder.typicode.com/todos/'
const button = document.querySelector('button')
button.addEventListener('click', fetchApiData)

function fetchApiData(){
    fetch(url) //o .then pode ser como um 'depois', então depois do fetch obter os dados da API o .then chamda esses dados de response e os converte para json
    .then(response => response.json()) //apos o .then pegar os dados do fetch e converter para json nos pegamos essa informçaõ e a chamammos de data
    .then(data => { //em seguida mapeamos o array obtido pela requisão e nomeamos cada item de 'item'
        const list = document.querySelector('#fill_list') //faz referencia a tag ul do html
        data.map((item) => {

            const li = document.createElement('li') //cria uma tag li para cada 'item' obtido com a requisão da api
            li.setAttribute('id', item.id) //muda o id de cada li para o id de cada 'item' do array da api
            li.innerHTML = item.title //insere dentro da li o titulo de cada 'item'
            list.appendChild(li) //indere o li dentro da list no html

        })
    })
}