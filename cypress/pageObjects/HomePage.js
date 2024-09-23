import BasePage from "./BasePage";

class HomePage extends BasePage {
   constructor() {
      super();
   }


   getWelcomeHeader() {
      return cy.get('body > div.MuiBox-root.mui-19x385r > main > div.MuiBox-root.mui-dfax11 > div > div > h1');
   }
}

export default HomePage;
