// cyUtils.js

import 'cypress-xpath';

// Existing helper functions
export const getElement = (selector) => {
    return cy.get(selector).should('be.visible');
};

export const getElementByXPath = (xpath) => {
    return cy.xpath(xpath).should('be.visible');
};

export const getElementByMessage = (selector, message) => {
    return cy.contains(selector, message).should('be.visible');
};

export const getEnabledButton = (selector) => {
    return cy.get(selector).should('be.enabled');
};

export const verifyDiscoveredLinkAndPageHeader = (pageObject, rootLinkClick, linkToBeClicked, headerMethod, expectedHeader ) => {
    rootLinkClick();
    linkToBeClicked();
    headerMethod().should('contain.text', expectedHeader);
};