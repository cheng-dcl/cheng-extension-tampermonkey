// jsonLoader.ts
export async function loadJson<T = unknown>(path: string): Promise<T> {
  // 检测是否在 Node 环境
  const isNode =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;

  if (isNode) {
    // console.log("Node 环境 > LoadJson" + path);
    // Node 环境：使用 createRequire
    const { createRequire } = await import("module");
    const require = createRequire(import.meta.url);
    return require(path) as T;
  } else {
    //浏览器环境：使用动态 import（注意 path 相对于 src 的 URL）似乎也不行
    // const module = await import(/* @vite-ignore */ path);
    // return module.default as T;

    // 浏览器环境用 fetch
    // console.log("浏览器环境 > LoadJson" + path);
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch JSON: ${path}`);
    return (await res.json()) as T;
  }
}
