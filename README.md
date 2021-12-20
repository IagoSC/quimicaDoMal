# quimicaDoMal - API

 A api tem como função fazer o crud básico (criação, edição, listagem e atualização) de personagens da série Breaking Bad
 
 - Todos os endpoints apontam para /characters, mudando apenas o método HTTP
 
# Rodar localmente
 - git clone github.com/iagoSC/quimicaDoMal
 - npm i
 - npm run dev

# POST /characters
 body: { name: string }
 Cria um novo personagem como o nome provido no body da requisição e os episódios que ele participou, obitidos através de consulta a api breakingbadapi.com/api
 Se nome já existe: retorna 409 - "Character name already exists"
 
# PUT /characters?id=id
 body: { name: string }
 Altera o nome do personagem com id em query para o nome fornecido no body da requisição
 Se nome já existe: retorna 409 - "Character name already exists"
 
# GET /characters
 Retorna todos os personagens adicionados com seus campos name, id e episodes
 Se não houverem personagens adicionados retorna array vazio
 
# DELETE /characters?id=id /characters?name=name
 Deleta personagem cujo nome ou id é igual ao fornecido

  
