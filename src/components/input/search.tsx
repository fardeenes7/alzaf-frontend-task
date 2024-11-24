import { Search } from "../icons";

export default function SearchForm() {
    return (
        <form className="w-full relative">
            <input
                type="text"
                placeholder="Search Product"
                className="w-full h-10 bg-gray-100 px-4 focus:shadow-md rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <button
                type="submit"
                className="absolute right-0 top-0 bg-primary hover:opacity-90 flex flex-col items-center justify-center size-10 rounded-lg"
            >
                <Search />
            </button>
        </form>
    );
}
