export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  fabric: string;
  sustainabilityScore: number; // 1-10
  customizable: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Denim Jacket',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800',
    category: 'Outerwear',
    size: 'M',
    condition: 'Good',
    fabric: '100% Cotton Denim',
    sustainabilityScore: 9,
    customizable: true,
    description: 'Classic 90s denim jacket with natural fading. Perfect canvas for embroidery or patches.'
  },
  {
    id: '2',
    name: 'Upcycled Silk Blouse',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=800',
    category: 'Tops',
    size: 'S',
    condition: 'Like New',
    fabric: '100% Mulberry Silk',
    sustainabilityScore: 10,
    customizable: false,
    description: 'Restored vintage silk blouse with pearl buttons. Breathable and luxurious.'
  },
  {
    id: '3',
    name: 'Reworked Cargo Pants',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1517445312882-5627b9311357?auto=format&fit=crop&q=80&w=800',
    category: 'Bottoms',
    size: '32',
    condition: 'New',
    fabric: 'Organic Cotton Canvas',
    sustainabilityScore: 8,
    customizable: true,
    description: 'Deadstock military fabric reworked into modern cargo pants with adjustable cuffs.'
  },
  {
    id: '4',
    name: 'Patchwork Wool Sweater',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    category: 'Knitwear',
    size: 'L',
    condition: 'New',
    fabric: 'Recycled Wool Blend',
    sustainabilityScore: 10,
    customizable: false,
    description: 'Hand-knit sweater made from reclaimed wool yarn scraps. One of a kind.'
  },
  {
    id: '5',
    name: 'Linen Summer Dress',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    category: 'Dresses',
    size: 'M',
    condition: 'Like New',
    fabric: '100% European Linen',
    sustainabilityScore: 9,
    customizable: true,
    description: 'Breezy linen dress, naturally dyed with indigo. Minimal water usage in production.'
  },
  {
    id: '6',
    name: 'Vegan Leather Tote',
    price: 110.00,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    size: 'One Size',
    condition: 'New',
    fabric: 'Cactus Leather',
    sustainabilityScore: 10,
    customizable: true,
    description: 'Durable tote bag made from organic cactus leather. Cruelty-free and biodegradable.'
  }
];