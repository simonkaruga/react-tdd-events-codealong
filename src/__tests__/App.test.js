import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Minimal smoke test so the suite contains at least one test
test('App renders without crashing', () => {
	const { container } = render(<App />);
	// the App renders an element (even if empty)
	expect(container.firstChild).toBeInTheDocument();
});
