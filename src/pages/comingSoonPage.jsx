import React from 'react';

const ComingSoonPage = () => {
    return (
        <section className="relative py-16" style={{
            backgroundImage: "url('/images/img_image_20.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="flex justify-center">
                <div className="relative w-[637px] h-[69px]">
                    <div className="w-[633px] h-[64px] bg-card-hover border border-black/60 rounded-md shadow-[0px_4px_4px_#888888ff]"></div>
                    <div className="absolute top-[4px] left-[4px] w-[633px] h-[64px] flex items-center justify-center" style={{
                        backgroundImage: "url('/images/img_rectangle_119.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <h2 className="text-3xl font-k2d font-normal leading-[42px] text-white">
                            Coming Soon . . .
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoonPage;
