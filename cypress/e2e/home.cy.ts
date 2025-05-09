describe("homepage", () => {
  it("the h1 contains the correct text: 'Testing Next.js'", () => {
    cy.visit("http://localhost:3000")

    cy.get("h1").should("exist").contains("Testing Next.js")
    cy.get("[data-test='hero-heading']")
      .should("exist")
      .contains("Testing Next.js")
  })

  it("the features on the homepage are correct", () => {
    cy.visit("http://localhost:3000")
  })
})
