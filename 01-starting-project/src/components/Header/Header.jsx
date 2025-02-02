import reactImg from "../../assets/react-core-concepts.png";
// 0에서 max 사이의 랜덤 정수를 반환합니다.
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
	const description = reactDescriptions[genRandomInt(2)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
// reactDescriptions:

// React 핵심 개념에 대한 설명을 담은 배열입니다.
// 예: ["Fundamental", "Crucial", "Core"].
// genRandomInt(max):

// 0에서 max 사이의 랜덤 정수를 반환합니다.
// 여기서는 배열 reactDescriptions에서 랜덤한 설명을 가져오는 데 사용됩니다.
