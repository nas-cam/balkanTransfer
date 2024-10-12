import HomePage from "../../pageObjects/HomePage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
import {verifyDiscoveredLinkAndPageHeader} from '../../utils/cyUtils'; // Import helper functions
const data = require('../../data/balkanTransferData.json');

describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitHomePage();
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
});
