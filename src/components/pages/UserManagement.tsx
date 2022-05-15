import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  console.log("UserManagement");
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {/* {[...Array(10)].map(() => ( */}
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="hoge"
          fullName="hoge hoge"
        />
      </WrapItem>
      {/* ))} */}
    </Wrap>
  );
});
