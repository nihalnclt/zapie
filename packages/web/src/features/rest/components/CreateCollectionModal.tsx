import { useRef } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

import { useHandleClickOutside } from "../../../hooks";
import { createNewCollection } from "../slices/restSlice";

interface CreateCollectionModalType {
    setIsCreateCollectionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateCollectionModal = ({ setIsCreateCollectionModalOpen }: CreateCollectionModalType) => {
    const wrapperRef = useRef(null);
    useHandleClickOutside(wrapperRef, () => setIsCreateCollectionModalOpen(false));
    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 w-full h-full bg-[#0005] flex items-center justify-center z-20 ">
            <div
                ref={wrapperRef}
                className="bg-[#262626] w-full max-h-[90vh] max-w-[500px] shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto rounded"
            >
                <div className="flex items-center justify-between border-b border-[#424244] p-4">
                    <h2 className="font-medium">Create Collection</h2>
                    <button
                        className="h-auto bg-transparent text-textColor text-xl"
                        onClick={() => setIsCreateCollectionModalOpen(false)}
                    >
                        <MdClose />
                    </button>
                </div>

                <div>
                    <div>
                        <input type="text" placeholder="Name" />
                    </div>

                    <button>Cancel</button>
                    <button
                        className="bg-rose-500"
                        onClick={() => {
                            dispatch(createNewCollection("test collection"));
                        }}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};
