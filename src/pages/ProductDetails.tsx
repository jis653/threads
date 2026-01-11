import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingBag, Scissors, Star, Truck, ShieldCheck } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/marketplace">
            <Button>Back to Marketplace</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Link to="/marketplace" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-primary font-medium">{product.category}</span>
              <h1 className="text-4xl font-bold text-foreground mt-2 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-foreground">${product.price}</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {product.condition} Condition
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Fabric</p>
                  <p className="font-medium text-foreground">{product.fabric}</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Size</p>
                  <p className="font-medium text-foreground">{product.size}</p>
                </div>
              </div>

              <div className="p-4 border border-emerald-100 bg-emerald-50/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-emerald-500 fill-emerald-500" />
                  <span className="font-bold text-emerald-900">Sustainability Score: {product.sustainabilityScore}/10</span>
                </div>
                <p className="text-sm text-emerald-700">
                  This item saves approximately 400 gallons of water compared to buying new.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:sticky lg:top-24">
              <Button size="lg" className="w-full text-lg h-14 bg-primary text-primary-foreground shadow-md hover:shadow-lg">
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              {product.customizable && (
                <Link to="/customization">
                  <Button variant="outline" size="lg" className="w-full text-lg h-14">
                    <Scissors className="mr-2 h-5 w-5" /> Customize This Item
                  </Button>
                </Link>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Free carbon-neutral shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Quality guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}