import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import path from "path";
import { UserScript } from "./userscript.config";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: UserScript,
      build: {
        fileName: `${path.basename(__dirname)}.user.js`,
      },
    }),
  ],
});
