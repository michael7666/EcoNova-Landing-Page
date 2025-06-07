// import Image from "next/image";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { FeaturesSection as FeaturesSectionType } from "../../lib/contentful";

// export default function FeaturesSection({
//   title,
//   featuresCollection,
// }: FeaturesSectionType) {
//   return (
//     <section className="py-16 bg-[#F9FAFB]">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-[#87CEEB] text-center mb-12">
//           {title || "Our Features"}
//         </h2>
//         <div className="flex justify-center  gap-6">
//           {featuresCollection.items.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl w-[40%] shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-6">
//               {feature.icon?.url && (
//                 <Image
//                   src={feature.icon.url}
//                   alt={feature.title}
//                   width={48}
//                   height={48}
//                   className="object-contain"
//                 />
//               )}
//               <div>
//                 <h3 className="text-xl font-semibold text-[#89CFF0] mb-2">{feature.title}</h3>
//                 <div className="text-gray-700">
//                   {feature.description?.json ? (
//                     documentToReactComponents(feature.description.json)
//                   ) : (
//                     <p>No description available</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FeaturesSection as FeaturesSectionType } from "../../lib/contentful";

export default function FeaturesSection({
  title,
  featuresCollection,
}: FeaturesSectionType) {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#87CEEB] text-center mb-12 sm:text-3xl">
          {title || "Our Features"}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {featuresCollection.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl w-full sm:w-[40%] w-[40%] shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4 sm:space-x-6"
            >
              {feature.icon?.url && (
                <Image
                  src={feature.icon.url}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain sm:w-12 sm:h-12"
                />
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#89CFF0] mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <div className="text-gray-700 text-sm sm:text-base">
                  {feature.description?.json ? (
                    documentToReactComponents(feature.description.json)
                  ) : (
                    <p>No description available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}