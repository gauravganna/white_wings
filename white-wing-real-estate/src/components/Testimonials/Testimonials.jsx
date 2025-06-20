import { TEXT_TESTIMONIALS, VIDEO_TESTIMONIALS, TESTIMONIALS_CONFIG } from '../../constants/testimonials-data'
import TextTestimonialCard from './TextTestimonialCard'
import VideoTestimonialCard from './VideoTestimonialCard'

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-14 md:py-28 px-4 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="mb-6 md:mb-12">
          <div className="max-w-[560px]">
            <h2 className="text-black text-[28px] md:text-[40.89px] font-bold leading-[1.30] tracking-[-0.029em]">
              {TESTIMONIALS_CONFIG.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-6 md:gap-16">
          {/* Text Testimonials Row - Horizontally Scrollable */}
          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 md:gap-16 pb-4 scrollbar-hide">
              {TEXT_TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0">
                  <TextTestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Video Testimonials Row - Horizontally Scrollable */}
          <div className="w-full">
            <div className="flex overflow-x-auto gap-5 md:gap-6 pb-4 scrollbar-hide">
              {VIDEO_TESTIMONIALS.map((video) => (
                <div key={video.id} className="flex-shrink-0">
                  <VideoTestimonialCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 