
export const GalleryItem = ({ title, galleryImg }) => {
    return (
        <img
            className="min-w-[258px] h-[233px] object-cover object-center rounded-xl"
            src={galleryImg}
            alt={`${title}' s gallery image`}
        />
    );
};
