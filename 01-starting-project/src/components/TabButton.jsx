export default function TabButton({
	children,
	// onSelect,
	isSelected,
	...props
}) {
	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				{...props}
				// onClick={onSelect}
			>
				{children}
			</button>
		</li>
	);
}
