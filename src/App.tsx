import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacuents"
import './styles.css';

export const App = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <Header />
            <div className="mt-10 grid grid-cols-1 gap-y-4 lg:gap-4 lg:grid-cols-3">
                <Form />
                <ListadoPacientes />
            </div>

        </div>
    )
}
