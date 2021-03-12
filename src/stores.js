import { writable } from "svelte/store";
import { UserStore } from "./Stores/user";
import { DocumentsStore } from "./Stores/documents";

export const active = writable(false);
export const currentUser = new UserStore();
export const documents = new DocumentsStore();
