import React, { useEffect, useState } from "react";
import {
  Letter,
  LoadingScreenContainer,
  RacingCarIcon,
  WordContainer,
} from "./loadingScreen.styles";

const LoadingScreen: React.FC = () => {
  const word = "Loading...".split("");
  const [visibleLetters, setVisibleLetters] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) =>
        prev < word.length ? prev + 1 : word.length
      );
    }, 200); // speed of “spelling”
    return () => clearInterval(interval);
  }, [word]);

  return (
    <LoadingScreenContainer>
      <WordContainer>
        {word.map((letter, i) => (
          <Letter key={i} $visible={i < visibleLetters}>
            {letter}
          </Letter>
        ))}
        <RacingCarIcon />
      </WordContainer>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
