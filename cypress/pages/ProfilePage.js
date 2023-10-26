class ProfilePage {
  userName() {
    cy.get(".overly-text-full > .name").should("be.visible");
  }
  avatar() {
    cy.get(".thumb > img").should("be.visible");
  }
  dropDown() {
    cy.get(".user_img").realHover("mouse");
    cy.wait(5000);
  }
  bio() {
    cy.get(".private-view-profile > :nth-child(1) > .title").should(
      "be.visible"
    );
  }
  achievement() {
    cy.get(":nth-child(2) > .title").should("be.visible");
  }
  mySessions() {
    cy.get(".profile-header > ul > :nth-child(4) > a").click();
    cy.get(".col-12").should("be.visible");
  }
  userStatus() {
    cy.get(".notification-stext").should("be.visible");
  }
  paymentHistory() {
    cy.get(".profile-header > ul > :nth-child(7) > a").click();
    cy.get(".heading > h2").should("include.text", "Order Details");
    cy.wait(8000);
  }
  previousPaymentHistory() {
    cy.get(".heading > h2");
    cy.get("thead > tr > .price").should("be.visible");
    cy.get("thead > tr > .price").should("be.visible");
    cy.get("thead > tr > .price").should("be.visible");
  }
  paymentDetailsBtn() {
    cy.get(":nth-child(1) > .dwonload > button").click({ force: true });
    cy.wait(5000);
    cy.get(".dwonload-btn > .button-1").click({ force: true });
    cy.wait(5000);
  }
  settings() {
    cy.wait(8000);
    cy.get(".profile-header > ul > :nth-child(6) > a").should("be.visible");
    cy.get(".profile-header > ul > :nth-child(6) > a").click({ force: true });
    cy.wait(5000);
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .heading-title > h2"
    ).should("include.text", "Basic Info");
  }
  userFirstName() {
    cy.wait(5000);
    cy.get('input[name="first_name"]').clear().type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should(
      "include.text",
      "First name should be between 2 to 17 characters long"
    );
    cy.get('input[name="first_name"]').clear({ force: true }).type("Xavier");
  }
  userLastName() {
    cy.wait(5000);
    cy.get('input[name="last_name"]').clear({ force: true }).type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should(
      "include.text",
      "Last name should be between 2 to 17 characters long"
    );
    cy.get('input[name="last_name"]').clear({ force: true }).type("Pena");
  }
  profileTitle() {
    cy.wait(5000);
    cy.get('input[name="profile_title"]').clear({ force: true }).type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should(
      "include.text",
      "Profile Title should be between 3 to 25 characters long"
    );
    cy.get('input[name="profile_title"]')
      .clear({ force: true })
      .type("QA Engineer");
  }
  currentEmployment() {
    cy.wait(5000);
    cy.get('input[name="current_employment"]').clear({ force: true }).type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should(
      "include.text",
      "Current Employment should be between 3 to 25 characters long"
    );
    cy.get('input[name="current_employment"]')
      .clear({ force: true })
      .type("Shadhinlab");
  }
  portfolioLink() {
    cy.wait(5000);
    cy.get('input[name="portfolio_link"]').clear({ force: true }).type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should("include.text", "Please enter valid url");
    cy.get('input[name="portfolio_link"]')
      .clear({ force: true })
      .type("https://github.com/tanveerrifu");
  }
  language() {
    cy.wait(5000);
    cy.get('input[name="language"]')
      .click({ force: true })
      .clear()
      .type("Bengali");
  }
  bio() {
    cy.wait(5000);
    cy.get('textarea[name="bio"]').clear({ force: true }).type("a");
    cy.get(
      ".mt-45 > .col-lg-12 > .profile-setting-card > .body-content"
    ).click();
    cy.wait(5000);
    cy.get(".error-message").should(
      "include.text",
      "Short bio should be between 150 to 1250 characters long"
    );
    cy.get('textarea[name="bio"]')
      .clear({ force: true })
      .type(
        "I am a QA Engineer. My name is Tanvir Hasan. I live in Dhaka, Bangladesh I am a QA Engineer. My name is Tanvir Hasan. I live in Dhaka, Bangladesh I am a QA Engineer. "
      );
  }
  socialLink() {
    cy.wait(5000);
    cy.get('input[name="facebook"]').type(
      "https://web.facebook.com/tanveerr.city/",
      { force: true }
    );
    cy.get('input[name="linkedin"]').type(
      "https://www.linkedin.com/in/tanvir-hasan-sqa/",
      { force: true }
    );
    cy.get('input[name="twitter"]').type(
      "https://twitter.com/neymarjr?lang=en",
      { force: true }
    );
    cy.wait(5000);
    cy.xpath(
      "//div[@class='add-social-media-link']//button[@type='submit'][normalize-space()='Save']"
    ).click({ force: true });
  }
  notification() {
    cy.get('#notification-courses-tab').click({ force: true });
    cy.wait(8000);
    cy.get(
      ":nth-child(2) > .single-notification-item > .right > span > input"
    ).click({force:true});
    cy.get(
      ":nth-child(3) > .single-notification-item > .right > span > input"
    ).click({force:true});
    cy.get(".body-content > .row > .col-12 > .action-btn > .button-1").click({force:true});
    cy.wait(5000);
  }
}

export default ProfilePage;
