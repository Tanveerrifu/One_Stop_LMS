import xpath from "cypress-xpath";

class LoginPage {
  userlogin(email, password) {
    cy.visit("https://dev.onestoplms.com/");
    cy.get(".login-signup").click();
    cy.contains("a", "Try Email").click();
    cy.get("#email").type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get(".login-btn").click();
  }
  unregisteredUser() {
    cy.get(".error-message").should("have.text", "User not found");
  }
  validEmailInvalidPassword() {
    cy.get(".error-message").should(
      "have.text",
      "Incorrect username or password"
    );
  }
  emptyEmailPassword() {
    cy.visit("https://dev.onestoplms.com/");
    cy.get(".login-signup").click();
    cy.contains("a", "Try Email").click();
    cy.get(".login-btn").click();
    cy.get(".mb-10 > .error-message").should("have.text", "Email is required");
    cy.get(".single-condition-field > .single-input > .error-message").should(
      "have.text",
      "Password is required"
    );
  }
  forgetPassword() {
    cy.visit("https://dev.onestoplms.com/");
    cy.get(".login-signup").click();
    cy.contains("a", "Try Email").click();
    cy.contains("a", "Forget Password").click();
    cy.get(".title").contains("Forgot your password?");
  }
  emptyPhonePassword() {
    cy.visit("https://dev.onestoplms.com/");
    cy.get(".login-signup").click();
    cy.get(".login-btn").click();
    cy.get(".phn-error-message").should(
      "have.text",
      "Mobile number is required"
    );
    cy.get(".single-condition-field > .single-input > .error-message").should(
      "have.text",
      "Password is required"
    );
  }
  UserCanSeeName() {
    cy.wait(8000);
    cy.get(".name").should("contain", "Tanvir Hasan");
  }
  UserCanVisitHome() {
    cy.get(".h-logo").click();
  }
  checkSignUp() {
    cy.visit("https://dev.onestoplms.com/");
    cy.get(".login-signup").click();
    cy.contains("a", "Sign UP").click();
    cy.xpath("//div[@class='lgon-register-page-wrapper']//p[1]").should(
      "contain.text",
      "Already have an account?"
    );
  }
  checkLogOut(){
    cy.wait(5000);
    cy.get('.header-right > .header-user-dropdwon').contains('Logout').click({force:true});
  }
}

export default LoginPage;
