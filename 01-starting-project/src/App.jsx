import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
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
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{/* <CoreConcept
							title="Components"
							description="The core UI building block"
							image={componentsImg}
						/> */}
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === "components"}
							onSelect={() => handleSelect("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onSelect={() => handleSelect("jsx")}
						>
							Jsx
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onSelect={() => handleSelect("props")}
						>
							props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onSelect={() => handleSelect("state")}
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
				</section>
			</main>
		</div>
	);
}

export default App;
// https://drive.google.com/file/d/1z4s_GuENckW1JlOFC07IQPDmBR7fEVZh/view?usp=sharing
// CoreConcept 컴포넌트 사용:

// 첫 번째 항목:
// title, description, image를 개별적으로 전달.
// 나머지 항목들:
// ...CORE_CONCEPTS[1] 형식으로 구조 분해 할당을 사용하여 CORE_CONCEPTS 객체의 데이터를 전달.
