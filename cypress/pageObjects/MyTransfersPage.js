import BasePage from './BasePage';

let
   myTransfersButton = () => cy.get(".MuiBottomNavigation-root > .mui-lez1ce > .MuiBox-root > .MuiButton-outlined"),
   transferDialog = () => cy.get("#app-tabpanel-0 > div > div > div > div > div > div"),
   myTransfersBody = () => cy.get('.MuiTypography-titleSemibold'),
   cancelReservationButton = () => cy.get('body > div.MuiBox-root.mui-19x385r > main > div > div > div > section > main > div > div.MuiBox-root.mui-7oyeuh > button'),
   confirmButtonCancelReservation = () => cy.get("body > div.MuiDialog-root.MuiModal-root.mui-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.mui-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.mui-dzk89o > button");


class MyTransfersPage extends BasePage {
   constructor() {
      super();
   }

   clickOnMyTransfersButton() {
      return myTransfersButton().click();
   }
   clickOnTransferDialog() {
      return transferDialog().click();
   }
   getMyTransfersBody() {
      return myTransfersBody();
   }
   clickOnCancelReservationButton() {
      return cancelReservationButton().click();
   }
   clickOnConfirmButtonCancelReservation() {
      cy.wait(2000);
      return confirmButtonCancelReservation().click();
   }


}

export default MyTransfersPage;
