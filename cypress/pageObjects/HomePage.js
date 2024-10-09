import BasePage from './BasePage';
require('cypress-xpath');

// Element selectors using arrow functions
let
   welcomeHeader = () => cy.get('body > div.MuiBox-root.mui-19x385r > main > div.MuiBox-root.mui-dfax11 > div > div > h1'),
   userProfileButton = () => cy.get("a[href='/login']"),
   fromInputField = () => cy.xpath('//*[@id=":r2:"]'),
   dropdownFrom = () => cy.xpath("//p[normalize-space()='Brčko NC']"),
   toInputField = () => cy.get("input[id=':r4:']"),
   dropdownTo = () => cy.xpath("//div[@class='MuiBox-root mui-3hg8yt']"),
   dateField = () => cy.xpath("//input[@id=':r19:']"),
   day = () => cy.xpath("//button[normalize-space()='30']"),
   searchButton = () => cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth mui-23ybp9']"),
   profileButton = () => cy.xpath('//div[@class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault mui-14rrwnw"]'),
   logoutButton = () => cy.get("body > div.MuiPopover-root.MuiModal-root.mui-jp7szo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.mui-b0iwh3 > div > nav > div");


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
      return dropdownTo().click();
   }

   clickOnDate() {
      cy.wait(200);
      return dateField().click();
   }

   selectDay() {
      cy.wait(200);
      return day().click();
   }

   clickOnSearchButton() {
      return searchButton().click();
   }


   getWelcomeHeader() {
      return welcomeHeader();
   }
   clickUserButton() {
      profileButton().click();
   }
   clickOnLogoutButton() {
      logoutButton().click();
   }
}

export default HomePage;
