describe("测试应用", () => {
  // beforeEach(() => {
  //   cy.exec("npm run dev");
  // });

  it("访问本地服务器", () => {
    cy.visit("http://localhost:3000");
  });

  it("访问本地服务器(默认访问cypress.config的baseUrl)", () => {
    cy.visit("/");
  });

  it('请求', () => {
    cy.request('GET', '/api/js_review?path=src%2Fpages%2FsetState%2Fcount_fn.js')
  })
});
