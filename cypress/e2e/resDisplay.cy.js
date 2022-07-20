describe('Turing Cafe', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a header message', () => {
    cy.contains('Turing Cafe Reservations')
  })

  it('should have a form', () => {
    cy.get('form').contains('Name:')
    cy.get('form').contains('Date:')
    cy.get('form').contains('Time:')
    cy.get('form').contains('Guests:')
  })

  it('should have formatted Reservations', () => {
    cy.get('.reservation-card')
    .contains('Christie')
    cy.get('.reservation-card')
    .contains('12/29')
    cy.get('.reservation-card')
    .contains('7:00')
    cy.get('.reservation-card')
    .contains('Number of Guests: 12')
  })

  it('should let you fill out the form', () => {
    cy.get('input[name="name"]')
      .type('David')
      .should('have.value', 'David')
      cy.get('input[name="date"]')
      .type('8/8')
      .should('have.value', '8/8')
      cy.get('input[name="time"]')
      .type('7:30')
      .should('have.value', '7:30')
      cy.get('input[name="number"]')
      .type('6')
      .should('have.value', '6')
  })

  it('should let you add a reservation', () => {
    cy.get('input[name="name"]')
      .type('David')
      cy.get('input[name="date"]')
      .type('8/8')
      cy.get('input[name="time"]')
      .type('7:30')
      cy.get('input[name="number"]')
      .type('6')
    cy.get('input[type="submit"]').click()
    cy.get('.reservation-card').last()
      .contains('David')
  })

})