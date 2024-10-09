import { useNavigate } from "react-router-dom";
import searchSVG from "../../../../shared/assets/svg/search.svg";
import deleteSVG from "../../../../shared/assets/svg/delete.svg";
import { CircularProgress } from "@mui/material";
import {
  UserBox,
  Image,
  SearchInput,
  NavBlock,
  NamesBlock,
  MainBlock,
  Name,
  DetailName,
  Email,
  DeleteImage,
  DetailBlock,
  Role,
  Circular,
  SBlock,
  DetailNameBlock,
} from "../../style/style";
import { userStore } from "../../model/store";
import { useEffect, useState } from "react";
import { DeleteModal } from "@/shared/ui/modalSideBar/ModalDelete";

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false); 
  const [userToDelete, setUserToDelete] = useState<{ id: number; name: string } | null>(null); 
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
    return (
      <Circular>
        <CircularProgress />
      </Circular>
    );
  }

  const confirmDeleteUser = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete.id);
      await fetchUser(); 
      setOpenDeleteModal(false); 
    }
  };

  const handleDeleteUserClick = (id: number, name: string) => {
    setUserToDelete({ id, name });
    setOpenDeleteModal(true);
  };

  const handleUserClick = (id: number) => {
    navigate(`/admin/users/${id}`);
  };

  const filteredUsers = user?.filter(
    (u) =>
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
                  <Role>kai - tech</Role>
                </DetailNameBlock>
                <DeleteImage>
                  <Image
                    onClick={() => handleDeleteUserClick(user.id, user.name)}
                    src={deleteSVG}
                  />
                </DeleteImage>
              </NamesBlock>
            ))
          ) : (
            <div>Пока нет данных</div>
          )}
        </MainBlock>
      </SBlock>
      {openDeleteModal && userToDelete && (
        <DeleteModal
          title={userToDelete.name} 
          onConfirm={confirmDeleteUser}
          onClose={() => setOpenDeleteModal(false)}
        />
      )}
    </UserBox>
  );
};
