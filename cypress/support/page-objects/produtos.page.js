class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto() {
        // código
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }
}

export default new ProdutosPage()