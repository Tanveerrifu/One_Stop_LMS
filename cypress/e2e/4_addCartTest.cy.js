import AddCartPage from "../pages/AddCartPage";
import CoursePage from "../pages/CoursePage";
import LoginPage from "../pages/LoginPage";

describe("Add to Cart", () => {
  const user = undefined;
  const loginPage = new LoginPage();
  const coursePage = new CoursePage();
  const addToCartPage = new AddCartPage();

  before(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
  });

  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
    loginPage.UserCanVisitHome();
    coursePage.UserCanGoToCoursePage();
  });
  it("The selected course should be added to the user's shopping cart", () => {
    addToCartPage.addToCart();
  });
  it("Added Multiple Course", () => {
    addToCartPage.addMultipleCourse();
  });
  it("Visit cart page by clicking cart button", () => {
    addToCartPage.visitCartPage();
  });
  it("Unregistered user will redirected to login page when click add to cart button", () => {
    addToCartPage.unRegisteredUser();
  });
});
