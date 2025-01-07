const VideoModal: React.FC<{ youtubeUrl: string; onClose: () => void }> = ({
    youtubeUrl,
    onClose,
  }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-2xl">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${youtubeUrl}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 hover:bg-red-700"
          >
            X
          </button>
        </div>
      </div>
    );
  };
  export default VideoModal;
  