"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Menu } from "./menu";
import { DotButton, useDotButton } from "./carousel-dot";

export function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div
            className="embla overflow-hidden h-[391px] w-full relative"
            ref={emblaRef}
        >
            <div className="z-10 embla__container flex size-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="embla__slide">
                        <Image
                            src="/images/banner.png"
                            alt="Offer Banner"
                            width={1920}
                            height={500}
                            className="size-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>
            <div className="z-30 absolute top-[90%] left-[50%] -translate-x-1/2 embla__dots flex gap-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`size-3 rounded-full border-white embla__dot "${
                            index === selectedIndex
                                ? " embla__dot--selected bg-primary"
                                : " bg-white"
                        }
                        )`}
                    />
                ))}
            </div>
        </div>
    );
}
