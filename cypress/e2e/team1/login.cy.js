describe('login test', () => {
  it('gagal, user lockout', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked-out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it.only('berhasil login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})