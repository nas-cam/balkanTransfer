import HomePage from "../../pageObjects/HomePage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
const data = require('../../data/balkanTransferData.json');

describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();

    beforeEach(() => {
        homePage.visitHomePage();
        homePage.getWelcomeHeader().should('contain.text', 'Welcome');
    });


    it('should populate from and to fields add pick-up address, should verify search results and query data', () => {
        homePage.enterFromLocationIntoSearchForm(data.searchFormData.from);
        homePage.selectDropDownFrom();
        homePage.enterToLocationIntoSearchForm(data.searchFormData.to);
        homePage.selectDropdownTo();
        homePage.clickOnDate();
        homePage.selectDay();
        homePage.clickOnSearchButton();
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.getSearchResultsHeader()
            .should('be.visible')
            .should('contain', 'Select your pick-up address');
        searchResultsPage.insertPickupAddress(data.pickupAddress.pickupAddress);
        searchResultsPage.getPickupDropdown();
        searchResultsPage.clickOnConfirmButton();
        searchResultsPage.getSearchQueryHeader().contains(data.searchFormData.from);
        searchResultsPage.getSearchQueryHeader().contains(data.searchFormData.to);





    });
});
