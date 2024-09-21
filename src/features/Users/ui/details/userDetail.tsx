import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userStore } from "../../model/store";
import { DetailBlocks, FirstBlock, FlexBox, AboutImage, Student, ResultBtn, SecondBlock, Information, Info, Surname, NameInfo, ThirdBlock, Button, CircleImg, Circular } from "../../style/style";
import { CircularProgress } from "@mui/material";


export const UserDetail = () => {
  const { userId } = useParams(); 
  const { userDetails, getUserById, isLoading } = userStore((state) => ({
    userDetails: state.userDetails,
    getUserById: state.getuserById,
    isLoading: state.isLoading,
  }));

  console.log(userDetails)

  const handleBack = () => {
    window.history.go(-1);
  };

  useEffect(() => {
    if (userId) {
      getUserById(Number(userId)); 
    }
  }, [userId, getUserById]);

  if (isLoading) {
    return <Circular><CircularProgress /></Circular>;
  }

  if (!userDetails) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <DetailBlocks>
        <FirstBlock>
            <FlexBox>
                <AboutImage><CircleImg/></AboutImage>
                <Student>{userDetails.name}</Student>
            </FlexBox>
            <ResultBtn>Результаты теста</ResultBtn>
        </FirstBlock>
        <SecondBlock>
            <Information>Персональная информация</Information>
            <Info>
                <Surname>ФИО :</Surname>
                <NameInfo>{userDetails.name}</NameInfo>
            </Info>
            <Info>
                <Surname>Email :</Surname>
                <NameInfo>{userDetails.email}</NameInfo>
            </Info>
            <Info>
                <Surname>Возраст :</Surname>
                <NameInfo>{userDetails.age}</NameInfo>
            </Info>
            <Info>
                <Surname>Школа :</Surname>
                <NameInfo>Kai-Tech</NameInfo>
            </Info>
        </SecondBlock>
        <ThirdBlock>
            <Button onClick={handleBack}>Отменить</Button>
        </ThirdBlock>
    </DetailBlocks>
  );
};
