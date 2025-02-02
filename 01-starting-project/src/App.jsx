import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data.js";

function handleSelect(selectedButton) {
	console.log(selectedButton);
}

function App() {
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
						<TabButton onSelect={() => handleSelect("Componets")}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelect("Jsx")}>Jsx</TabButton>
						<TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
						<TabButton onSelect={() => handleSelect("State")}>State</TabButton>
					</menu>
					Dynamic Content
				</section>
			</main>
		</div>
	);
}

export default App;

// CoreConcept 컴포넌트 사용:

// 첫 번째 항목:
// title, description, image를 개별적으로 전달.
// 나머지 항목들:
// ...CORE_CONCEPTS[1] 형식으로 구조 분해 할당을 사용하여 CORE_CONCEPTS 객체의 데이터를 전달.
