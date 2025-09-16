/**
 * 在开发环境中预加载所需的脚本依赖
 * @param requires 需要加载的脚本URL数组
 * @param onComplete 所有脚本加载完成后的回调函数
 * @param onError 脚本加载失败时的回调函数
 */
export function DevPreRequires(
  requires: string[],
  onComplete: () => void,
  onError?: (url: string, error: string | Event) => void
): void {
  console.log(`PreRequires: ${requires}`);

  let loadedCount = 0;
  const totalScripts = requires.length;

  const handleScriptLoad = (url: string) => {
    console.log(`${url} loaded in development mode`);
    loadedCount++;

    if (loadedCount === totalScripts) {
      onComplete();
    }
  };

  const handleScriptError = (url: string, error: string | Event) => {
    console.error(`Failed to load script: ${url}`, error);
    if (onError) {
      onError(url, error);
    }

    // 即使某个脚本加载失败，也继续尝试加载其他脚本
    loadedCount++;
    if (loadedCount === totalScripts) {
      onComplete();
    }
  };

  // 并行加载所有脚本
  requires.forEach((url) => {
    console.log(`Loading script: ${url}`);
    const script = document.createElement("script");

    script.src = url;
    script.async = true; // 启用异步加载

    script.onload = () => handleScriptLoad(url);
    script.onerror = (error) => handleScriptError(url, error);

    document.head.appendChild(script);
  });
}

/**
 * 如果是在dev状态下，引入第三方库加载不到，则手动加载,比如jQuery
 *
 */

//1.注入jQuery
//if (import.meta.env.DEV && typeof $ === "undefined") {
// let script = document.createElement("script");
// script.src = "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js";
// script.onload = () => {
//   console.log("jQuery loaded in development mode");
// };
// document.head.appendChild(script);
//}

// console.log(window);
// console.log(monkeyWindow);
// console.log(unsafeWindow);

// //2.引用monkey里的jQuery到window
// if (unsafeWindow == window) {
//   console.log("scope->host");

//   window["$"] = monkeyWindow["$"];
//   window["jQuery"] = monkeyWindow["jQuery"];
// } else {
//   console.log("scope->monkey");
//   if (unsafeWindow == monkeyWindow) {
//     console.log("scope->monkey real");
//   }
// }
