import Link from "next/link";

export default function PrimaryBttn() {
    return (
        <div className="">
            <div className="flex flex-col space-y-5 border-secondary/20 border rounded-md p-10">
                <div>
                    <h1 className="text-xl font-bold">Primary Button</h1>
                    <p className="text-text/80">
                        These are an example of Primary Buttons
                    </p>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-10 gap-8">
                    <div className="flex">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-15">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-30">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-60">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-90">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p>Button</p>
                        </Link>
                    </div>

                    <div className="flex hue-rotate-180">
                        <Link
                            href={"#"}
                            className="bg-primary px-6 py-3 rounded-md text-background"
                        >
                            <p className="text-background">Button</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
