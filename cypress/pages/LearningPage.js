class LearningPage {
  viewMyCourses() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    //cy.contains("Start Now").should("be.visible");
    cy.contains("Complete Russian Language Course").should("be.visible");
    cy.contains("Continue").should("be.visible");
  }
  playCourseVideo() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(50000);
    cy.get("#headingchapterA1 > .h-t").click();
    cy.get(
      "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    ).click();
    cy.get(
      "#collapseOnechapterA0 > .accordion-body > :nth-child(1) > .content > .title"
    ).click();
    cy.wait(50000);
    cy.get("#headingchapterA2 > .h-t").click();
    cy.get(
      "#collapseOnechapterA2 > .accordion-body > .single-v-list > .content > .title"
    ).click();

    // cy.get("#headingchapterA1 > .h-t").click();
    // cy.get(
    //   "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    // ).click();
  }

  downloadContent() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(8000);
    cy.get(".file_dwonload > .bi").click({ force: true });
  }

  clickCourseCurriculam() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(50000);
    cy.get("#headingchapterA1 > .h-t").click();
    cy.get(
      "#collapseOnechapterA1 > .accordion-body > .single-v-list > .content > .title"
    ).click();
    cy.get(
      "#collapseOnechapterA0 > .accordion-body > :nth-child(1) > .content > .title"
    ).click();
    cy.wait(50000);
    cy.get("#headingchapterA2 > .h-t").click();
    cy.get(
      "#collapseOnechapterA2 > .accordion-body > .single-v-list > .content > .title"
    ).click();
  }

  finishedVideo() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(5000);
    cy.get(
      "#collapseOnechapterA0 > .accordion-body > :nth-child(1) > .content > .file-video-status > .status-video > .bi"
    ).should("be.visible");
  }

  courseDetailsOnLearning() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(5000);
    cy.get(".courses-enroll-header-left > p").should("be.visible");
    cy.get(".courses-enroll-header-left > p").should("be.visible");
    cy.get("a > .name").should("be.visible");
    cy.get(".courses-content-left > :nth-child(8)").should("be.visible");
  }

  giveReviewOnCourse() {
    cy.contains("a", "My Course").click({ force: true });
    cy.wait(5000);
    cy.contains("Complete Russian Language Course").click({ force: true });
    cy.wait(5000);
    cy.get(".review-text").click();
    cy.wait(2000);
    // Click the 5th star to give a 5-star rating
    cy.xpath("//body[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/span[5]").click();
    cy.get("#review").type("Good Course");
    cy.get('[data-index="4"]').click({multiple:true, force:true});
    cy.get('#instructor_review').type("Good Instructor");
    cy.get(".submit-cancel-btn > .undefined").click();
  }
}

export default LearningPage;
