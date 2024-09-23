import HomePage from "../pageObjects/HomePage";

describe('Smoke Test Suite', () => {
    it('should check if there is Welcome header on homepage', () => {
        const homePage = new HomePage();
        homePage.getWelcomeHeader();
    });
});