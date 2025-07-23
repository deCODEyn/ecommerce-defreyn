export interface QuantitySelectorInterface {
  productName: string;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}
