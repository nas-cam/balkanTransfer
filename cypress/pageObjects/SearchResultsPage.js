import BasePage from './BasePage';
import { getElement, getElementByXPath, getEnabledButton, getElementByMessage } from '../utils/cyUtils';
import {
    SEARCH_RESULTS_HEADER,
    ROUTE_LIST,
    BOOK_TRIP_BUTTON_ON_SEARCH_RESULT,
    HEADER,
    SELECT_FLIGHT_BUTTON,
    BOOK_TRIP_BUTTON,
    NEXT_STEP_CHECKOUT,
    NO_EXTRAS_INFO,
    TERMS_AND_CONDITIONS_INFO,
    PAY_IN_CASH_RADIO_BUTTON,
    BOOKING_CONFIRMATION,
    MY_TRANSFERS_BUTTON,
    PICKUP_ADDRESS,
    PICKUP_DROPDOWN,
    CONFIRM_BUTTON,
    SEARCH_QUERY_HEADER,
    SEARCH_RESULT_LIST,
    USER_INFO_PARAGRAPH_TEXT,
    EMAIL_INPUT,
    NEXT_BUTTON,
    ERROR_MESSAGE,
    PASSWORD_INPUT
} from '../selectors/searchResultsPageSelectors';

class SearchResultsPage extends BasePage {
    constructor() {
        super();
    }

    visitSearchResultPage() {
        cy.url().should('include', 'search-result');
    }

    getSearchResultsHeader() {
        return getElementByXPath(SEARCH_RESULTS_HEADER);
    }

    clickOnRouteList() {
        return getElement(ROUTE_LIST).click();
    }

    clickOnBookTripOnSearchResultButton() {
        return getElement(BOOK_TRIP_BUTTON_ON_SEARCH_RESULT).click();
    }

    clickOnSelectFlightButton() {
        return getElement(SELECT_FLIGHT_BUTTON).click();
    }

    clickOnBookTripButton() {
        return getElement(BOOK_TRIP_BUTTON).click();
    }

    getHeader() {
        return getElement(HEADER);
    }
    clickOnNextStepCheckout() {
        return getEnabledButton(NEXT_STEP_CHECKOUT, false).click();
    }
    getNoExtrasInfo() {
        return getElement(NO_EXTRAS_INFO);
    }

    getTermsAndConditions() {
        return getElement(TERMS_AND_CONDITIONS_INFO);
    }

    checkPayInCashRadioButton() {
        return getElement(PAY_IN_CASH_RADIO_BUTTON, false).check();
    }

    getBookingConfirmation() {
        return getElement(BOOKING_CONFIRMATION);
    }

    getPickupAddress() {
        return getElementByXPath(PICKUP_ADDRESS);
    }

    insertPickupAddress(address) {
        this.getPickupAddress().type(address);
    }

    getPickupDropdown() {
        return getElementByXPath(PICKUP_DROPDOWN).click();
    }

    clickOnConfirmButton() {
        return getElementByXPath(CONFIRM_BUTTON).click();
    }
    getSearchQueryHeader() {
        return getElementByXPath(SEARCH_QUERY_HEADER);
    }
    getRandomItemClickedOnSearchResults() {
        // Select all divs with the class 'MuiBox-root mui-0'
        getElement('div.MuiBox-root.mui-0', false) // Adjust this selector if necessary to match the parent div class
            .then((divs) => {
                // Count the number of div elements
                const count = divs.length;

                // Check if there are any divs
                if (count > 0) {
                    // Generate a random index from the available div elements
                    const randomIndex = Math.floor(Math.random() * count);

                    // Log the index (optional)
                    cy.log('Clicking div at index: ' + randomIndex);

                    // Click the randomly selected div
                    cy.wrap(divs[randomIndex]).click();
                } else {
                    // Log that no divs were found
                    cy.log('No div elements found.');
                }
            });
    }
    getRandomTableRowClickedOnFlightSearchResults() {
        getElement('table.MuiTable-root tbody tr', false)
            .then((rows) => {
                const rowCount = rows.length;
                if (rowCount > 0) {
                    const randomIndex = Math.floor(Math.random() * rowCount);
                    cy.wrap(rows[randomIndex]).find('button').click();
                } else {
                    cy.log('No table rows found.');
                }
            });
    };
    verifyUserInformation() {
        return getElement(USER_INFO_PARAGRAPH_TEXT);
    }
    getEmailInputField() {
        return getElement(EMAIL_INPUT, false);
    }
    enterEmail(email) {
        this.getEmailInputField().type(email, false);
    }
    getErrorMessage() {
        return getElementByXPath(ERROR_MESSAGE);
    }
    clickOnNextButton() {
        return getElement(NEXT_BUTTON).click();
    }
    getPasswordInputField() {
        return getElement(PASSWORD_INPUT, false);
    }
    enterPassword(password) {
        this.getPasswordInputField().type(password);
    }


}


export default SearchResultsPage;
