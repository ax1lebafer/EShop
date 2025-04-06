export interface IPaymentFormFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  shippingMethod: 'delivery' | 'pickup';
  address: string;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface IPaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
}
