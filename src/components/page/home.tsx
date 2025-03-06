import { useState } from "react";
import Button from "../ui/button";

function Home(){

const [textButton, setTextButton] = useState("");   
const onClick = (text: string) => {
    setTextButton(text)
}
    return (
        <>
            <p>({textButton.length === 0 ? "Nisi kliknu button" : textButton})</p>
            <Button text={"Click me"} tip={"error"} onClickButton={onClick}/>
            <Button text={"klikni i mene"} tip={"default"} onClickButton={onClick}/>
        </>
    )
};

export default Home;