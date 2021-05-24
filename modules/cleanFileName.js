export default (fileName) => {
    const words = {
        '(Remastered)': '',
        '(remastered)': '',
        '(REMASTERED)': '',
        '/': '\/​',// zero width space after
        ';': ';​',// zero width space after
        ':': ':​',// zero width space after
    };
    for (const oldWord in words) {
        if (words.hasOwnProperty(oldWord) && fileName.includes(oldWord)) {
            const newWord = words[oldWord];
            console.log(fileName,oldWord,newWord,true)
            fileName = fileName.replaceAll(oldWord, newWord);
        }
    }
    return fileName
}