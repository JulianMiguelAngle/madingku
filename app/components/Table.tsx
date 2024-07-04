import Image, { StaticImageData } from "next/image";

type RowSize = "small" | "medium" | "large" | "extra-large";

export function Columns({ columns }: { 
    columns: Array<{
        label: string; 
        size: RowSize;
    }>
}) {
    return (
        <tr className="flex items-center gap-x-[18px]">
            {
            columns.map((column, index) => (
                <th scope="col" key={column.label + index}
                className={`
                    h-[32px] text-left text-neutral-600 dark:text-neutral-100 font-medium text-body-small sm:text-body-medium
                    ${column.size === "small" && "w-[60px] sm:w-[80px]"}
                    ${column.size === "medium" && "w-[80px] sm:w-[120px]"}
                    ${column.size === "large" && "w-[120px] sm:w-[160px]"}
                    ${column.size === "extra-large" && "w-[150px] sm:w-[160px]"}
                `}>
                    { column.label }
                </th>
            ))
            }
        </tr>
    );
}

export function RowData({ data, icon, size }: { 
    data: any;
    size: RowSize;
    icon?: StaticImageData;
}) {
    return (
        <td className={`
            min-h-8 h-fit text-left text-neutral-400 dark:text-neutral-200 text-body-small sm:text-body-medium
            flex items-center gap-x-2
            ${size === "small" && "w-[60px] sm:w-[80px]"}
            ${size === "medium" && "w-[80px] sm:w-[120px]"}
            ${size === "large" && "w-[120px] sm:w-[160px]"}
            ${size === "extra-large" && "w-[150px] sm:w-[160px]"}
        `}>
            <span className="w-full overflow-clip text-clip">
                { data }
            </span>

            {icon &&
                <Image
                    src={icon}
                    alt={`${icon} icon`}
                    height={24}
                    width={24}
                />
            }
        </td>
    );
}