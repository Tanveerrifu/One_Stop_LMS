import QuizPage from "../pages/QuizPage";
import LearningPage from "../pages/LearningPage";
import LoginPage from "../pages/LoginPage";

describe("Learning Page", () => {
  const learningPage = new LearningPage();
  const loginPage = new LoginPage();
  const quizPage = new QuizPage();
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage.userlogin("tanvir.cse.cu@gmail.com", "maverick@07");
    cy.wait(8000);
    cy.get(".profile-header > ul > :nth-child(3) > a").click();
  });
  it("User should be able to attend purchased course quizes", () => {
    quizPage.attendQuiz();
  });

  it("User should be able to attend quizes anytime he want", () => {
    quizPage.attendQuiz();
  });

  //To Verify that quiz result shown to user after every quiz test
  it("User should be able to see his quiz result after every quiz test", () => {
    quizPage.performQuiz();
  });

  it.only("User should be able to retake quiz for wrong answer", () => {
    quizPage.retakeQuiz();
  });
});
