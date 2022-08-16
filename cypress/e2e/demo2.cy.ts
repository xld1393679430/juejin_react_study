describe("Demo2Test", () => {
  it("错误的测试", () => {
    // expect(true).to.equal(false)
    expect(true).to.equal(true);
  });

  it("查询元素", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email").type("fake@email.com").should("have.value", "fake@email.com");
  });
});
