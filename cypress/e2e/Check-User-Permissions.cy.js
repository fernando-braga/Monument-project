/// <reference types ="cypress" />

import utilsPage from "./PageUtils";

describe('login', () => {
    const pageUtils = new utilsPage(); 

    beforeEach('Acess Application as Restrict User', () => {
        pageUtils.loginOnApplicationAsRestrictUser();
        cy.wait(200);
    });

    it('Ensure a user without permission cannot access restricted areas ', () => {
        pageUtils.accessRestrictMenuViaUI();
        pageUtils.accessRestrictMenuViaURL();
    })
})