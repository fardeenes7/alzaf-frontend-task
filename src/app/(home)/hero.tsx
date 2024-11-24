import { Carousel } from "./carousel";
import { Menu } from "./menu";

async function getMenuList() {
    return await fetch(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
    ).then((res) => res.json());
}

export default async function Hero() {
    const menu = await getMenuList();
    return (
        <div className="w-full h-full relative">
            <Carousel />
            <div className="absolute left-0 top-0 z-20 w-full h-full">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="h-full">
                        <Menu menu={menu} />
                    </div>
                </div>
            </div>
        </div>
    );
}
