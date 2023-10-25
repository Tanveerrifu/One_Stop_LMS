class AddCartPage {
  // addToCart() {
  //   cy.wait(5000);
  //   cy.contains('English Speaking Complete').click();
  //   cy.wait(5000);
  //   cy.get('button:contains("Buy Now")').click();
  //   cy.wait(3000);
  //   cy.xpath("//div[contains(text(),'Course added into Cart list successfully')]").should('exist');
  // }
  addToCart() {
    cy.wait(5000);
    cy.contains('Chinese language for beginners').click();
    cy.wait(5000);
    cy.get('button:contains("Buy Now")').click();
    cy.wait(3000);
    cy.xpath("//div[contains(text(),'Course added into Cart list successfully')]").should('exist');
  }
  addMultipleCourse(){
    cy.get(".count-num").click();
    cy.get('.to-add-courses-title > p > a').click();
    cy.wait(5000);
    cy.contains('Exam MCQ in 30 days').click({force:true});
    cy.get('button:contains("Buy Now")').click();
    cy.wait(3000);
    cy.xpath("//div[contains(text(),'Course added into Cart list successfully')]").should('exist');
  }
  visitCartPage(){
    cy.get(".count-num").click();
  }
  unRegisteredUser(){
    cy.wait(5000);
    cy.get('.header-right > .header-user-dropdwon').contains('Logout').click({force:true});
    cy.wait(5000);
    cy.contains('a','Home');
    cy.get(".count-num").click();
    cy.get('h2').should('have.text','Easy Login with Social Account');
  }
}

export default AddCartPage;
