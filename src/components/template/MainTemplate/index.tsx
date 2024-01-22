import Footer from "../../organisms/Footer"
import NavBar from "../../organisms/Navbar"
import { TemplateContainer } from "./templateStyles"


interface Props {
    children: React.ReactNode
}

const MainTemplate: React.FC<Props> = ({ children }) => {

    return (
        <TemplateContainer>
            <NavBar />
            {children}
            <Footer />
        </TemplateContainer>

    )
}

export default MainTemplate