class ProfilePage {
  userName() {
    cy.get(".overly-text-full > .name").should("be.visible");
  }
  avatar() {
    cy.get('.thumb > img').should("be.visible");
  }
  dropDown() {
    cy.get('.user_img').realHover('mouse');
    cy.wait(5000);
  }
}

export default ProfilePage;
