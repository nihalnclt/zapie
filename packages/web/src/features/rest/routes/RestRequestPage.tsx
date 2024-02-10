import { useDispatch, useSelector } from "react-redux";
import { FiFilter, FiPlus } from "react-icons/fi";

import { RootState } from "../../../redux/sotre";
import { RestTabs } from "../components/RestTabs";
import { RestBody } from "../components/RestBody";
import { RestUrlSection } from "../components/RestUrlSection";
import { useState } from "react";
import { CreateCollectionModal } from "../components/CreateCollectionModal";

export const RestRequestPage = () => {
    const [isCreateCollectionModalOpen, setIsCreateCollectionModalOpen] = useState(false);

    const { openedTabs, selectedTabIndex, collections } = useSelector((state: RootState) => state.rest);
    const dispatch = useDispatch();
    const selectedTab = openedTabs[selectedTabIndex];

    return (
        <div className="flex-1 h-full flex">
            <div className="w-[350px] border-r border-[#424244] p-2">
                <div className="flex items-center gap-1">
                    <input type="text" className="w-full bg-[#424244]" />
                    <button className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] bg-[#424244] rounded flex items-center justify-center text-lg">
                        <FiFilter />
                    </button>
                    <button
                        className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] bg-rose-500 rounded flex items-center justify-center text-lg"
                        onClick={() => setIsCreateCollectionModalOpen(true)}
                    >
                        <FiPlus />
                    </button>

                    {isCreateCollectionModalOpen && (
                        <CreateCollectionModal
                            setIsCreateCollectionModalOpen={setIsCreateCollectionModalOpen}
                        />
                    )}
                </div>

                <div>
                    {collections?.map((collection, index) => {
                        return <div key={index}>{collection.name}</div>;
                    })}
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="p-2">
                    <RestTabs />
                    <RestUrlSection />
                </div>
                <div className="h-[300px] border-b border-[#424244] p-2">
                    <div className="flex items-center gap-3">
                        <span className="font-[500] border-b-2 border-b-rose-500 text-rose-500">
                            Params 2
                        </span>
                        <span>Headers</span>
                        <span>Auth</span>
                        <span>Body</span>
                    </div>
                    <div>
                        <h4>Query Params</h4>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="border-b border-[#424244] w-[20px]">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="border-b border-[#424244]">
                                        <input type="text" />
                                    </td>
                                    <td className="border-b border-[#424244]">
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#424244] w-[20px]">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="border-b border-[#424244]">
                                        <input type="text" />
                                    </td>
                                    <td className="border-b border-[#424244]">
                                        <input type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <RestBody />
            </div>
        </div>
    );
};
