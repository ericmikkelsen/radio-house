export default (fileName) => {
    const replace = [
        '(Remastered)',
        '(remastered)',
        '(REMASTERED)',
    ];
    replace.forEach(nope => {
        fileName = fileName.replace(nope, '');
    });
    return fileName
}