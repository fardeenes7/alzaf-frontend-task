import { Chevron } from "@/components/icons";
import Link from "next/link";

export default function TopHeader() {
    return (
        <div className="w-full bg-[#F0F1F1] text-[#434343] py-2 text-[12px]">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 text-primary">
                        English <Chevron className="fill-primary -rotate-90" />
                    </button>
                    <Link href="#" className="hover:text-primary">
                        Help Center
                    </Link>
                    <Link href="#" className="hover:text-primary">
                        Helpline: 0964781656
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="#" className="hover:text-primary">
                        Become a Seller
                    </Link>

                    <Link href="#" className="hover:text-primary">
                        Order Track
                    </Link>

                    <Link href="#" className="text-primary">
                        Sign up / Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
