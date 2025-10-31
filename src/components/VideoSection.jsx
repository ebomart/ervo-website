import { videoContent } from '../company-assets/content';

const VideoSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('${videoContent.backgroundImage}')`
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <button className="relative z-10 w-24 h-24 bg-bg-primary rounded-full flex items-center justify-center hover:bg-bg-tertiary transition-colors shadow-lg">
              <svg className="w-12 h-12 text-text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-center text-text-tertiary mt-6 text-base leading-normal">
          {videoContent.caption}
        </p>
      </div>
    </section>
  );
};

export default VideoSection;

