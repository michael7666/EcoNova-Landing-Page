import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TestimonialsSection as TestimonialsSectionType } from "@/lib/contentful";

export default function TestimonialsSection({
  title,
  testimonialsCollection,
}: TestimonialsSectionType) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title || "What Our Customers Say"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsCollection.items.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <blockquote className="text-gray-600 italic">
                {testimonial.quote?.json ? (
                  documentToReactComponents(testimonial.quote.json)
                ) : (
                  <p>No quote available</p>
                )}
              </blockquote>
              <p className="mt-4 font-semibold">{testimonial.authorName}</p>
              <p className="text-gray-500">{testimonial.authorTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
