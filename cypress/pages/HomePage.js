class HomePage {
  UserCanSeeAllCourses() {
    cy.wait(5000);
    cy.contains("a", "Courses").click();
  }
  languageChange() {
    cy.get(".multi-lang").contains("বাংলা").click({ force: true });
  }
  UserCanSeeCartValue() {
    cy.get(".count-num").should('be.visible');
  }
  UserCanScrollDown() {
    cy.scrollTo("bottom");
  }
  UserCanJoinLiveSeason() {
    cy.contains("Join Live Session").invoke("removeAttr", "target").click({force:true});
  }
  UserCanSeeLogo() {
    cy.get(".h-logo").should("be.visible");
  }
  clickingSlider() {
    cy.get(
      ".hero-slider > .owl-carousel > .owl-dots > :nth-child(1) > span"
    ).click({ force: true });
    cy.get(".hero-slider > .owl-carousel > .owl-dots > :nth-child(3)").click({
      force: true,
    });
  }
  searchCourse() {
    cy.get('input[placeholder="Search..."]').type('{enter}');
    cy.get('input[placeholder="Search..."]').type("java").type("{enter}");
    cy.get('.title-sec2').should('contain', 'java');
  }
  searchBlog() {
    cy.get(".search-from").type("{enter}");
    cy.wait(2000);
    cy.get(".search-from").type(
      "Digital Design That Will Help You Start Your Business123"
    );
    cy.get(".search-from").type("{enter}");
  }

  goToTop() {
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.get(".back-to-top-btn").click({ force: true });
  }
  searchInvalidValue() {
    cy.get('input[placeholder="Search..."]').type('{enter}');
    cy.get('input[placeholder="Search..."]').type("#[[''0").type("{enter}");
    cy.get('.no-courses-found > strong').should('contain', 'No Course Found');
    cy.wait(15000);
    
  }
  goToWishlist() {
    cy.get('.header-right > .header-user-dropdwon').contains('Wishlist').click({force:true});
  }
}
export default HomePage;
