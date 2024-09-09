import { Box, styled } from "@mui/material"

export const UserBox = styled(Box)`
    // border: 1px solid red;
`
export const Circular = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 300px;
`

export const Flexing = styled("div")`
    display:flex;
    align-items: center;
    width: 325px;
    height: 42px;
    border: 1px solid #A5B4C3;
    border-radius: 5px;
    padding: 10px;
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
    background-color: #EEF0F4;
`

export const NavBlock = styled("div")`
    display: flex;
    justify-content: space-between;
    // border: 1px solid blue;
    margin: 10px;
`
export const DetailBlock = styled("div")`
    width: 94%;
    margin: 30px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted black;
    padding-left: 10px;
    padding-right: 10px;
    // border: 1px solid blue;
`
export const NamesBlock = styled("div")`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(200, 200, 200);
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
`

export const MainBlock = styled("div")`
    overflow-y: scroll;
    width: 95%;
    margin-left: 30px;
    height: 510px;
    display: flex;
    flex-direction: column;
    gap: 10px;

`