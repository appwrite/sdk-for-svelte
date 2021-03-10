import { writable } from "svelte/store";
import { UserStore } from "./Stores/user";

export const active = writable(false);
export const currentUser = new UserStore();
