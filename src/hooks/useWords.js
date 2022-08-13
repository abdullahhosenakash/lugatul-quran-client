import { useEffect } from 'react';
import { useState } from 'react';

const useWords = searchedText => {
    const [words, setWords] = useState([]);
    useEffect(() => {
        if (searchedText) {
            fetch(`https://damp-beyond-93367.herokuapp.com/getWord/${searchedText}`)
                .then(res => res.json())
                .then(data => setWords(data.result));
        }
        else {
            setWords([]);
        }
    }, [searchedText]);

    return [words];
};

export default useWords;