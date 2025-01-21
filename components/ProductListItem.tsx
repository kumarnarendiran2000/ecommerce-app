import { Text } from "react-native";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function ProductListItem({ product }: { product: Product }) {
  return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
}
