import Produto from "../models/models.js"

//Criar dados

export const resultadoCreate = async (req, res) => {
    try {
        await produto.create(req.body)
        res.json({
            "menssagem": "Foi criado um novo local no Bando de Dados"
        })
    } catch (erro){
        console.log(erro)
    }
}

//Ler dados

export const getproduto = async (req, res) => {
    try {
      const produtos = await produtos.findAll()
      res.send(produtos)
    } 
    catch (erro)  {
      console.log(erro)
    }
}
//Atualizar dados

export const updateProduto = async (req, res) => {
    try {
      var result = await produto.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if(result > 0){
        res.json({
          "menssagem": "O produto " + req.params.id + " foi ATUALIZADO"
        })
      }
      else{
        res.json(
          {
          "menssagem": "O registro NAO foi encontrado"
        })
      }
    } catch (erro) 
    {
      console.log(erro)
    }
}
  
//Deletar dados

export const deleteProduto = async (req, res) => {
    try {
      var result = await produto.destroy({
        where: {
            id: req.params.id
        }
      })
        if(result > 0)
          res.json({
            "menssagem": "O produto " + req.params.id + " foi EXCLUIDO do Banco de Dados"
            })
          else {
            res.json({
              "menssagem": "Não foi encontrado o registro"
              })
          }
        } 
    catch (erro) {
      console.log(erro)
        }
}
