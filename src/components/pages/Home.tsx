import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  console.log("Home");
  return <p>HOMEページです</p>;
});
