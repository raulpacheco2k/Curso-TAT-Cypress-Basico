describe("Central de Atendimento ao Cliente TAT", () => {

    beforeEach(() => {
        cy.visit("../../src/index.html")
    })

    it("Verifica o título da aplicação", () => {
        cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT")
    })

    it("Preenchimento do fomrulário e envio com sucesso", () => {
        cy.fillMandatoryFieldsandSubmit(
            "Raul",
            "Pacheco",
            "contato@raulpacheco.com.br",
            "48998210633",
            "Muito bom!",
            "Blog",
            "Elogio",
            "E-mail",
            "cypress/fixtures/example.json"
        )
        cy.get("span[class='success']").should("be.visible").and("contain", "Mensagem enviada com sucesso.")
    });

    it("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
        cy.fillMandatoryFieldsandSubmit("Raul", "Pacheco", "contatoraulpacheco.com.br", "48998210638", "Muito bom!", "YouTube", "Feedback", "Telefone", "cypress/fixtures/example.json")
        cy.get("span[class='error']").should("be.visible").and("contain", "Valide os campos obrigatórios!")
    });

    it("Campo telefone não aceita caracteres não não numéricos", () => {
        cy.get("#phone")
            .type("abc!@#", {delay: 0})
            .should("have.text", "")
    });

    it('acessas as politicas de privacidade', () => {
        cy.get("#privacy a").invoke('removeAttr', 'target').click()
        cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT - Política de privacidade")
    });
})