import { createContext } from "react";
import type { UserContextProps } from "@/types";

export const UserContext = createContext<UserContextProps | null>(null);
