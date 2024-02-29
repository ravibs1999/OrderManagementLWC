declare module "@salesforce/apex/OrderController.getProdDetails" {
  export default function getProdDetails(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderController.getOrdDetails" {
  export default function getOrdDetails(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderController.getRecordId" {
  export default function getRecordId(): Promise<any>;
}
declare module "@salesforce/apex/OrderController.getProducts" {
  export default function getProducts(param: {searchBy: any, searchText: any, pbId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderController.createOrderProducts" {
  export default function createOrderProducts(param: {selectedProducts: any, priceBookId: any, orderId: any}): Promise<any>;
}
