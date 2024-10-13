// cyUtils.js

import 'cypress-xpath';

// Existing helper functions
export const getElement = (selector, shouldBeVisible = true) => {

    if (shouldBeVisible) {
        return cy.get(selector).should('be.visible');
    }
    return cy.get(selector);
};


export const getElementByXPath = (xpath) => {
    return cy.xpath(xpath).should('be.visible');
};


export const getElementByMessage = (selector, message) => {
    return cy.contains(selector, message).should('be.visible');
};

export const getElementToWrap = (selector) => {
    return cy.wrap(selector);
};

export const getEnabledButton = (selector) => {
    return cy.get(selector).should('be.visible').should('not.be.disabled');
};

export const verifyDiscoveredLinkAndPageHeader = (pageObject, rootLinkClick, linkToBeClicked, headerMethod, expectedHeader) => {
    rootLinkClick();
    linkToBeClicked();
    headerMethod().should('contain.text', expectedHeader);
};
