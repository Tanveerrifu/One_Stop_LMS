import LoginPage from "../pages/LoginPage";
import CoursePage from "../pages/CoursePage";

describe("Course Page", () => {
  const loginPage = new LoginPage();
  const coursePage = new CoursePage();
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
    loginPage.UserCanVisitHome();
    coursePage.UserCanGoToCoursePage();
  });

  //To Verify that user can view their desired course
  it("User can view their desired course", () => {
    coursePage.UserCanViewCourse();
  });

  //To Verify that user can not search by entering less than three character
  it("User can not search by entering less than three character", () => {
    coursePage.searchValidityCheck();
  });
  //To Verify that sorted price high to low is displaying
  it("Sorted price high to low is displaying", () => {
    coursePage.priceHighToLow();
  });
  it("Sorted price low to high is displaying", () => {
    coursePage.priceLowToHigh();
  });
  it("Sorted by newest is displaying", () => {
    coursePage.sortByNewest();
  });
  it("Sorted by popularity is displaying", () => {
    coursePage.sortByPopularity();
  });
  //To Verify that course filter is working
  it("Course filter is working", () => {
    coursePage.courseFilter();
  });
  it("Clear filter is working", () => {
    coursePage.clearFilter();
  });
  it("Course price is showing on course page", () => {
    coursePage.validateCoursePrice();
  });
  it("Author name is showing on course page", () => {
    coursePage.validateMentorName();
  });
  it("Course rating is showing on course page", () => {
    coursePage.validateCourseRatings();
  });
  it("Buy now should shown on the course details page for not purchased course", () => {
    coursePage.vaildateAddToCart();
  });
  it("Add to wishlist should be visible", () => {
    coursePage.valiDateAddToWish();
  });
});
