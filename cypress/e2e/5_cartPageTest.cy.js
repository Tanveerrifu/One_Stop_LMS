import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartCheckoutPage";

describe("Cart", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(10000);
    loginPage.UserCanVisitHome();
  });

  //To verify that a user can see the added course in their cart along with the correct total price.
  it("The selected course should be added to the user's shopping cart and user can see total price", () => {
    cartPage.checkCartPrice();
  });
  //To verify that added course title, author name and price is showing on the cart page
  it("The selected course should be added to the user's shopping cart and user can see the details", () => {
    cartPage.checkDetails();
  });
  it("user can delete the course from cart page by clicking delete button", () => {
    cartPage.deleteCourse();
  });
  it("user should not be able to get discount for invalid coupon", () => {
    cartPage.invalidCoupon();
  });

  //failed both automation and manual
  // it.only("user can add the course to wishlist from cart page by clicking wishlist button", () => {
  //     cartPage.courseWishList();
  // });

  it.only("user can purchase the course from cart page by clicking purchase button and pay via bkash", () => {
    cartPage.purchaseCoursePaid();
  });

  it("user can purchase free course from cart page by clicking purchase button", () => {
    cartPage.purchaseCourseFree();
  });
  // //Pending
  // it("verify that system handles invalid payment information with appropriately", () => {
  //   cartPage.purchaseCourseUnsuccessful();
  // });
  //To verify that users can cancel a course purchase before completing the payment.
  it("user can cancel purchase before payment", () => {
    cartPage.purchaseCancel();
  });
});
