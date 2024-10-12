import BasePage from './BasePage';
import { getElement, getElementByXPath, getEnabledButton } from '../utils/cyUtils';
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
        return getEnabledButton(NEXT_STEP_CHECKOUT).click();
    }

    getNoExtrasInfo() {
        return getElement(NO_EXTRAS_INFO);
    }

    getTermsAndConditions() {
        return getElement(TERMS_AND_CONDITIONS_INFO);
    }

    checkPayInCashRadioButton() {
        return getElement(PAY_IN_CASH_RADIO_BUTTON).check();
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
}

export default SearchResultsPage;
