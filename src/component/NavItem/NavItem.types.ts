import {FunctionComponent, SVGProps} from "react";

export interface NavItemProps {
    path: string
    name: string
    icon: FunctionComponent<SVGProps<SVGSVGElement> & {title?: string}>
}