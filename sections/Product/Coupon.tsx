export interface Props {
  code: string;
  description: string;
}

export default function Coupon({ code, description }: Props) {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 class="text-lg font-bold mb-2">Desconto Disponível!</h2>
      <div class="flex items-center justify-between bg-gray-100 p-4 rounded">
        <span class="text-gray-700">Código:</span>
        <span class="bg-blue-500 text-white px-3 py-1 rounded">{code}</span>
      </div>
      <p class="text-gray-600 mt-4">{description}</p>
    </div>
  );
}
