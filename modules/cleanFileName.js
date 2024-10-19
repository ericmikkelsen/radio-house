export default (fileName) => {

    const words = {
        'feat.': 'featuring​',
        'Feat.': 'Featuring​',
        '(Remastered)': '',
        '(remastered)': '',
        '(REMASTERED)': '',
        '.mp3': '',
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
    const trackNameInfo = {
        fileName: fileName,
        trackName: fileName,
        meta: [],
    }
    const rx = /\(([^()]*)\)/g;
    const trackParensInfo = [...fileName.matchAll(rx)];
    if (trackParensInfo.length) {
        trackNameInfo.trackName = fileName.split('(')[0];
        console.log(trackParensInfo)
        trackParensInfo.forEach(meta => {
            trackNameInfo.meta.push(meta[1]);
        });
        console.log(trackNameInfo)
    }
    return trackNameInfo
}