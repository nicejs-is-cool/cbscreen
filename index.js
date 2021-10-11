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
        return browsersStreams.hasOwnProperty(browser);
    }
    let browsersFunctions = {
        async Chrome() {
            let captureStream = null;
            try {
                captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            } catch(err) {
                console.error("Error: " + err);
            }
            return captureStream;
        }
    }
    browsersFunctions.Firefox = browsersFunctions.Chrome;
    class ScreenShare {
        constructor() {
            this.video = false;
            this.audio = false;
            this.stream = null;
        }
        enableVideo() {
            this.video = true;
            return this;
        }
        enableAudio() {
            this.audio = true;
            return this;
        }
        async start() {
            let browser = identifyBrowser();
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
        browsersStreams
    }
})();