// import { ProductDetailsPage } from "apps/commerce/types.ts";

interface Product {
  title: string;
  description?: string;
  price: string;
  imageSrc: string;
}

export interface Props {
  product: Product;
  adDescription?: string;
  display: "Desktop" | "Tablet" | "Mobile";
}

export default function ProductAd({ product, adDescription, display }: Props) {
  if (display === "Desktop") {
    return (
      <div class="flex bg-white border border-gray-400 rounded-lg p-4 max-w-3xl mx-auto">
        <img
          src={product.imageSrc}
          alt={product.title}
          class="h-80 w-1/3 object-cover rounded-lg mr-4"
        />
        <div class="flex-grow flex flex-col justify-between">
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">{product.title}</h2>
            <button class="bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400">
              Salvar
            </button>
          </div>
          <p class="text-gray-600 mt-2">
            {adDescription ? adDescription : product.description}
          </p>
          <div class="mt-auto flex flex-col items-end">
            <span class="text-lg font-semibold mb-2">{product.price}</span>
            <div class="flex">
              <button class="bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400 mr-2">
                Comprar
              </button>
              <button class="bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400">
                Mais detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (display === "Mobile" || display === "Tablet") {
    return (
      <div class="flex flex-col bg-white border border-gray-400 rounded-lg p-4 max-w-sm mx-auto lg:hidden">
        <div class="relative">
          <img
            src={product.imageSrc}
            alt={product.title}
            class="w-full h-36 object-cover rounded-lg"
          />
          <button class="absolute top-2 right-2 bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400">
            Salvar
          </button>
        </div>
        <div class="mt-4 text-center">
          <h2 class="text-xl font-bold">{product.title}</h2>
          <p class="text-gray-600 mt-2">
            {adDescription ? adDescription : product.description}
          </p>
        </div>
        <div class="mt-16 flex flex-col items-center">
          <span class="text-lg font-semibold mb-2">{product.price}</span>
          <div class="flex flex-col items-center w-full">
            <button class="bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400 mb-2 w-3/4">
              Comprar
            </button>
            <button class="bg-secundary-500 px-4 py-2 rounded-lg border border-gray-400 w-3/4">
              Mais detalhes
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}
