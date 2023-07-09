/**
 * @param {string} trackName 
 * @returns {object}
 */
export default (trackName) => {
    if (trackName.includes('(') && trackName.includes(')') ) {
        const trackInfo = {}
        const rx = /\(([^()]*)\)/g;
        const trackParensInfo = [...trackName.matchAll(rx)];
        console.log(trackParensInfo);
        // trackInfo.name = trackName.split('(')[0];
    }

    return {
        name: trackName
    }
}