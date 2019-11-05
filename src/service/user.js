import { g, pa, p, put, d } from "@/service/utils/request";

// 用户列表
export const memberList = params => {
  return g("member", params);
};
//这一段用来学习g的由来,其他类似g:get;p:post;pa:patch;d:delete;put:put
// let g = (url, parms) => {
//   return hanldeReq('get', url, {}, parms)
// }

//
// 更改用户状态
export const memberState = params => {
  return pa("member/state", params);
};

// 新增用户
export const memberCreate = params => {
  return p("member/create", params);
};

// 当前用户有权限分配的用户组
export const memberGroup = params => {
  return p("member/group", params);
};

// 获取用户详情
export const memberInfo = params => {
  return g("member/info", params);
};

// 修改用户
export const memberUpdate = params => {
  return put("member/update", params);
};

// 删除用户
export const memberDel = params => {
  return d("member/del", params);
};
