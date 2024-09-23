import BasePage from './BasePage';


let
    searchResultsHeader = () => cy.xpath("/html/body/div/main/div/header/div/div/div/div[1]/span"),
    routeList = () => cy.get(".MuiBox-root.mui-eyr0e"),
    bookTripButtonOnSearchResult = () => cy.get(".MuiTypography-root.MuiTypography-bodySmallRegular.mui-x6054o"),
    header = () => cy.get(".MuiTypography-root.MuiTypography-bodyLargeRegular.mui-rddso"),
    selectFlightButton = () => cy.get("tbody tr:nth-child(1) td:nth-child(5) button:nth-child(1)"),
    bookTripButton = () => cy.get("div[class='MuiBox-root mui-g5zuwl'] button[type='button']"),
    nextStepCheckout = () => cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.mui-6hy69y"),
    noExtrasInfo = () => cy.get("div[class='MuiBox-root mui-1h6vrpb'] p[class='MuiTypography-root MuiTypography-body1 mui-w4lzw']"),
    termsAndConditionsInfo = () => cy.get(".MuiTypography-root.MuiTypography-body1.mui-102vzuz"),
    payInCashRadioButton = () => cy.get("input[type='radio']"),
    bookingConfirmation = () => cy.get('.MuiTypography-bodyMedium'),
    myTransfersButton = () => cy.get("cy.get('.MuiBottomNavigation-root > .mui-lez1ce > .MuiBox-root > .MuiButton-outlined')");

class SearchResultsPage extends BasePage {
    constructor() {
        super();
    }

    visitSearchResultPage() {
        cy.url().should('include', 'search-result');
    }

    getSearchResultsHeader() {
        return searchResultsHeader();
    }
    clickOnRouteList() {
        return routeList().click();
    }
    clickOnBookTripOnSearchResultButton() {
        return bookTripButtonOnSearchResult().click();
    }

    clickOnSelectFlightButton() {
        return selectFlightButton().click();
    }
    clickOnBookTripButton() {
        return bookTripButton().click();
    }
    getHeader() {
        return header();
    }
    clickOnNextStepCheckout() {
        cy.wait(3000);
        return nextStepCheckout().click();
    }
    getNoExtrasInfo() {
        return noExtrasInfo();
    }
    getTermsAndConditions() {
        cy.wait(2000);
        return termsAndConditionsInfo();
    }
    checkPayInCashRadioButton() {
        return payInCashRadioButton().check();
    }
    getBookingConfirmation() {
        cy.wait(7000);
        return bookingConfirmation();
    }

}

export default SearchResultsPage;
