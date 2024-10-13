import BasePage from './BasePage';
import { getElement, getElementByXPath, getEnabledButton } from '../utils/cyUtils';
import {
   ABOUT_US_LINK,
   BLOG_HEADER,
   BLOG_LINK,
   COMPANY_LINK,
   CURRENCY_DROPDOWN,
   DATE_FIELD,
   DAY,
   DESTINATIONS_LINK,
   DISCOVER_LINK,
   DROPDOWN_FROM,
   DROPDOWN_TO,
   ENGLISH_LANGUAGE,
   BOSNIAN_LANGUAGE,
   EUR_CURRENCY,
   BAM_CURRENCY,
   FAQ_LINK,
   FROM_INPUT_FIELD,
   PAGE_HEADER,
   HOME_LINK,
   LANGUAGE_DROPDOWN,
   LOGO,
   LOGOUT_BUTTON,
   OFFERS_AND_NEWS_LINK,
   OFFERS_NEWS_HEADER,
   PROFILE_BUTTON,
   SAFETY_AND_QUALITY_LINK,
   SEARCH_BUTTON,
   TO_INPUT_FIELD,
   TRANSFERS_LINK,
   USER_PROFILE_BUTTON,
   WELCOME_HEADER
} from '../selectors/homePageSelectors';

class HomePage extends BasePage {
   constructor() {
      super();
   }

   visitHomePage() {
      this.visitPage('/');
   }

   clickOnUserProfile() {
      return getElement(USER_PROFILE_BUTTON).click();
   }

   enterFromLocationIntoSearchForm(from) {
      return getElementByXPath(FROM_INPUT_FIELD).type(from);
   }

   selectDropDownFrom() {
      // Ensure the dropdown is visible and interactable
      return getElementByXPath(DROPDOWN_FROM)
         .should('be.visible')
         .should('have.css', 'pointer-events', 'auto')
         .click({ force: true });
   }


   enterToLocationIntoSearchTo(to) {
      return getElement(TO_INPUT_FIELD, false).type(to);
   }

   selectDropdownTo() {
      return getElementByXPath(DROPDOWN_TO)
         .should('be.visible')
         .should('have.css', 'pointer-events', 'auto')
         .click({ force: true });
   }

   clickOnDate() {
      return getElementByXPath(DATE_FIELD).click();
   }

   selectDay() {
      return getElementByXPath(DAY).click();
   }

   clickOnSearchButton() {
      return getElementByXPath(SEARCH_BUTTON).click();
   }

   getWelcomeHeader() {
      return getElement(WELCOME_HEADER);
   }

   clickUserButton() {
      return getElementByXPath(PROFILE_BUTTON).click();
   }

   clickOnLogoutButton() {
      return getElement(LOGOUT_BUTTON).click();
   }

   clickOnLogo() {
      return getElement(LOGO).click();
   }

   clickOnHomeLink() {
      return getElementByXPath(HOME_LINK).click();
   }

   clickOnCompanyLink() {
      return getElement(COMPANY_LINK).click();
   }

   clickOnAboutUsLink() {
      return getElement(ABOUT_US_LINK).click({ force: true });
   }

   clickOnSafetyAndQualityLink() {
      return getElement(SAFETY_AND_QUALITY_LINK).click({ force: true });
   }

   clickOnFaqLink() {
      return getElement(FAQ_LINK).click();
   }

   getPageHeader() {
      return getElement(PAGE_HEADER);
   }
   clickOnDiscoverLink() {
      return getElement(DISCOVER_LINK).click();
   }
   clickOnBlogLink() {
      return getElement(BLOG_LINK).click();
   }
   getBlogHeader() {
      return getElement(BLOG_HEADER);
   }
   clickOnTransfersLink() {
      return getElement(TRANSFERS_LINK).click();
   }
   clickOnDestinationsLink() {
      return getElement(DESTINATIONS_LINK).click();
   }
   clickOnOffersAndNewsLink() {
      return getElement(OFFERS_AND_NEWS_LINK).click();
   }
   getOffersNewsHeader() {
      return getElementByXPath(OFFERS_NEWS_HEADER);
   }
   clickOnCurrencyDropdown() {
      return getElement(CURRENCY_DROPDOWN).click();
   }
   clickOnEurCurrency() {
      return getElement(EUR_CURRENCY).click();
   }
   clickOnBamCurrency() {
      return getElement(BAM_CURRENCY).click();
   }
   clickOnLanguageDropdown() {
      return getElementByXPath(LANGUAGE_DROPDOWN).click();
   }
   clickOnEnglishLanguage() {
      return getElement(ENGLISH_LANGUAGE).click();
   }

   clickOnBosnianLanguage() {
      return getElement(BOSNIAN_LANGUAGE).click();
   }

   getCurrencyDropdown() {
      return getElement(CURRENCY_DROPDOWN);
   }
   getLanguageDropdown() {
      return getElementByXPath(LANGUAGE_DROPDOWN);
   }


}

export default HomePage;
