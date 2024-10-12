import BasePage from './BasePage';
import { getElement, getElementByXPath, getEnabledButton } from '../utils/cyUtils';
import {
   WELCOME_HEADER,
   USER_PROFILE_BUTTON,
   FROM_INPUT_FIELD,
   DROPDOWN_FROM,
   TO_INPUT_FIELD,
   DROPDOWN_TO,
   DATE_FIELD,
   DAY,
   SEARCH_BUTTON,
   PROFILE_BUTTON,
   LOGOUT_BUTTON,
   LOGO,
   HOME_LINK,
   COMPANY_LINK,
   ABOUT_US_LINK,
   SAFETY_AND_QUALITY_LINK,
   FAQ_LINK,
   HEADER
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
      return getElementByXPath(DROPDOWN_FROM).click();
   }

   enterToLocationIntoSearchForm(to) {
      return getElement(TO_INPUT_FIELD).type(to);
   }

   selectDropdownTo() {
      return getElementByXPath(DROPDOWN_TO).click();
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
      return getElementByXPath(COMPANY_LINK).click();
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

   getHeader() {
      return getElement(HEADER);
   }
}

export default HomePage;
