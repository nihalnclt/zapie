import { RxCardStack } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

import { RootState } from "../../../redux/sotre";
import { addNewRestRequestTab } from "../slices/restSlice";
import { RestSingleTab } from "./RestSingleTab";

export const RestTabs = () => {
    const { openedTabs } = useSelector((state: RootState) => state.rest);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-1">
            <div className="w-[40px] h-[30px] flex items-center justify-center border-r border-[#424244]">
                <RxCardStack />
            </div>
            {openedTabs.map((tabData, index) => {
                return <RestSingleTab key={index} tabIndex={index} tabData={tabData} />;
            })}
            <button onClick={() => dispatch(addNewRestRequestTab())}>
                <FiPlus />
            </button>
        </div>
    );
};
