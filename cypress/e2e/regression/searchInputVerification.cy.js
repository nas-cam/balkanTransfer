import HomePage from "../../pageObjects/HomePage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
import MyTransfersPage from "../../pageObjects/MyTransfersPage";

const data = require('../../data/balkanTransferData.json');
import { pickRandomElement } from "../../utils/cyUtils";
describe('Regression User Side Test Suite', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const myTransfersPage = new MyTransfersPage();


    it('should populate from and to fields add pick-up address, should verify search results and query data', () => {
        homePage.visitHomePage();
        homePage.getWelcomeHeader().should('contain.text', 'Welcome');
        homePage.enterFromLocationIntoSearchForm(data.searchFormData.from);
        homePage.selectDropDownFrom();
        cy.wait(2000);
        homePage.enterToLocationIntoSearchTo(data.searchFormData.to);
        homePage.selectDropdownTo();
        cy.wait(2000);
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
        searchResultsPage.getSearchResultsHeader().should('be.visible').and('contain', 'Search results');
        cy.wait(3000);
        searchResultsPage.getRandomItemClickedOnSearchResults();
        searchResultsPage.clickOnBookTripButton();
        searchResultsPage.getRandomTableRowClickedOnFlightSearchResults();
        searchResultsPage.clickOnBookTripButton();
    });
    it('should login into the application', () => {
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.enterEmail(data.loginCredentials.email);
        searchResultsPage.clickOnNextButton();
        searchResultsPage.enterPassword(data.loginCredentials.password);
        searchResultsPage.clickOnNextButton();

    });
    it('should go through a checkout without problems', () => {
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.getHeader().should('contain.text', 'Checkout');
        cy.wait(2000);
        searchResultsPage.clickOnNextStepCheckout();
        searchResultsPage.getNoExtrasInfo().should('contain.text', 'No extras available for selected trip.');
        searchResultsPage.clickOnNextStepCheckout();
        searchResultsPage.getTermsAndConditions().should('contain.text', 'By proceeding with the payment you agree to the Terms and Conditions');
        searchResultsPage.checkPayInCashRadioButton();
        searchResultsPage.clickOnNextStepCheckout();
        cy.wait(7000);
        searchResultsPage.getBookingConfirmation().should('contain.text', 'is confirmed');
    });

    it('should see the transfer and cancel it', () => {
        myTransfersPage.clickOnMyTransfersButton();
        myTransfersPage.getMyTransfersBody().should('contain.text', 'My transfers');
        myTransfersPage.clickOnTransferDialog();
        myTransfersPage.clickOnCancelReservationButton();
        myTransfersPage.clickOnConfirmButtonCancelReservation();
    });
    it('should logout from the user account', () => {
        cy.wait(5000);
        homePage.clickUserButton();
        homePage.clickOnLogoutButton();
    });
});
