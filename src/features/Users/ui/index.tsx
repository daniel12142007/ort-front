import { useNavigate } from "react-router-dom";
import searchSVG from "../../../shared/assets/svg/search.svg";
import deleteSVG from "../../../shared/assets/svg/delete.svg";
import { CircularProgress } from "@mui/material";
import { UserBox, Image, SearchInput, NavBlock, NamesBlock, MainBlock, Name, DetailName, Email, DeleteImage, DetailBlock, Role, Circular, SBlock, DetailNameBlock } from "../style/style";
import { userStore } from "../model/store";
import { useEffect, useState } from "react";

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, isLoading, fetchUser, deleteUser } = userStore((state) => ({
    user: state.user,
    isLoading: state.isLoading,
    fetchUser: state.fetchUser,
    deleteUser: state.deleteUser,
  }));

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return <Circular><CircularProgress /></Circular>;
  }

  const handleDeleteUSer = async (id: number) => {
    await deleteUser(id);
    await fetchUser();
  }
  const handleUserClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  const filteredUsers = user?.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <UserBox>
      <NavBlock>
          <SearchInput
            placeholder="Поиск по имени или email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image src={searchSVG} />
      </NavBlock> 
      <SBlock>
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
                <DetailNameBlock onClick={() => handleUserClick(user.id)}>
                  <Name>{user.name}</Name>
                  <Email>{user.email}</Email>
                  <Role>KAI - TECH</Role>
                </DetailNameBlock>
                <DeleteImage >
                  <Image onClick={() => handleDeleteUSer(user.id)} src={deleteSVG} />
                </DeleteImage>
              </NamesBlock>
            ))
          ) : (
            <div>Пока нет данных</div>
          )}
        </MainBlock>
      </SBlock>
    </UserBox>
  );
};
