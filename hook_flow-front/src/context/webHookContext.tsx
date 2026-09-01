import type { WebHookContextProps } from "@/types";
import { createContext } from "react";

export const WebHookContext = createContext<WebHookContextProps | null>(null)