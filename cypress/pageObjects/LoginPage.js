import BasePage from './BasePage';
import {getElement, getElementByMessage, getElementByXPath, getEnabledButton} from '../utils/cyUtils';
import {
    EMAIL_INPUT,
    EMAIL_ERROR_MESSAGE,
    PASSWORD_INPUT,
    PASSWORD_ERROR_MESSAGE,
    NEXT_BUTTON,
    SUBMIT_BUTTON
} from '../selectors/loginPageSelectors';

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    visitLoginPage() {
        this.visitPage('/login');
    }

    getEmailInputField() {
        return getElement(EMAIL_INPUT);
    }

    getEmailErrorMessage() {
        return getElementByMessage('p', EMAIL_ERROR_MESSAGE);
    }

    getPasswordInputField() {
        return getElement(PASSWORD_INPUT);
    }

    getPasswordErrorMessage() {
        return getElementByMessage('p', PASSWORD_ERROR_MESSAGE);
    }

    getNextButton() {
        return getElementByMessage('button', NEXT_BUTTON);
    }

    getSubmitButton() {
        return getElementByMessage('button', SUBMIT_BUTTON);
    }

    loginToPage(username, password) {
        this.getEmailInputField().type(username);
        this.getNextButton().click();
        this.getPasswordInputField().type(password);
        this.getSubmitButton().click();
    }

    loginStep1(username) {
        this.getEmailInputField().clear().type(username);
        this.getNextButton().click();
    }

    loginStep2(password) {
        this.getPasswordInputField().type(password);
        this.getSubmitButton().click();
    }
}

export default LoginPage;
