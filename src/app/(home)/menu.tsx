"use client";
import { Chevron } from "@/components/icons";
import Link from "next/link";
import { useRef, useState } from "react";

type MenuType = {
    id: number;
    title: string;
    parent_id: string;
    category_id: string;
    icon?: string;
    image?: string;
    link: string;
    childrens?: MenuType[];
};

export function Menu({ menu }: { menu: MenuType[] }) {
    return <SubMenu menu={menu} />;
}

function SubMenu({ menu }: { menu: MenuType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="relative top-0 h-full">
            <div className="absolute bg-white text-[#2E2E2E] flex flex-col text-xs w-60 border-l h-full top-0">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="w-full hover:text-primary px-4 py-1.5 "
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {item.childrens ? (
                            <div className="cursor-pointer flex items-center justify-between">
                                {item.title}
                                <button className="text-[#2E2E2E] text-xs">
                                    {item.childrens && (
                                        <Chevron
                                            className={`${
                                                hovered == item.id &&
                                                "transform rotate-180 fill-primary transition-transform duration-150 ease-linear"
                                            }`}
                                        />
                                    )}
                                </button>
                            </div>
                        ) : (
                            <Link href={item.link}> {item.title}</Link>
                        )}

                        {/* {hovered == item.id && item.childrens && ( */}
                        {item.childrens && (
                            <div
                                className={`absolute top-0 left-full h-full bg-white transition-all ease-linear duration-150
                            ${
                                hovered === item.id
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0"
                            }
                            duration-300`}
                            >
                                <SubMenu menu={item.childrens} />
                            </div>
                        )}
                        {/* )} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
