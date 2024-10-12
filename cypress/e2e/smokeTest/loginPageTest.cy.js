import LoginPage from "../../pageObjects/LoginPage";
import data from '../../data/balkanTransferData.json';

describe('Login Test Suite', () => {
    let loginPage;

    before(() => {
        // Create an instance of the LoginPage before all tests
        loginPage = new LoginPage();
    });

    beforeEach(() => {
        // Visit the login page before each test
        loginPage.visitLoginPage();
    });

    it('should login with valid credentials', () => {
        // Perform login with valid credentials loaded from JSON file
        loginPage.loginToPage(data.loginCredentials.email, data.loginCredentials.password);
    });

    it('should show an error when email is empty', () => {
        // Test for empty email field
        loginPage.getNextButton().click();
        loginPage.getEmailErrorMessage().should('contain.text', 'Email is required');
    });

    it('should show an error for invalid email formats', () => {
        data.invalidEmails.forEach((invalidEmail) => {
            loginPage.loginStep1(invalidEmail, data.loginCredentials.password);
            loginPage.getEmailErrorMessage().should('contain.text', 'Invalid email address');
        });
    });

    it('should show an error for incorrect password', () => {
        // Test for incorrect password
        loginPage.loginToPage(data.loginCredentials.email, 'wrongpassword');
        loginPage.getPasswordErrorMessage().should('contain.text', 'Wrong email or password. Please try again.');
    });

    afterEach(() => {
        // Optionally, clear cookies or carry out any necessary cleanup
        cy.clearCookies();
    });
});
