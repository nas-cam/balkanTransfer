import BasePage from './BasePage';
import { getElement, getEnabledButton } from '../utils/cyUtils';
import {
   MY_TRANSFERS_BUTTON,
   TRANSFER_DIALOG,
   MY_TRANSFERS_BODY,
   CANCEL_RESERVATION_BUTTON,
   CONFIRM_BUTTON_CANCEL_RESERVATION
} from '../selectors/myTransferPageSelectors';

class MyTransfersPage extends BasePage {
   constructor() {
      super();
   }

   clickOnMyTransfersButton() {
      return getElement(MY_TRANSFERS_BUTTON).click();
   }

   clickOnTransferDialog() {
      return getElement(TRANSFER_DIALOG).click();
   }

   getMyTransfersBody() {
      return getElement(MY_TRANSFERS_BODY);
   }

   clickOnCancelReservationButton() {
      return getElement(CANCEL_RESERVATION_BUTTON).click();
   }

   clickOnConfirmButtonCancelReservation() {
      return getEnabledButton(CONFIRM_BUTTON_CANCEL_RESERVATION).click();
   }
}

export default MyTransfersPage;
