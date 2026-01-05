
import { ProductCard } from "./ProductCard";

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <ProductCard />
      </div>
    </section>
  );
}

export default ProductHighlight;
