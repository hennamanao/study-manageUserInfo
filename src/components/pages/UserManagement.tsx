import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  console.log("UserManagement");
  return <p>ユーザー管理ページです</p>;
});
