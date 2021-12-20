# quimicaDoMal - API

A api tem como função fazer o crud básico (criação, edição, listagem e atualização) de personagens da série Breaking Bad

- Todos os endpoints apontam para /characters, mudando apenas o método HTTP

# POST /characters
 body: { name: string}
 Cria um novo personagem como o nome provido no body da requisição e os episódios que ele participou, obitidos através de consulta a api breakingbadapi.com/api
 Retorna 409 - "Character name already
 
# PUT /characters?id=id
 body
