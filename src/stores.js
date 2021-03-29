import { writable } from "svelte/store";
import { UserStore } from "./stores/user";
import { DocumentsStore } from "./stores/documents";

export const active = writable(false);
export const currentUser = new UserStore();
export const documents = new DocumentsStore();
