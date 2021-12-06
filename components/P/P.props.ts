import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
}