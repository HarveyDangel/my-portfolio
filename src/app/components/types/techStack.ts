import { JSX } from "react";

export type TechItem = {
   id: string;
   name: string;
   icon: JSX.Element;
   category: 'frontend' | 'backend' | 'development tool';
 };