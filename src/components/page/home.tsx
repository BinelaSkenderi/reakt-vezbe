import { useState } from "react";
import Button from "../ui/button";
import useFetchData from "../../utils/hooks/useFetchData";
import Facts from "./facts";

function Home(){

const [textButton, setTextButton] = useState("");

const {fact} = useFetchData("fact");
const onClick = (text: string) => {
    setTextButton(text)
}
    return (
        <>
            <p>({textButton.length === 0 ? fact : textButton})</p>
            <Button text={"Click me"} tip={"error"} onClickButton={onClick}/>
            <Button text={"klikni i mene"} tip={"default"} onClickButton={onClick}/>
        </>
    )
};

export default Home;