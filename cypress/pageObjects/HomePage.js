import BasePage from './BasePage';
require('cypress-xpath');

// Element selectors using arrow functions
let
   welcomeHeader = () => cy.get('body > div.MuiBox-root.mui-19x385r > main > div.MuiBox-root.mui-dfax11 > div > div > h1'),
   userProfileButton = () => cy.get("a[href='/login']"),
   fromInputField = () => cy.xpath('//*[@id=":r2:"]'),
   dropdownFrom = () => cy.xpath("//p[normalize-space()='Tuzla Airport']"),
   toInputField = () => cy.get("input[id=':r4:']"),
   dropdownTo = () => cy.xpath("//p[normalize-space()='Sarajevo airport']"),
   dateField = () => cy.xpath("//input[@id=':r19:']"),
   day = () => cy.xpath("//button[normalize-space()='30']"),
   searchButton = () => cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth mui-23ybp9']");

class HomePage extends BasePage {
   constructor() {
      super();
   }

   visitHomePage() {
      this.visitPage('/');
   }

   clickOnUserProfile() {
      return userProfileButton().click();
   }

   enterFromLocationIntoSearchForm(from) {
      return fromInputField().type(from);
   }

   selectDropDownFrom() {
      return dropdownFrom().click();
   }

   enterToLocationIntoSearchForm(to) {
      cy.wait(200);
      toInputField().type(to);
   }

   selectDropdownTo() {
      cy.wait(200);
      dropdownTo().click();
   }

   clickOnDate() {
      cy.wait(200);
      dateField().click();
   }

   selectDay() {
      cy.wait(200);
      day().click();
   }

   clickOnSearchButton() {
      searchButton().click();
   }
   getWelcomeHeader() {
      return welcomeHeader();
   }
}

export default HomePage;
