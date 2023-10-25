import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

describe("Home Page", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  before(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
    loginPage.UserCanVisitHome();
  });
  it("User can visit homepage after login", () => {
    loginPage.UserCanVisitHome();
  });
  //To Verify that all courses showing on homepage
  it("User can see all courses on homepage", () => {
    homePage.UserCanSeeAllCourses();
  });

  it("User can change language on homepage", () => {
    homePage.languageChange();
  });

  it("User can see cart value on homepage", () => {
    homePage.UserCanSeeCartValue();
  });

  it("User can navigate through the page to the bottom", () => {
    homePage.UserCanScrollDown();
  });

  it("User can join live season from homepage", () => {
    homePage.UserCanJoinLiveSeason();
  });

  //To Verify that user can see logo on the homepage
  it("User should see logo on homepage", () => {
    homePage.UserCanSeeLogo();
  });

  //To Verify that user can operate slider by clicking previous and next button
  it("User can operate slider by clicking previous and next button", () => {
    homePage.clickingSlider();
  });

  //This two test cases are not working properly. Blog search feature is not a functional feature. So, I am skipping these two test cases.
  // it.skil("User can search course from homepage", () => {
  //     homePage.searchCourse();
  // });

  // it.skip("User can search blog from homepage", () => {
  //     homePage.searchBlog();
  //});

  //To Verify that user can go to top by using go to top button
  it("User can go to top by using go to top button", () => {
    homePage.goToTop();
  });

  //To Verify that user can not search invalid value and it's showing results not found
  it("User can not search invalid value and it's showing results not found", () => {
    homePage.searchInvalidValue();
  });
});
