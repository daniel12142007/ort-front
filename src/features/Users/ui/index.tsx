import searchSVG from "../../../shared/assets/svg/search.svg";
import deleteSVG from "../../../shared/assets/svg/delete.svg";
import { CircularProgress } from "@mui/material";
import { UserBox, Image, SearchInput, NavBlock, Flexing, NamesBlock, MainBlock, Name, DetailName, Email, DeleteImage, DetailBlock, Role, Circular } from "../style/style";
import { userStore } from "../model/store";
import { useEffect, useState } from "react";

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredUsers = user?.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <UserBox>
      <NavBlock>
        <Flexing>
          <SearchInput
            placeholder="Поиск по имени или email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <NamesBlock key={user.id}>
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
        )}
      </MainBlock>
    </UserBox>
  );
};
