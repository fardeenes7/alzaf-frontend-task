import Image from "next/image";
import TopHeader from "./top-header";
import Link from "next/link";
import SearchForm from "@/components/input/search";
import { Cart, User, Wishlist } from "@/components/icons";

export default function Header() {
    return (
        <div className="w-full bg-white">
            <TopHeader />
            <div>
                <div className="py-2.5 mx-auto max-w-7xl flex items-center gap-8">
                    <div className="h-12 w-36">
                        <Image
                            src="/images/logo/logo.png"
                            alt="alzaf"
                            width={129}
                            height={38}
                            className="object-cover size-full"
                        />
                    </div>
                    <SearchForm />
                    <div className="flex items-center gap-2">
                        <Link href="#">
                            <User />
                        </Link>
                        <Link href="#">
                            <Cart />
                        </Link>
                        <Link href="#">
                            <Wishlist />
                        </Link>
                    </div>
                    <Link href="#">
                        <Image
                            src="/images/logo/cloud-service.svg"
                            alt="alzaf"
                            width={200}
                            height={70}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
