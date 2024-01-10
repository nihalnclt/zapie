import { avatarImg } from "../../assets/images";

export const Header = () => {
    return (
        <div className="h-[45px] px-4 border-b border-[#424244] flex items-center justify-between">
            <h1 className="font-bold text-lg">
                <span className="text-rose-500">Z</span>apie{" "}
                <span className="text-sm font-normal bg-[#424244]">Beta</span>
            </h1>
            <div>
                <input type="text" />
            </div>
            <div>
                <div className="w-[25px] h-[25px] min-w-[25px] min-h-[25px] rounded-full bg-[#424244] overflow-hidden">
                    <img src={avatarImg} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};
