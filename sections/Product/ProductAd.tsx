// import { ProductDetailsPage } from "apps/commerce/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Product {
  title: string;
  /** @format textarea */
  description?: string;
  price: string;
  // imageSrc: string;
  imageSrc: ImageWidget;
}

export interface Props {
  product: Product;
  /** @format textarea */
  adDescription?: string;
}

export default function ProductAd({ product, adDescription }: Props) {
  return (
    <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto h-full md:h-auto">
      <div class="relative md:w-1/3">
        <img
          src={product.imageSrc}
          alt={product.title}
          class="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
        />
        <button class="absolute top-4 right-4 md:hidden px-4 py-2 rounded-full border border-black text-black bg-primary-500 hover:bg-primary-600">
          Salvar
        </button>
      </div>
      <div class="p-6 flex flex-col justify-between text-center md:w-2/3 md:text-left md:relative">
        <div class="flex flex-col justify-center md:flex-row md:justify-between mb-6">
          <div class="flex flex-col justify-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-2">{product.title}</h2>
            <p class="text-gray-600 mb-6 md:mb-8">
              {adDescription ? adDescription : product.description}
            </p>
          </div>
          <button class="hidden md:block px-4 py-2 rounded-full border border-black text-black bg-primary-500 hover:bg-primary-600 mb-16">
            Salvar
          </button>
        </div>
        <div class="flex flex-col space-y-4 mt-auto items-center md:items-end">
          <p class="text-xl font-bold text-green-600">{product.price}</p>
          <div class="flex flex-col justify-center space-y-4 md:space-y-0 md:space-x-4 md:justify-end md:flex-row">
            <button class="px-2 py-1 md:px-4 md:py-2 rounded-full border border-black text-black bg-primary-500 hover:bg-primary-600">
              Mais detalhes
            </button>
            <button class="px-2 py-1 md:px-4 md:py-2 rounded-full border border-black text-black bg-primary-500 hover:bg-primary-600">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
