import React from "react";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton";
import Section from "./Section.jsx";
const Examples = () => {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	}
	let tabCcontent = <p>Please Select a topic</p>;

	if (selectedTopic) {
		tabCcontent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}
	return (
		<Section id="examples" title="Examples">
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onClick={() => handleSelect("components")}
				>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onClick={() => handleSelect("jsx")}
				>
					Jsx
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onClick={() => handleSelect("props")}
				>
					props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onClick={() => handleSelect("state")}
				>
					state
				</TabButton>
			</menu>
			{tabCcontent}
			{/* {selectedTopic} */}
			{/* {!selectedTopic ? (
      <p>Please Select a topic</p>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}

			{/* {!selectedTopic && <p>Please Select a topic</p>}
    {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}
		</Section>
	);
};

export default Examples;
