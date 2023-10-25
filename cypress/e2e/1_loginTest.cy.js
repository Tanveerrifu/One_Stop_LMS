import LoginPage from "../pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  const loginPage = new LoginPage();
  it("User should login with valid credentials", () => {
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
  });

  it("User should not login with unregister email", () => {
    loginPage.userlogin("tanvir@gmail.com", "maverick@07");
    loginPage.unregisteredUser();
  });

  it("User should not login with valid email and invalid password", () => {
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick");
  });

  it("User should not login with empty email and password field", () => {
    loginPage.emptyEmailPassword();
  });

  it("User should able to click forget password button", () => {
    loginPage.forgetPassword();
  });

  it("User should not login with empty phone no and password field", () => {
    loginPage.emptyPhonePassword();
  });

  it("User should able to view their user name", () => {
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    loginPage.UserCanSeeName();
  });

  it("User should able to redirected to dashboard and view homepage after login", () => {
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    loginPage.UserCanVisitHome();
  });

  it("User should able to redirected to signup page by click signup button from login page", () => {
    loginPage.checkSignUp();
  });

  it("User should successfully logout from the system", () => {
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    loginPage.checkLogOut();
  });
});
