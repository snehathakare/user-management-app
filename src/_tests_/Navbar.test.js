import { render, screen } from "@testing-library/react"
import NavBar from "../components/NavBar"

test('renders home link', () => {
    render(<NavBar />)
    const linkText = screen.getByRole('link', {
        name: /home/i
    })
    expect(linkText).toBeInTheDocument()
})
test('renders user link', () => {
    render(<NavBar />)
    const linkText = screen.getByRole('link', {
        name: /users/i
    })
    expect(linkText).toBeInTheDocument()
})
test('renders group link', () => {
    render(<NavBar />)
    const linkText = screen.getByRole('link', {
        name: /groups/i
    })
    expect(linkText).toBeInTheDocument()
})
