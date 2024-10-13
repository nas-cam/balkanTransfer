import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import MyTransfersPage from "../../pageObjects/MyTransfersPage";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";
const data = require('../../data/balkanTransferData.json');

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
        cy.wait(2000)
    });

    it('should populate from and to fields', () => {
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
    });

    it('should verify search results are displayed', () => {
        searchResultsPage.visitSearchResultPage();
        searchResultsPage.getSearchResultsHeader().should('be.visible').should('contain', 'Select your pick-up address');
        searchResultsPage.insertPickupAddress(data.pickupAddress.pickupAddress);
        searchResultsPage.getPickupDropdown();
        searchResultsPage.clickOnConfirmButton();


        searchResultsPage.getSearchResultsHeader().should('be.visible').and('contain', 'Search results');
        cy.wait(4000);
        searchResultsPage.getRandomItemClickedOnSearchResults();
        searchResultsPage.clickOnBookTripButton();
        searchResultsPage.getRandomTableRowClickedOnFlightSearchResults();
        searchResultsPage.clickOnBookTripButton();
    })
    it('should verify checkout process go without problem', () => {
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
    it('should see the trasnfer and cancel it', () => {
        myTransfersPage.clickOnMyTransfersButton();
        myTransfersPage.getMyTransfersBody().should('contain.text', 'My transfers');
        myTransfersPage.clickOnTransferDialog();
        myTransfersPage.clickOnCancelReservationButton();
        myTransfersPage.clickOnConfirmButtonCancelReservation();
    });
    it('should logout from the user account', () => {
        cy.wait(3000);
        homePage.clickUserButton();
        homePage.clickOnLogoutButton();
    });

});
