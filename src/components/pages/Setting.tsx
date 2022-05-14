import { memo, VFC } from "react";

export const Setting: VFC = memo(() => {
  console.log("Setting");
  return <p>設定ページです</p>;
});
