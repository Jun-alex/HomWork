import { InputField } from "../components/InputField";
import { Card } from "../components/Card";
import { SwapiFooter } from "../components/SwapiFooter";

export function SwapiPage() {
    return (
        <div className="container-swapi">
            <h1>SWAPI</h1>
            <InputField />
            <Card />
            <SwapiFooter />
        </div>
    );
}

