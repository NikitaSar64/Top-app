import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    sort: SortEmun;
    setSort: (sort: SortEmun) => void
}

export enum SortEmun{
    Rating,
    Price,
}