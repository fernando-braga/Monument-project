/// <reference types ="cypress" />

class utilsPage{
    
    elements = {
        emailAdressField: () => cy.get('#outlined-adornment-email-login'),
        passwordField: () => cy.get("#outlined-adornment-password-login"),
        signInBtn: () => cy.get('.MuiButtonBase-root.MuiButton-containedSecondary.MuiButton-sizeLarge'),
        leftMenu: () => cy.get('.css-1xq976h'),
        unauthorizedWarning: () => cy.get('.css-4cxybv > .MuiTypography-root'),
    }

    loginOnApplicationAsRestrictUser() {
        cy.visit('/')
        this.elements.emailAdressField().type(Cypress.env('email'));
        this.elements.passwordField().type(Cypress.env('password'));
        this.elements.signInBtn().click();       
    }

    accessRestrictMenuViaUI() {
        this.elements.leftMenu().contains("Dashboard, Tenants, Leads, Communications, Delinquencies, Revenue, Insights, Reports, Biling, Settings").should("not.exist");
        this.elements.leftMenu().should('have.text', 'Units');
    }

    accessRestrictMenuViaURL() {
        const usersAndPermissionsPage = 'https://automatedtests.stg.monument.io/tenants/current?current-tenants=%7E%28sorting%7E%28%7E%28id%7E%27fullName%7Edesc%7Efalse%29%29%7EfilterState%7E%28%29%7Epagination%7E%28pageSize%7E50%7EpageIndex%7E0%29%29'
        const dashboardPage = 'https://automatedtests.stg.monument.io/dashboard'
        
        
        cy.visit(usersAndPermissionsPage);
        this.elements.unauthorizedWarning().should("have.text", "You don’t have permissions to view this page")
        cy.visit(dashboardPage);
        this.elements.unauthorizedWarning().should("have.text", "You don’t have permissions to view this page")
    }
}

export default utilsPage