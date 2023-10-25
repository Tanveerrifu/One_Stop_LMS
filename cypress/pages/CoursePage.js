class CoursePage {
  UserCanGoToCoursePage() {
    cy.get(".h-logo").click();
  }
  UserCanViewCourse() {
    cy.wait(5000);
    cy.get(
      ".pt-35 > .container > :nth-child(2) > :nth-child(1) > .single-course-card > .thumb > a > img"
    ).click();
    cy.get(".title").should("contain", "Arabic Language | The Complete Course");
  }
  searchValidityCheck() {
    cy.get(".filter-search").type("ab").type("{enter}");
    cy.get(".error-message").should(
      "contain",
      "Name length should be at least 3"
    );
  }

  //not passed
  priceHighToLow() {
    cy.get('.pt-35 > .container > :nth-child(1) > .col-lg-12 > button').click({force:true});
    cy.get(".courses-sorted-list").contains('High to low').click({force:true});
  }
  priceLowToHigh() {
    cy.get('.pt-35 > .container > :nth-child(1) > .col-lg-12 > button').click({force:true});
    cy.get('.courses-sorted-list').click({force:true});
    cy.contains('Low to high').click({force:true});

  }
  sortByNewest(){
    cy.get('.pt-35 > .container > :nth-child(1) > .col-lg-12 > button').click({force:true});
    cy.get('.courses-sorted-list').click({force:true});
    cy.contains('Newest').click({force:true});
    cy.wait(5000);
  }
  sortByPopularity(){
    cy.get('.pt-35 > .container > :nth-child(1) > .col-lg-12 > button').click({force:true});
    cy.get('.courses-sorted-list').click({force:true});
    cy.contains('Popularity').click({force:true});
    cy.wait(5000);
  }
  courseFilter(){
    cy.get('.filter-btn-section').click();
    cy.get('#headingPrice').click();
    cy.get('span:contains("Free")').click();
  }
  clearFilter(){
    cy.get('.filter-btn-section').click();
    cy.get('#headingPrice').click();
    cy.get('span:contains("Paid")').click();
    cy.wait(5000);
    cy.get('span:contains("Clear All")').click();
  }
  validateCoursePrice(){
    cy.get('.price').should('be.visible');
  }
  validateMentorName(){
    cy.get('.mentor-name').should('be.visible');
  }
  validateCourseRatings(){
    cy.get('.courses-ratings').should('be.visible');
  }
  vaildateAddToCart(){
    cy.wait(5000);
    cy.contains('a','View Details').click();
    cy.get('button:contains("Buy Now")').should('be.visible');
  }
  valiDateAddToWish(){
    cy.wait(8000);
    cy.contains('a','View Details').click();
    cy.get('.whishlist-icon').should('be.visible');
  }
  





















  
}


export default CoursePage;
