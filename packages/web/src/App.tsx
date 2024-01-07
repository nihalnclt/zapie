import { useState } from "react";
import { RxCardStack } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GiSprint } from "react-icons/gi";
// import JSONEditor from "./JsonEditor";

// import CodeMirror from "@uiw/react-codemirror";
// import { StreamLanguage } from "@codemirror/language";
// import { jsonLanguage } from "@codemirror/lang-json";

function App() {
    const [jsonValue, setJsonValue] = useState({
        firstName: "Nihal",
        lastName: "N",
        age: 22,
        company: "Zapie",
        languages: ["js", "ts", "rust"],
    });

    return (
        <div>
            <div className="p-2 px-4 border-b border-[#424244] flex items-center justify-between">
                <h1 className="font-bold text-lg">
                    <span className="text-rose-500">Z</span>apie
                </h1>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="flex">
                <div className="border-r border-[#424244] h-[100vh] w-[70px]"></div>
                <div className="w-[250px] h-[100vh] border-r border-[#424244]"></div>
                <div className="flex-1">
                    <div className="p-2">
                        <div className="flex items-center gap-1">
                            <div className="w-[40px] h-[30px] flex items-center justify-center border-r border-[#424244]">
                                <RxCardStack />
                            </div>
                            {Array.from({ length: 4 }).map((item, index) => {
                                return (
                                    <div key={index} className="w-[140px] py-1 bg-[#3d3c3c] rounded">
                                        <span className="text-[12px] text-green-500">GET</span>
                                        <span>Request {index + 1}</span>
                                    </div>
                                );
                            })}
                        </div>
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
                            <input type="text" className="w-full bg-transparent" placeholder="Enter URL" />
                            <button className="bg-rose-500 font-medium px-3 py-1 text-sm rounded flex items-center gap-2">
                                <GiSprint /> GO
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <span>Params</span>
                            <span>Headers</span>
                            <span>Auth</span>
                            <span>Body</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <CodeMirror
                value={JSON.stringify(jsonValue, null, 2)}
                height="200px"
                readOnly
                theme="dark"
                extensions={[jsonLanguage]}
            /> */}
        </div>
    );
}

export default App;
