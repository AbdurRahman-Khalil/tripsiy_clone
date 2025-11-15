
export const DubaiMap = () => {
    return (
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
            <iframe
                title="dubai-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14444.411!2d55.223!3d25.144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69f1f6d0f469%3A0x8b8d36f63d45f02!2sDubai%20Hills%20Mall!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
