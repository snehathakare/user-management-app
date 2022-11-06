import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

test('renders about text', () => {
    render(<Footer />)
    const footerText = screen.getByRole("button", { name: /about/i })
    expect(footerText).toBeInTheDocument()
})
test('renders location text', () => {
    render(<Footer />)
    const footerText = screen.getByRole("button", { name: /locations/i })
    expect(footerText).toBeInTheDocument()
})
test('renders contact text', () => {
    render(<Footer />)
    const footerText = screen.getByRole("button", { name: /contact/i })
    expect(footerText).toBeInTheDocument()
})

