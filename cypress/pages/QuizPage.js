class QuizPage {
  attendQuiz() {
    cy.contains("Hello Course....").click();
    cy.wait(5000);
    cy.get("#headingchapterA1 > .h-t > .title").click();
    cy.get(
      "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    ).click();
  }
  performQuiz() {
    cy.contains("Hello Course....").click({force: true});
    cy.wait(10000);
    cy.get("#headingchapterA1 > .h-t > .title").click();
    cy.get(
      "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    ).click();
    cy.wait(2000);
    cy.get(
      ":nth-child(4) > .custom-input-checkbox-block > .input-label-radio"
    ).click({force: true});
    cy.contains('Submit').click({force: true});
    cy.wait(5000);
    cy.get("h1").should("have.text", "Your Score");
  }
  retakeQuiz(){
    cy.contains("Hello Course....").click({force: true});
    cy.get("#headingchapterA1 > .h-t > .title").click();
    cy.get(
      "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    ).click();
    cy.wait(2000);
    cy.get(
      ":nth-child(4) > .custom-input-checkbox-block > .input-label-radio"
    ).click({force: true});
    cy.contains('Submit').click({force: true});
    cy.wait(5000);
    cy.get("h1").should("have.text", "Your Score");
    cy.contains('Retake Exam').should('be.visible');

  }













}

export default QuizPage;
