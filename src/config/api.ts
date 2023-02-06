import { get, post } from "plugins/request";

// 用户请求
const article = () => {
  const getArticle = (url: string, params: any) => {
    return get(url, params);
  };
  return {
    getArticle,
  };
};

// 权限请求
const permission = () => {
  const login = (url: string, params: any) => {
    return get(url, params);
  };
  return {
    login,
  };
};

const articleService = article();
const permissionService = permission();

export { articleService, permissionService };
