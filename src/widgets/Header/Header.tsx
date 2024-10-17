import React, { useState } from "react"

import { useProfileStore } from "@/features/user-profile/models/store"

import { NavLink } from "react-router-dom"
import { Container } from "@/shared/ui/Container"
import { ModalHeader } from "@/shared/ui/ModalHeader/ModalHeader"
import { Avatar } from "@/shared/ui"

import TokenService from "@/utils"

import burgerSVG from "../../shared/assets/svg/burger.svg"
import LogoSVG from "../../shared/assets/svg/logo.svg"

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { fetchPerson, person } = useProfileStore()

    React.useEffect(() => {
        fetchPerson(TokenService.getUser()?.id)
    },[])

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return (

        <div className="bg-[#407BFF] w-full h-[79px] flex justify-center items-center sticky top-0 z-10">
            <Container>
                <div className="flex justify-between w-full">
                    <div className="flex items-center w-[100%] md:w-[40%] ">
                        <div
                            className="flex justify-between md:flex md:flex-row-reverse md:justify-end md:gap-5 items-center w-[100%]">
                            <NavLink to="/main">
                                <img
                                    src={LogoSVG}
                                    className="w-[90%] h-[90%] cursor-pointer"
                                    alt="Logo"
                                />
                            </NavLink>
                            <img onClick={openModal} src={burgerSVG} alt="burger" className="w-[30px] h-[30px] lg:hidden" />
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-end lg:justify-between w-[0%] md:w-[60%] text-white font-roboto">
                        <div className="lg:flex justify-between w-[66%] hidden">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "text-black" : "text-white"
                                }
                                to="/main/training-test"
                            >
                                <div className="text-[24px] font-medium">Подготовка к ОРТ</div>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "text-black" : "text-white"
                                }
                                to="/main/trial-testing"
                            >
                                <div className="text-[24px] font-medium">Пробный тест</div>
                            </NavLink>
                        </div>
                        <div className="hidden md:flex lg:flex items-center space-x-4 justify-end">
                            <NavLink to="">
                                <div className="text-white">
                                    <div className="text-[16px]">{person?.name}</div>
                                </div>
                            </NavLink>
                            <Avatar size={50} name={person?.name || "User"} photoUrl={person?.image}/>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <ModalHeader closeModal={closeModal} />
                )}
            </Container>
        </div>
    )
}
