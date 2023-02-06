export const piniaPluginPersist = (key: any) => {
  return {
    enabled: true, // 开启持久化存储
    strategies: [
      {
        // 修改存储中使用的键名称，默认为当前 Store的id
        key: key,
        // 修改为 sessionStorage，默认为 localStorage
        storage: localStorage,
        // []意味着没有状态被持久化(默认为undefined，持久化整个状态)
        // paths: [],
      },
    ],
  };
};
