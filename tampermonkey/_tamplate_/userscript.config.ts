//元数据里的数据都能在GM_info里获取，但是require获取不到，如果dev模式下，需要require数据
//如果还需要一些自定义的数据，也可以放在这里
//所以这里统一设置,方便调用

const match: string[] = ["*://*/*"];
// const require: string[] = [];
// const include: string[] = [];
// const exclude: string[] = [];
// const resource: { [key: string]: string } = {};
// const connect: string[] = [];

export const extraUserScript = {
  match
};

