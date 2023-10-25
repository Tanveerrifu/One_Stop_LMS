import LoginPage from "../pages/LoginPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";

describe("Course Page", () => {
  const loginPage = new LoginPage();
  const coursePage = new CoursePage();
  const homePage = new HomePage();

  before(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
  });

  //To Verify that user can view their desired course
  it("User can view course", () => {
    homePage.UserCanSeeAllCourses();
  });

  it("User can see course Wishlist icon", () => {
    cy.get(".whishlist-icon").should("be.visible");
  });

  it("User can click on add to wishlist icon", () => {
    cy.get(':nth-child(2) > .single-course-card > .thumb > .whishlist-icon > .bi').click({force:true});

    //logically clicking method

    // cy.get('i[title="Add to wishlist"]').then(($element) => {
    //   if ($element.length >= 0) {
    //     // Element "Add to wishlist" is available, so click it.
    //     cy.get('i[title="Add to wishlist"]').click();
    //   } else {
    //     // Element "Add to wishlist" is not available, so check for "Remove from wishlist" and click it.
    //     cy.get('i[title="Remove to wishlist"]').should('be.visible').click();
    //   }
    // });

    cy.wait(8000);

  });

  it("User can go to wishlist and see their wishlisted course", () => {
    homePage.goToWishlist();
    cy.wait(8000);
    cy.get(".title").should("exist");
  });

  it("User can remove course from wishlist", () => {
    cy.get(':nth-child(1) > .single-course-card > .thumb > .whishlist-icon > .bi').click({waitForAnimations: false});
    cy.wait(5000);
  });

  after(() => {
    cy.clearLocalStorage();
  });
});

