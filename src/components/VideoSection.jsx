import { videoContent } from "../company-assets/content";

const VideoSection = () => {
  return (
    <section className="w-full px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="relative min-h-[340px] w-full overflow-hidden rounded-xl shadow-xl">
          <div
            className="absolute inset-0 flex items-center justify-center bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${videoContent.backgroundImage}')`,
            }}
          >
            <button className="bg-bg-primary hover:bg-bg-tertiary relative z-10 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full shadow-lg transition-colors">
              <svg
                className="text-text-primary ml-1 h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-text-tertiary mt-6 text-center text-base leading-normal">
          {videoContent.caption}
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
