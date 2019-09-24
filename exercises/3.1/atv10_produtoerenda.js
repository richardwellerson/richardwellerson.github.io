custoProduto = 1000
valorVenda = 1500
quantidadeVenda = 1000
custoRealProduto = (custoProduto+(custoProduto*0.2))
custoTotalProduto = (custoRealProduto * quantidadeVenda)
vendaTotal = (valorVenda * quantidadeVenda)
lucroTotal = (vendaTotal - custoTotalProduto)

console.log("O lucro total foi de R$ "+lucroTotal+",00.")