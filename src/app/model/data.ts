interface Information {
  name: string;
  zip: number;
  city: string;
  street: string;
  comment: string;
}
interface Data {
  name: string;
  /**
   * Date: DD/MM/YYYY
   */
  birthDay: string;
  billingInformation: Information;
  hasShippingInformation: boolean;
  shippingInformation?: Information;
  products: {
    id: number;
    quantity: number;
    amountUnit: string;
  }[];
}
