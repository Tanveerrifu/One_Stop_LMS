import LoginPage from "../pages/LoginPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LearningPage from "../pages/LearningPage";

describe("Course Page", () => {
  const loginPage = new LoginPage();
  const learningPage = new LearningPage();
  const homePage = new HomePage();
  const profilePage = new ProfilePage();
  const profileImage="avatar.jpg";

  before(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(5000);
  });

  //To Verify that user can view their desired course
  it.skip("User can view course", () => {
    cy.wait(8000);
    profilePage.userName();
  });

//profile avatar should be visible
    it.skip("User can view avatar", () => {
        profilePage.avatar();
    });

    //user can click on dropdown
    it.skip("User can click on dropdown", () => {
        profilePage.dropDown();
    });
    //user can upload profile photo
    it.skip("User should upload profile image",()=>{
      cy.get('#file-input-image').attachFile(profileImage);
      cy.get('.action-block > :nth-child(3)').click();
      cy.wait(5000);
      cy.get('.Toastify__toast-body > :nth-child(2)').should("include.text","Profile Picture Updated Successfully");
    })
    
    //user bio should be visible
    it.skip("User see view bio", () => {
        profilePage.bio();
    });

    //achievement should be visible
    it.skip("User can see achievement", () => {
        profilePage.achievement();
    });
    it.skip("User can see purchased course", () => {
      learningPage.viewMyCourses();
    });
    //user can view session
    it.skip("User can view session", () => {
      profilePage.mySessions();
    });
    //user should able to see user status
    it.skip("User can view user status", () => {
      profilePage.userStatus();
    });
    //user should able to see payment history
    it.skip("User can view payment history", () => {
      profilePage.paymentHistory();
    });
    //user should able to see previous payment history
    it.skip("User can view previous payment history", () => {
      profilePage.previousPaymentHistory();
    });
    //user should able to see payment details
    it.skip("User can view payment details by clicking payment details button", () => {
      profilePage.paymentDetailsBtn();
    });
    //user should able to see settings
    it("User can view settings", () => {
      profilePage.settings();
    });
    //user should able to see user details settings and update first name
    it("User can update first name", () => {
      profilePage.userFirstName();
    });
    //update last name
    it("User can update last name", () => {
      profilePage.userLastName();
    });
    //update title
    it("User can update profile title", () => {
      profilePage.profileTitle();
    });
    //update employment
    it("User can update employment", () => {
      profilePage.currentEmployment();
    });
    //update portfolio
    it("User can update portfolio", () => {
      profilePage.portfolioLink();
    });
    //update language
    it("User can update language", () => {
      profilePage.language();
    });
    //update bio
    it("User can update bio", () => {
      profilePage.bio();
    });
    //save
    it("User can save details", () => {
      cy.xpath("//div[@class='action-btn text-center']//button[@type='submit'][normalize-space()='Save']").click({force:true});
      cy.wait(8000);
    });
    //input social link
    it("User can input social link and save successfully", () => {
      profilePage.socialLink();
    });
    //update notification
    it("User can update notification", () => {
      profilePage.notification();
    });

  after(() => {
    cy.clearLocalStorage();
  });
});

