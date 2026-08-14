import type { ClientApplicationContextProps } from "@/types";
import { createContext } from "react";

export const ClientApplicationContext = createContext<ClientApplicationContextProps | null>(null)