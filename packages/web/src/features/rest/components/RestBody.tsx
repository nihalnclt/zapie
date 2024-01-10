import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { jsonLanguage } from "@codemirror/lang-json";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/sotre";

export const RestBody = () => {
    const { openedTabs, selectedTabIndex } = useSelector((state: RootState) => state.rest);

    const selectedRequest = openedTabs[selectedTabIndex];

    return (
        <div className="flex-1 h-0 whitespace-normal">
            {/* <div className="h-full flex flex-col items-center justify-center">
                <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#424244]">
                    <TbSendOff />
                </span>
                <span className="mt-2">Not Sent</span>
            </div> */}
            <CodeMirror
                value={JSON.stringify(selectedRequest?.responseData, null, 2)}
                height="100%"
                readOnly
                theme="dark"
                extensions={[jsonLanguage, EditorView.lineWrapping]}
                style={{ height: "100%" }}
            />
        </div>
    );
};
