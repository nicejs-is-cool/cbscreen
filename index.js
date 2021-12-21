const cbscreen = (() => {
    function identifyBrowser() {
        if(navigator.userAgent.includes("Opera") || navigator.userAgent.includes('OPR')) return 'Opera';
        if(navigator.userAgent.includes("Chrome")) return 'Chrome';
        if(navigator.userAgent.includes("Safari")) return 'Safari';
        if(navigator.userAgent.includes("Firefox")) return 'Firefox';
        if((navigator.userAgent.includes("MSIE")) || (!!document.documentMode == true )) return 'IE';//crap
        return 'Unknown';
    }
    function isCompatibleWith(browser) {
        return browsersFunctions.hasOwnProperty(browser);
    }
    function isCompatibleWithTheCurrentBrowser() {
        return isCompatibleWith(identifyBrowser());
    }
    let browsersFunctions = {
        async Chrome(displayMediaOptions) {
            let captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            
            return captureStream;
        },
        async Safari(displayMediaOptions) {
            let captureStream = await navigator.mediaDevices.getUserMedia(displayMediaOptions);
            
            return captureStream;
        },
        async IE(displayMediaOptions) {
            let captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            
            return captureStream;
        },
        async Firefox(displayMediaOptions) {
            let captureStream = await navigator.mediaDevices.getUserMedia(displayMediaOptions);
            
            return captureStream;
        },
        async Opera(displayMediaOptions) {
            let captureStream = await navigator.mediaDevices.getUserMedia(displayMediaOptions);
            
            return captureStream;
        }
    }
    class ScreenShare {
        constructor() {
            this.video = false;
            this.audio = false;
            this.stream = null;
            this.forcedBrowser = null;
        }
        enableVideo() {
            this.video = true;
            return this;
        }
        enableAudio() {
            this.audio = true;
            return this;
        }
        /**
         * Forces cbscreen to use another browser's function.  
         * Example: `<ScreenShare>.forceBrowser('Firefox');`
         * @param {string} browser 
         * @returns {ScreenShare} self
         */
        forceBrowser(browser) {
            this.forcedBrowser = browser;
            return this;
        }
        async start() {
            let browser = this.forcedBrowser || identifyBrowser();
            if (!isCompatibleWith(browser)) throw 'not compatible';
            let stream = await browsersFunctions[browser]({
                video: this.video,
                audio: this.audio
            });
            this.stream = stream;

            return this.stream;
        }
    }

    return {
        identifyBrowser,
        isCompatibleWith,
        ScreenShare,
        browsersFunctions
    }
})();