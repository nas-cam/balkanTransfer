import HomePage from "../../pageObjects/HomePage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
import {verifyDiscoveredLinkAndPageHeader} from '../../utils/cyUtils'; // Import helper functions
const data = require('../../data/balkanTransferData.json');

describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();

    beforeEach(() => {
        homePage.visitHomePage();
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnLanguageDropdown, homePage.clickOnEnglishLanguage, homePage.getLanguageDropdown,'ENG');
        homePage.getWelcomeHeader().should('contain.text', 'Welcome');
    });

    // Verify all Company-related links on the homepage
    it('should verify all Company-related links on the homepage', () => {
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnCompanyLink, homePage.clickOnAboutUsLink, homePage.getPageHeader, 'About us');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnCompanyLink, homePage.clickOnSafetyAndQualityLink, homePage.getPageHeader, 'Safety and quality');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnCompanyLink, homePage.clickOnFaqLink, homePage.getPageHeader, 'Frequently asked questions');
    });

    // Verify all Discover-related links on the homepage
    it('should verify all Discover-related links on the homepage', () => {
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnDiscoverLink, homePage.clickOnBlogLink, homePage.getPageHeader, 'Blog');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnDiscoverLink, homePage.clickOnTransfersLink, homePage.getPageHeader, 'Transfers');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnDiscoverLink, homePage.clickOnDestinationsLink, homePage.getPageHeader, 'Destinations');
    });

    it('should check Offers and News link on the homepage', () => {
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnOffersAndNewsLink, homePage.getOffersNewsHeader, homePage.getPageHeader, 'Offers & News');
    });

    it('should verify the currency dropdown on the homepage', () => {
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnCurrencyDropdown, homePage.clickOnEurCurrency, homePage.getCurrencyDropdown,'Euro');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnCurrencyDropdown, homePage.clickOnBamCurrency, homePage.getCurrencyDropdown,'Bosnian convertible mark');
    });

    it('should verify the language dropdown on the homepage', () => {
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnLanguageDropdown, homePage.clickOnEnglishLanguage, homePage.getLanguageDropdown,'ENG');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnLanguageDropdown, homePage.clickOnBosnianLanguage, homePage.getLanguageDropdown,'BOS');
        verifyDiscoveredLinkAndPageHeader(homePage, homePage.clickOnLanguageDropdown, homePage.clickOnEnglishLanguage, homePage.getLanguageDropdown,'ENG');
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
