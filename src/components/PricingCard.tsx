import { Check } from "lucide-react";

interface PricingOption {
  title: string;
  basePrice: number;
  deploymentFee: number;
  hostingFee: number;
  features: string[];
  additionalInfo: string;
}

interface PricingCardProps {
  plan: PricingOption;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-700">
      <h3 className="text-lg font-bold text-white mb-2">{plan.title}</h3>
      <div className="mb-4">
        <p className="text-2xl font-extrabold text-white">
          Rp {plan.basePrice.toLocaleString()}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          + Deployment: Rp {plan.deploymentFee.toLocaleString()}
          <br />+ Hosting: Rp {plan.hostingFee.toLocaleString()} /tahun
        </p>
      </div>
      <ul className="mb-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center mb-2 text-gray-300 text-sm"
          >
            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-400 italic mb-4">{plan.additionalInfo}</p>
      <button className="w-full py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors duration-200 text-sm">
        Pilih Paket
      </button>
    </div>
  );
}
