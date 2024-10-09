import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import MyTransfersPage from "../pageObjects/MyTransfersPage";
import SearchResultsPage from "../pageObjects/SearchResultsPage";
const data = require('../data/balkanTransferData.json');

describe('Smoke Test Suite', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const searchResultsPage = new SearchResultsPage();
    const myTransfersPage = new MyTransfersPage();

    it('should check for Welcome header on homepage', () => {
        homePage.visitHomePage();
        homePage.getWelcomeHeader().should('contain.text', 'Welcome');
        homePage.clickOnUserProfile();
    });

    it('should login', () => {
        loginPage.visitLoginPage();
        loginPage.loginToPage(data.loginCredentials.email, data.loginCredentials.password);
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

    it('should verify search results are displayed', () => {
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.getSearchResultsHeader().should('be.visible').should('contain', 'Select your pick-up address');
        searchResultsPage.insertPickupAddress(data.pickupAddress.pickupAddress);
        searchResultsPage.getPickupDropdown();
        searchResultsPage.clickOnConfirmButton();


        searchResultsPage.clickOnRouteList();
        searchResultsPage.clickOnBookTripOnSearchResultButton();
        searchResultsPage.getHeader().should('contain.text', 'Flight number');
        searchResultsPage.clickOnSelectFlightButton();
        searchResultsPage.clickOnBookTripButton();
    })
    it('should verify checkout process go without problem', () => {
        searchResultsPage.getHeader().should('contain.text', 'Checkout');
        searchResultsPage.clickOnNextStepCheckout();
        searchResultsPage.getNoExtrasInfo().should('contain.text', 'No extras available for selected trip.');
        searchResultsPage.clickOnNextStepCheckout();
        searchResultsPage.getTermsAndConditions().should('contain.text', 'By proceeding with the payment you agree to the Terms and Conditions');
        searchResultsPage.checkPayInCashRadioButton();
        searchResultsPage.clickOnNextStepCheckout();
        searchResultsPage.getBookingConfirmation().should('contain.text', 'is confirmed');

    });
    it('should see the trasnfer and cancel it', () => {
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
