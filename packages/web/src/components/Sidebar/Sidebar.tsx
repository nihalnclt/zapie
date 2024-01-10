import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const Sidebar = () => {
    return (
        <div className="border-r border-[#424244] w-[70px]">
            <div></div>
            <div>
                <button>
                    <IoSettingsOutline />
                </button>
                <button>
                    <AiOutlineQuestionCircle />
                </button>
            </div>
        </div>
    );
};
