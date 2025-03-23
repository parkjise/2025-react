import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
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
