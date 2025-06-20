import { useState } from "react"

import Abs from "./Abs"
import BodyShape from "./BodyShape"
import BreastLeft from "./BreastLeft"
import BreastRight from "./BreastRight"
import KneeLeft from "./KneeLeft"
import KneeRight from "./KneeRight"
import LowerAbs from "./LowerAbs"
import ShinLeft from "./ShinLeft"
import ShinRight from "./ShinRight"
import UpperLegLeft from "./UpperLegLeft"
import UpperLegRight from "./UpperLegRight"

const WholeBody = () => {
    const [clickedBodyPart, setClickedBodyPart] = useState(null);

    const handleClick = (bodyPartName) => {
        setClickedBodyPart(bodyPartName)
        //Öffne PopUp mit Namen --> Soll zu Schmerztagebuch Ansicht gewechselt werden?
    }
    return(
        <div
            style={{
                position: "relative",
                width: 300,
                height: 600,
                display: "flex",
                justifyContent: "center"
                }}
        >
            <BodyShape
                width={224}
                height={568}
                onClick={handleClick}
            />
            <Abs
                width={52}
                height={72}
                onClick={() => handleClick("abs")}
                isClicked={clickedBodyPart === "abs"}
                style={{
                    position: "absolute",
                    transform: "translate(0px, 165px)"
                }}
            />
            <LowerAbs
                width={50}
                height={50}
                onClick={() => handleClick("lowerAbs")}
                isClicked={clickedBodyPart === "lowerAbs"}
                style={{
                    position: "absolute",
                    transform: "translate(0px, 240px)"
                }}
            />
            <BreastLeft
                width={46}
                height={50}
                onClick={() => handleClick("breastLeft")}
                isClicked={clickedBodyPart === "breastLeft"}
                style={{
                    position: "absolute",
                    transform: "translate(-25px, 105px)"
                }}
            />
            <BreastRight
                width={46}
                height={50}
                onClick={() => handleClick("breastRight")}
                isClicked={clickedBodyPart === "breastRight"}
                style={{
                    position: "absolute",
                    transform: "translate(25px, 105px)"
                }}
            />
            <UpperLegLeft
                width={42}
                height={135}
                onClick={() => handleClick("upperLegLeft")}
                isClicked={clickedBodyPart === "upperLegLeft"}
                style={{
                    position: "absolute",
                    transform: "translate(-25px, 270px)"
                }}
            />
            <UpperLegRight
                width={43}
                height={131}
                onClick={() => handleClick("upperLegRight")}
                isClicked={clickedBodyPart === "upperLegRight"}
                style={{
                    position: "absolute",
                    transform: "translate(28px, 270px)"
                }}
            />
            <KneeLeft
                width={31}
                height={30}
                onClick={() => handleClick("kneeLeft")}
                isClicked={clickedBodyPart === "kneeLeft"}
                style={{
                    position: "absolute",
                    transform: "translate(22px, 400px)"
                }}
            />
            <KneeRight
                width={27}
                height={30}
                onClick={() => handleClick("kneeRight")}
                isClicked={clickedBodyPart === "kneeRight"}
                style={{
                    position: "absolute",
                    transform: "translate(-22px, 403px)"
                }}
            />
            <ShinLeft
                width={27}
                height={92}
                onClick={() => handleClick("shinLeft")}
                isClicked={clickedBodyPart === "shinLeft"}
                style={{
                    position: "absolute",
                    transform: "translate(-22px, 432px)"
                }}
            />
            <ShinRight
                width={29}
                height={87}
                onClick={() => handleClick("shinRight")}
                isClicked={clickedBodyPart === "shinRight"}
                style={{
                    position: "absolute",
                    transform: "translate(22px, 432px)"
                }}
            />
        </div>
    )
}

export default WholeBody