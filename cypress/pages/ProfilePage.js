class ProfilePage{
    userName(){
        cy.get('.overly-text-full > .name').should('be.visible');
    }

}