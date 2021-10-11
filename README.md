# cbscreen 
cbscreen is a cross-browser screenshare library
### Example
```html
<!DOCTYPE html>
<head>
    <title>Example</title>
</head>
<body>
    <script src="https://unpkg.com/cbscreen@latest/index.js"></script>
    <script>
        let screen = new cbscreen.ScreenShare();
        screen
            .enableAudio()
            .enableVideo()
            .start()
            .then(x => {
                console.log(x); // x is an mediastream
            })
    </script>
</body>
```
### Compatibility
- [x] Chrome
- [x] Firefox (Not tested, but should work)
- [x] Opera (Should work as it uses chromium)
- [ ] Safari (Not tested)
