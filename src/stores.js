import { writable } from "svelte/store";
import { userStore } from "./stores/user";

export const active = writable(false);

export const currentUser = userStore(false);
