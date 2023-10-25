import LoginPage from "../pages/LoginPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

describe("Course Page", () => {
  const loginPage = new LoginPage();
  const coursePage = new CoursePage();
  const homePage = new HomePage();
  const profilePage = new ProfilePage();

  before(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
  });

  //To Verify that user can view their desired course
  it("User can view course", () => {
    cy.wait(8000);
    profilePage.userName();
  });

//profile avatar should be visible
    it("User can view avatar", () => {
        profilePage.avatar();
    });

    //user can click on dropdown
    it("User can click on dropdown", () => {
        profilePage.dropDown();
    });

  after(() => {
    cy.clearLocalStorage();
  });
});

