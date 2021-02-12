import * as Appwrite from "appwrite";

const SDK = {
  sdk: new Appwrite(),
  setConfig: config => {
    SDK.sdk
      .setEndpoint(config.endpoint)
      .setProject(config.project)
      .setLocale(config.locale);
  },
};

export default SDK;
