import { TestimonialSection as TestimonialSectionType } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function TestimonialsSection({ title, testimonialsCollection }: TestimonialSectionType) {
  return (
    <section className="py-16 bg-[#FFF0EF]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#F88379]">
          {title || 'What Our Customers Say'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsCollection?.items?.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              {testimonial.quote?.json && (
                <div className="text-gray-700 mb-4">
                  {documentToReactComponents(testimonial.quote.json)}
                </div>
              )}
              <p className="font-semibold text-[#F56A5D]">{testimonial.authorName}</p>
              <p className="text-gray-500">{testimonial.authorTitle}</p>
            </div>
          )) || <p className="text-center text-gray-600">No testimonials available</p>}
        </div>
      </div>
    </section>
  );
}