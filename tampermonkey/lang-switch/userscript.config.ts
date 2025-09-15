import { monkey } from "@cheng/util";
import path from "path";
import pkg from "./package.json";
import { type MonkeyUserScript } from "vite-plugin-monkey";

export const matches: string[] = [
  "*://learn.microsoft.com/*",
  "*://docs.unity3d.com/*",
  "*://docs.python.org/*",
];

export const downloadURL: string = monkey.getUserScriptUrl(
  path.basename(__dirname)
);
export const updateURL: string = downloadURL;

const RootUserScript = await monkey.getRootUserScript();

export const UserScript: MonkeyUserScript = {
  ...RootUserScript,
  version: pkg.version,
  description: pkg.description,
  match: matches,
  downloadURL: downloadURL,
  updateURL: updateURL,
};
