import Link from "next/link";

export default function SecondaryButton() {
    return (
        <div className="">
            <div className="flex flex-col space-y-5 border-secondary/20 border rounded-md p-10">
                <div>
                    <h1 className="text-xl font-bold">Secondary Button</h1>
                    <p className="text-text/80">
                        These are an example of secondary button
                    </p>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-10 gap-8">
                    <div className="flex hue-rotate-0">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-15">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>
                    <div className="flex hue-rotate-30">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>
                    <div className="flex hue-rotate-60">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>
                    <div className="flex hue-rotate-90">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>
                    <div className="flex hue-rotate-180">
                        <Link
                            href={"#"}
                            className="bg-background border-1 border-primary px-6 py-3 rounded-md"
                        >
                            <p>Button</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
