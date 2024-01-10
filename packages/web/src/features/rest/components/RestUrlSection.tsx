import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { GiSprint } from "react-icons/gi";

import { RootState } from "../../../redux/sotre";
import { sendRestApiRequest } from "../api/sendRestApiRequest";
import { updateSelectedRestRequestResponseData, updateSelectedRestRequestUrl } from "../slices/restSlice";

export const RestUrlSection = () => {
    const { selectedTabIndex, openedTabs } = useSelector((state: RootState) => state.rest);
    const selectedTab = openedTabs[selectedTabIndex];

    const dispatch = useDispatch();

    const testRequest = async () => {
        const response = await sendRestApiRequest(selectedTab);
        dispatch(updateSelectedRestRequestResponseData(response));
    };

    return (
        <div className="flex items-center bg-[#3d3c3c] p-2 mt-2 rounded">
            <div className="flex items-center gap-2 text-green-500">
                <span className="font-medium text-sm">GET</span>
                <span className="grid text-sm">
                    <IoMdArrowDropup />
                    <span className="mt-[-8px]">
                        <IoMdArrowDropdown />
                    </span>
                </span>
            </div>
            <input
                type="text"
                className="w-full bg-transparent"
                placeholder="Enter URL"
                onChange={(e) => {
                    dispatch(updateSelectedRestRequestUrl(e.target.value));
                }}
                value={selectedTab?.url || ""}
            />
            <button
                className="bg-rose-500 font-medium px-3 py-1 text-sm rounded flex items-center gap-2"
                onClick={testRequest}
            >
                <GiSprint /> GO
            </button>
        </div>
    );
};
