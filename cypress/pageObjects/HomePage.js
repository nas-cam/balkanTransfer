import BasePage from './BasePage';
require('cypress-xpath');

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
   logoutButton = () => cy.get("body > div.MuiPopover-root.MuiModal-root.mui-jp7szo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.mui-b0iwh3 > div > nav > div"),
   logo = () => cy.get("body > div.MuiBox-root.mui-19x385r > main > header > div > div > div > div.MuiBox-root.mui-xd1q75 > a > img"),
   homeLink = () => cy.xpath("//button[normalize-space()='Home']"),
   companyLink = () => cy.xpath("//button[normalize-space()='Company']"),
   aboutUsLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(1) > li"),
   safetyAndQualityLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(2) > li"),
   faqLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(3) > li"),
   header = () => cy.get("body > div.MuiBox-root.mui-19x385r > main > div.MuiBox-root.mui-a1o77m > div > div > span.MuiTypography-root.MuiTypography-h4Medium.mui-1lvltin"),
   discoverLink = () => cy.xpath("/html/body/div[1]/main/header/div/div/div/div[2]/div[2]/button[2]"),
   blogLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(1) > li"),
   transfersLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(2) > li"),
   destinationsLink = () => cy.get("body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.mui-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.mui-q1c362 > ul > a:nth-child(3) > li"),
   blogHeader = () => cy.get("body > div.MuiBox-root.mui-19x385r > main > div.MuiBox-root.mui-8tb0gr > main > div > div.MuiBox-root.mui-a1o77m > div > div > span.MuiTypography-root.MuiTypography-h4Medium.mui-1lvltin"),
   offersAndNewsLink = () => cy.get("body > div.MuiBox-root.mui-19x385r > main > header > div > div > div > div.MuiBox-root.mui-0 > div.MuiBox-root.mui-rstqio > a:nth-child(4) > button"),
   offersNewsHeader = () => cy.xpath("/html/body/div[1]/main/div[1]/main/div/div[1]/div/div/span[1]"),
   currencyDropdown = () => cy.get("#locale-select"),
   eurCurrency = () => cy.xpath("//li[normalize-space()='Euro']");

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
   clickOnLogo() {
      logo().click();
   }
   clickOnHomeLink() {
      homeLink().click();
   }
   clickOnCompanyLink() {
      companyLink().click();
   }
   clickOnAboutUsLink() {
      aboutUsLink().click();
   }
   clickOnSafetyAndQualityLink() {
      safetyAndQualityLink().click();
   }
   clickOnFaqLink() {
      faqLink().click();
   }
   getHeader() {
      return header();
   }
   clickOnDiscoverLink() {
      discoverLink().click();
   }
   clickOnBlogLink() {
      blogLink().click();
   }
   clickOnTransfersLink() {
      transfersLink().click();
   }
   clickOnDestinationsLink() {
      destinationsLink().click();
   }
   getBlogHeader() {
      return blogHeader();
   }
   clickOnOffersAndNewsLink() {
      offersAndNewsLink().click();
   }
   getOffersNewsHeader() {
      return offersNewsHeader();
   }
   clickOnCurrencyDropdown() {
      currencyDropdown().click();
   }
   getcurrencyDropdown() {
      return currencyDropdown();
   }
   clickOnEurCurrency() {
      eurCurrency().click();
   }


}

export default HomePage;
