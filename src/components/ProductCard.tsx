
import { Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Product } from '../types/product';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative group">
        <div className="flex flex-col">
          <img
            src={product.image}
            alt={`${product.name} - Vue 1`}
            className="w-full h-60 sm:h-56 md:h-52 lg:h-48 object-cover"
            // Hauteur augmentée de 15% par rapport aux valeurs d'origine:
            // h-52 -> h-60 (augmentation de 15%)
            // h-48 -> h-56 (augmentation de 15%)
            // h-44 -> h-52 (augmentation de 15%)
            // h-40 -> h-48 (augmentation de 15%)
          />
          <img
            src={product.image2 || product.image}
            alt={`${product.name} - Vue 2`}
            className="w-full h-60 sm:h-56 md:h-52 lg:h-48 object-cover"
          />
        </div>
        <div className="absolute top-2 right-2 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full w-8 h-8">
            <Heart className="h-3 w-3" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full w-8 h-8">
            <Share2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-[10px] mb-1 text-left truncate">{product.name}</h3>
        <div className="text-xs text-gray-600 space-y-0.5 text-left">
          <p>Clarté: {product.specs.clarity}</p>
          <p>Couleur: {product.specs.color}</p>
          <p>Taille: {product.specs.cut}</p>
          <p>Dimensions: {product.specs.dimensions}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-sm">{product.price}</span>
          <Button variant="default" size="sm" className="text-xs px-2 py-1">
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
