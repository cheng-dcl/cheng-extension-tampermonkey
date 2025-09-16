import { defineConfig } from "vite";
import path from "path";
import { customViteConfig, getUserScript, type CustomViteOptions } from "../../vite.config";
import pkg from "./package.json";
import { extraUserScript } from "./userscript.config";

const appName = path.basename(__dirname);
const userScript = getUserScript(appName, pkg, extraUserScript);

export default defineConfig(({ command }) => {
  const options: CustomViteOptions = { command, appName, userScript }
  return customViteConfig(options);
});