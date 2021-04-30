import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

interface Props {
	importProxies: (proxyString: string) => void;
}

export default function Import({ importProxies }: Props) {
	const textArea = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState<string>("");
	const history = useHistory();

	useEffect(() => focusTextArea(), []);

	const onTextChange = (event: any) => setText(event.target.value);
	const focusTextArea = () => textArea.current!.focus();
	const onClearClick = () => {
		focusTextArea();
		setText("");
	};
	const onImportClick = () => {
		history.push("/view");
		importProxies(text);
		setText("");
	};
	return (
		<div className="flex flex-col h-full">
			<textarea
				className="bg-lightest dark:bg-darker text-dark dark:text-lighte border border-gray 
				flex-1 p-4 mb-8 text-lg font-semibold resize-none rounded-2xl"
				onChange={onTextChange}
				ref={textArea}
				value={text}
			/>
			<div className="flex flex-row justify-between">
				<Button text="Clear" primary={false} onClick={onClearClick} />
				<Button text="Import" primary={true} onClick={onImportClick} />
			</div>
		</div>
	);
}
