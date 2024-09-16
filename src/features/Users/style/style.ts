import { Box, styled } from "@mui/material"

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
export const DetailName = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 20px;
`
export const Name = styled("div")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    width: 25%;
`
export const Email = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    width: 25%;
`
export const Role = styled("div")`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    width: 25%;
    display: flex;
    justify-content: center;
`

export const DeleteImage = styled("div")`
    width: 25%;
    display: flex;
    justify-content: end;
    padding-right: 15px;
    cursor: pointer;
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