import useScroll from "@/hooks/useScroll";

export default function HomeBackground() {
    const scrollY = useScroll();

    return (
        <div className="absolute inset-0 z-10">
            <div className="fixed w-70 top-20 p-4 left-5 border-1 border-red-800">
                <h1>DEBUG:</h1>
                <p>Scroll Offset :{scrollY}</p>
            </div>
        </div>
    );
}
