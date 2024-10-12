import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import MyTransfersPage from "../../pageObjects/MyTransfersPage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
const data = require('../../data/balkanTransferData.json');

describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();

    it('should check links on the homepage', () => {
        homePage.visitHomePage();
        homePage.getWelcomeHeader().should('contain.text', 'Welcome');
        homePage.clickOnCompanyLink();
        homePage.clickOnAboutUsLink();
        homePage.getHeader().should('contain.text', 'About us');
        homePage.clickOnCompanyLink();
        homePage.clickOnSafetyAndQualityLink();
        homePage.getHeader().should('contain.text', 'Safety and quality');
        homePage.clickOnCompanyLink();
        homePage.clickOnFaqLink();
        homePage.getHeader().should('contain.text', 'Frequently asked questions');
        homePage.clickOnHomeLink();
    });

    /*  it('should populate from and to fields', () => {
         homePage.visitHomePage();
         homePage.getWelcomeHeader().should('contain.text', 'Welcome');
         homePage.enterFromLocationIntoSearchForm(data.searchFormData.from);
         homePage.selectDropDownFrom();
         homePage.enterToLocationIntoSearchForm(data.searchFormData.to);
         homePage.selectDropdownTo();
         homePage.clickOnDate();
         homePage.selectDay();
         homePage.clickOnSearchButton();
     });
  */
});