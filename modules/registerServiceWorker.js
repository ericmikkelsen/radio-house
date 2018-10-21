export default () => {
    if ( window && 'serviceWorker' in navigator ) {
            navigator.serviceWorker.register('/service-worker.js');
        return true;
    }
}
