import searchSVG from "../../../shared/assets/svg/search.svg";
import deleteSVG from "../../../shared/assets/svg/delete.svg";
import { CircularProgress } from "@mui/material";
import { UserBox, Image, SearchInput, NavBlock, Flexing, NamesBlock, MainBlock,Name,DetailName,Email,DeleteImage, DetailBlock, Role, Circular } from "../style/style";
import { userStore } from "../model/store";
import { useEffect } from "react";

export const UserList = () => {

  const { user, isLoading, fetchUser } = userStore((state) => ({
    user: state.user,
    isLoading: state.isLoading,
    fetchUser: state.fetchUser
  }));

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return <Circular><CircularProgress /></Circular>;
  }

  return (
    <UserBox>
      <NavBlock>
        <Flexing>
          <SearchInput placeholder="поиск" />
          <Image src={searchSVG} />
        </Flexing>
      </NavBlock>
      <DetailBlock>
        <DetailName>Имя</DetailName>
        <DetailName>Email</DetailName>
        <DetailName>Школа</DetailName>
        <DetailName>Действия</DetailName>
      </DetailBlock>
      <MainBlock>
        {user && user.length > 0 ? (
          user.map((user) => (
            <NamesBlock>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
                <Role>KAI TECH</Role>
                <DeleteImage>
                    <Image src={deleteSVG} />
                </DeleteImage>
            </NamesBlock>
          ))
        ) : (
            <div>Пока нет данных</div>
        )
        }
      </MainBlock>
    </UserBox>
  );
};
