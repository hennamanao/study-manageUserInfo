import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  console.log("Page404");
  return <p>404ページです</p>;
});
