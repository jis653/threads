import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Dresses', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Marketplace</h1>
            <p className="text-muted-foreground">Discover unique sustainable fashion pieces.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Sort
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-8 gap-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-background text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/product/${product.id}`}>
                <Card className="h-full overflow-hidden group cursor-pointer border-0 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.customizable && (
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 text-xs font-bold text-primary-foreground bg-primary/10 rounded-full border border-primary/20">
                          Customizable
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors text-foreground">
                          {product.name}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-foreground">${product.price}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-600"
                          style={{ width: `${product.sustainabilityScore * 10}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-emerald-600">
                        {product.sustainabilityScore}/10 Eco Score
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}