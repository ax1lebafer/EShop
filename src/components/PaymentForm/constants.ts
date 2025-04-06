import { IPaymentFormFormValues } from './types.ts';

export const initialValues: IPaymentFormFormValues = {
  firstName: '',
  lastName: '',
  phone: '',
  shippingMethod: 'delivery',
  address: '',
  cardHolder: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
};
