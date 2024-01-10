import { GiSprint } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxCardStack } from "react-icons/rx";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { jsonLanguage } from "@codemirror/lang-json";
import { useState } from "react";
import axios from "axios";

export const RestRequestPage = () => {
    const [input, setInput] = useState("https://jsonplaceholder.typicode.com/posts");
    const [jsonValue, setJsonValue] = useState({});

    const testRequest = async () => {
        const response = await axios.get(input);
        setJsonValue(response.data);
    };

    return (
        <div className="flex-1 h-full flex">
            <div className="w-[350px] border-r border-[#424244]"></div>
            <div className="flex-1 flex flex-col">
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
                        <input
                            type="text"
                            className="w-full bg-transparent"
                            placeholder="Enter URL"
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input || ""}
                        />
                        <button
                            className="bg-rose-500 font-medium px-3 py-1 text-sm rounded flex items-center gap-2"
                            onClick={testRequest}
                        >
                            <GiSprint /> GO
                        </button>
                    </div>
                </div>
                <div className="h-[300px] border-b border-[#424244]">
                    <div className="flex items-center gap-3">
                        <span>Params</span>
                        <span>Headers</span>
                        <span>Auth</span>
                        <span>Body</span>
                    </div>
                    <div>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="border border-[#424244]">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="border border-[#424244]">id</td>
                                    <td className="border border-[#424244]">123</td>
                                </tr>
                                <tr>
                                    <td className="border border-[#424244]">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="border border-[#424244]">id</td>
                                    <td className="border border-[#424244]">123</td>
                                </tr>
                                <tr>
                                    <td className="border border-[#424244]">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="border border-[#424244]">id</td>
                                    <td className="border border-[#424244]">123</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex-1 h-0 whitespace-normal">
                    {/* <div className="h-full flex flex-col items-center justify-center">
                            <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#424244]">
                                <TbSendOff />
                            </span>
                            <span className="mt-2">Not Sent</span>
                        </div> */}
                    <CodeMirror
                        value={JSON.stringify(jsonValue, null, 2)}
                        height="100%"
                        readOnly
                        theme="dark"
                        extensions={[jsonLanguage, EditorView.lineWrapping]}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
};
