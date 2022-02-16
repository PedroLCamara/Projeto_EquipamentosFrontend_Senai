describe('Cadastro e exclusão de equipamentos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Deve logar, acessar a página de equipamentos, cadastrar um novo equipamento e excluí-lo', () => {
        cy.get('.cabecalhoPrincipal-nav-login').should('exist')
        cy.get('.cabecalhoPrincipal-nav-login').click()
        cy.get('.input__login').first().type('paulo@email.com')
        cy.get('.input__login').last().type('123456789')
        cy.get('.btn__login').click()

        cy.wait(3000)

        cy.get('input[type=file]').first().selectFile('src/assets/tests/equipamento.jpeg')

        cy.wait(3000)

        cy.get('input[type=file]').last().selectFile('src/assets/tests/equipamento.jpeg')
        cy.get("input[type=text]").first().type('Equipamento teste cypress')
        let valorOcr;
        cy.get('#codigoPatrimonio').then(($input) => {
            valorOcr = $input.text()
        })
        cy.get(".btn__cadastro").click()


        cy.wait(3000)

        cy.get('.card').filter(':contains("Equipamento teste cypress")').children('.excluir').click()
    })
})