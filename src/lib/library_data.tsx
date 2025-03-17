import SimpleNav from "@/components/ui/navigation/simpleNav";
import PrimaryBttn from "@/components/ui/buttons/primary-button";
import SecondaryButton from "@/components/ui/buttons/secondary-button";

// src/lib/library_data.ts
export const componentsData = [
    {
        label: "Buttons",
        slug: "buttons",
        items: [
            {
                label: "Primary Button",
                slug: "primary",
                code: <PrimaryBttn />,
            },
            {
                label: "Secondary Button",
                slug: "secondary",
                code: <SecondaryButton />,
            },
        ],
    },
    {
        label: "Navigation Bar",
        slug: "navbar",
        items: [
            {
                label: "Simple Navigation Bar",
                slug: "simple-nav",
                code: <SimpleNav />,
            },
        ],
    },
    {
        label: "Forms",
        slug: "forms",
        items: [
            {
                label: "Text Input",
                slug: "text-input",
                code: (
                    <input type="text" className="border rounded py-2 px-3" />
                ),
            },
            {
                label: "Select Dropdown",
                slug: "select-dropdown",
                code: (
                    <select className="border rounded py-2 px-3">
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                ),
            },
        ],
    },
];
