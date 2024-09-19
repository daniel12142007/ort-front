import { Box, styled, } from "@mui/material"
import { AccountCircle } from "@mui/icons-material";

export const UserBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex-grow: 1;
`
export const Circular = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 300px;
`

export const Image = styled("img")`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const SearchInput = styled("input")`
    width: 100%;
    height; 100%;
    border: none;
    outline: none;
    background-color: #ffffff;
`
export const SBlock = styled("div")`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 30px;
    flex-grow: 1;
    margin-top: 17px;
`

export const NavBlock = styled("div")`
    display:flex;
    align-items: center;
    width: 325px;
    height: 42px;
    border-radius: 5px;
    padding: 10px;
    background-color: #ffffff;
`
export const DetailBlock = styled("div")`
    width: 100%;
    // margin: 30px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted black;
    padding-left: 10px;
    padding-right: 10px;
`
export const NamesBlock = styled("div")`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(200, 200, 200);
    margin-top: 15px;
`
export const DetailNameBlock = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 75%;
    cursor: pointer;
`
export const DetailName = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 20px;
`
export const Name = styled("div")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    width: 20%;
`
export const Email = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    width: 35%;
    display: flex;
    justify-content: center;
`
export const Role = styled("div")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    width: 35%;
    display: flex;
    justify-content: center;
`

export const DeleteImage = styled("div")`
    width: 25%;
    display: flex;
    justify-content: end;
    padding-right: 15px;
`

export const MainBlock = styled("div")`
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
      /* Стили для прокрутки */
    scrollbar-width: thin; /* тонкий скроллбар для Firefox */
    scrollbar-color: #c4c4c4 transparent; /* цвет для Firefox */

    &::-webkit-scrollbar {
        width: 6px; /* ширина скроллбара для Chrome, Safari и др. */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c4c4c4; /* цвет для ползунка скроллбара */
        border-radius: 4px; /* скругленные углы */
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* прозрачный фон для трека скроллбара */
    }
`
export const DetailBlocks = styled("div")`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const FirstBlock = styled("div")`
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 100%;
`
export const FlexBox = styled("div")`
    display: flex;
    gap: 40px;
    width: 50%;
`
export const AboutImage = styled("div")`
    width: 84px;
    height: 84px;
    border-radius: 50%;
`
export const CircleImg = styled(AccountCircle)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
export const Student = styled("p")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 20px;
`
export const ResultBtn = styled("button")`
    width: 265px;
    height: 43px;
    background: #7FC7FF;
    border-radius: 10px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    outline: none;
    border: none;
    cursor: pointer;
`
export const About = styled("h1")`
    display: flex;
    flex-direction: column;
    align-items: space-between;
`
export const Information = styled("p")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
`
export const SecondBlock = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    width: 100%;
`
export const Info = styled("p")`
    display: flex;
    gap: 30px;
    padding: 4px 6px;
    border-bottom: 1px solid #EFEFEF;
`
export const Surname = styled("p")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    color: #27313882;
`
export const NameInfo = styled("p")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
`
export const ThirdBlock = styled("div")`
    display: flex;
    justify-content: flex-end;
    height: auto;
    width: 100%;
`
export const Button = styled("button")`
    width: 175px;
    height: 43px;
    border-radius: 10px;
    background: #F95A00;
    padding: 4px 8px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`