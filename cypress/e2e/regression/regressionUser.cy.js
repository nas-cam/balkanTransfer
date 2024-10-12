import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import MyTransfersPage from "../../pageObjects/MyTransfersPage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
const data = require('../../data/balkanTransferData.json');

describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();

    it('should check links under Company dropdown on the homepage', () => {
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
    it('should check links under Discover dropdown on the homepage', () => {
        homePage.clickOnDiscoverLink();
        homePage.clickOnBlogLink();
        homePage.getBlogHeader().should('contain.text', 'Blog');
        homePage.clickOnDiscoverLink();
        homePage.clickOnTransfersLink();
        homePage.getBlogHeader().should('contain.text', 'Transfers');
        homePage.clickOnDiscoverLink();
        homePage.clickOnDestinationsLink();
        homePage.getBlogHeader().should('contain.text', 'Destinations');
    });
    it('should check Offers and news link on the homepage', () => {
        homePage.clickOnOffersAndNewsLink();
        homePage.getOffersNewsHeader().should('contain.text', 'Offers & News');
    });

    it('should check currency dropdown on the homepage', () => {
        homePage.clickOnCurrencyDropdown();
        homePage.clickOnEurCurrency();
        homePage.getcurrencyDropdown().should('contain.text', 'Euro');
    });
    it('should check language dropdown on the homepage', () => {
        homePage.clickOnLanguageDropdown();
        homePage.clickOnEnglishLanguage();
        homePage.getLanguageDropdown().should('contain.text', 'ENG');
    });

    it('should populate from and to fields', () => {
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
    it('should add pick-up address', () => {
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.getSearchResultsHeader().should('be.visible').should('contain', 'Select your pick-up address');
        searchResultsPage.insertPickupAddress(data.pickupAddress.pickupAddress);
        searchResultsPage.getPickupDropdown();
        searchResultsPage.clickOnConfirmButton();
    });
    it('should verify search results are displayed and the search query is correct', () => {
        searchResultsPage.getSearchQueryHeader().contains(data.searchFormData.from);
        searchResultsPage.getSearchQueryHeader().contains(data.searchFormData.to);
    });

});