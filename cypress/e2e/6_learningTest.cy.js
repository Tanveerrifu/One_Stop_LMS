import LearningPage from "../pages/LearningPage";
import LoginPage from "../pages/LoginPage";

describe("Learning Page", () => {
  const learningPage = new LearningPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(8000);
  });

  it("User can see purchased course on their profile", () => {
    learningPage.viewMyCourses();
  });

  //To Verify that by clicking "Start Now" user should redirect to course enrolled page and able to play course video
  it.only("User should re direct to can play course video", () => {
    learningPage.playCourseVideo();
  });

  it("User should able to download course content", () => {
    learningPage.downloadContent();
  });
  it("should check downloaded file", () => {
    cy.readFile("cypress/downloads/16755628705012_Thumb.zip");
  });
  it("User should be able to click course curriculam and play video", () => {
    learningPage.clickCourseCurriculam();
  });

  it.only("User should be able to view finished video mark", () => {
    learningPage.finishedVideo();
  });

  it("User should be able to view course total student, author name and review of the course", () => {
    learningPage.courseDetailsOnLearning();
  });

  //To Verify that user should be able to give review on courses
  it.skip("User should be able to give review on courses", () => {
    learningPage.giveReviewOnCourse();
  });
});
