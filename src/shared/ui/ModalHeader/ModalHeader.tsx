import { NavLink } from "react-router-dom";
import ProfileSVG from "../../assets/svg/profile.svg";

interface ModalHeaderProps {
    closeModal: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ closeModal }) => {
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains("fixed")) {
            closeModal();
        }
    };

    return (
        <div
            className="fixed inset-0 flex justify-end md:justify-start items-start z-50"
            onClick={handleOutsideClick}
        >
            <div className="bg-white rounded-lg shadow-lg w-[200px] mt-20 z-50">
                <div className="flex flex-col gap-3">
                    <NavLink to="" className="flex items-center space-x-2 p-4 hover:bg-[#E0F6FF] md:hidden">
                        <img
                            src={ProfileSVG}
                            className="w-[30px] h-[30px] rounded-full"
                            alt="Profile"
                        />
                        <div className="text-gray-800">Асанов Али</div>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-800"
                        }
                        to="/main/training-test"
                    >
                        <div className="text-lg mb-2 p-4 hover:bg-[#E0F6FF]">Подготовка к ОРТ</div>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-800"
                        }
                        to="/main/trial-testing"
                    >
                        <div className="text-lg mb-2 p-4 hover:bg-[#E0F6FF]">Пробный тест</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
