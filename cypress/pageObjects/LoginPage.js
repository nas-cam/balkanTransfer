import BasePage from './BasePage';

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    visitLoginPage() {
        this.visitPage('/login');
    }

    getEmailInputField() {
        return cy.get("input");
    }
    getEmailErrorMessage() {
        cy.get('//p[@id=":r1a:-helper-text"]');
    }
    getPasswordInputField() {
        return cy.get('input[name="password"]');
    }
    getPasswordErrorMessage() {
        return cy.get("//p[@class='MuiTypography-root MuiTypography-body2 mui-nsphzz']");
    }
    getNextButton() {
        return cy.get('button');
    }
    getSubmitButton() {
        return cy.get('button[type="submit"]');
    }

    loginToPage(username, password) {
        this.getEmailInputField().type(username);
        cy.wait(2000);
        this.getNextButton().click();
        this.getPasswordInputField().type(password);
        cy.wait(2000);
        this.getSubmitButton().click();
        cy.wait(2000);
    }

}

export default LoginPage;
