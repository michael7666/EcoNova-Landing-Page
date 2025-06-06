import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FeaturesSection as FeaturesSectionType } from "@/lib/contentful";

export default function FeaturesSection({
  title,
  featuresCollection,
}: FeaturesSectionType) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title || "Our Features"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresCollection.items.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {feature.icon?.url && (
                <Image
                  src={feature.icon.url}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <div className="text-gray-600">
                {feature.description?.json ? (
                  documentToReactComponents(feature.description.json)
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
