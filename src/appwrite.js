import { Appwrite } from "appwrite";

export const SDK = {
  sdk: new Appwrite(),
  setConfig: config => {
    SDK.sdk
      .setEndpoint(config.endpoint)
      .setProject(config.project)
      .setLocale(config.locale);
  },
};
