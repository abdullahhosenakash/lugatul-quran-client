import { useEffect } from "react";
import { useState } from "react";

const useWords = (searchedText) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (searchedText) {
      fetch(`https://lugatul-quran-server.onrender.com/getWord/${searchedText}`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data.result);
          setLoading(false);
        });
    } else {
      setWords([]);
    }
  }, [searchedText]);

  return [words, loading];
};

export default useWords;
