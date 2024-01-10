import { useDispatch, useSelector } from "react-redux";
import { RestRequestResponse } from "../types";
import { RootState } from "../../../redux/sotre";
import { updateRestSelectedTab } from "../slices/restSlice";

interface RestSingleTabProps {
    tabIndex: number;
    tabData: RestRequestResponse;
}

export const RestSingleTab = ({ tabIndex, tabData }: RestSingleTabProps) => {
    const { selectedTabIndex } = useSelector((state: RootState) => state.rest);
    const dispatch = useDispatch();

    return (
        <div
            className={
                "w-[140px] py-1 bg-[#3d3c3c] rounded " + (selectedTabIndex === tabIndex ? "bg-red-500" : "")
            }
            onClick={() => dispatch(updateRestSelectedTab(tabIndex))}
        >
            <span className="text-[12px] text-green-500">GET</span>
            <span>Request {tabIndex + 1}</span>
        </div>
    );
};
