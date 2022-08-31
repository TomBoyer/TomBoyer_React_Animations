import React from "react";
import "./Liste.css";
import { useTrail, animated } from "react-spring";
import Card from "../../Components/Card/Card";
import { v4 as uuidv4 } from "uuid";

export default function Liste() {
  //param = nb éléments à animer
  const trail = useTrail(9, {
    from: { opacity: 0, x: 50, y: -50 },
    to: { opacity: 1, x:0, y: 0 },
  });

  console.log(trail);
  //animated.div ou animated.p ou etc etc .. choisir ce qu'on souhaite animer
  return (
    <div className="list-container">
      {trail.map((cardStyle, index) => {
        return (
          <animated.div key={uuidv4()} style={cardStyle}>
            <Card />
          </animated.div>
        );
      })}
    </div>
  );
}
