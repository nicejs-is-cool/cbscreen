# cbscreen 
cbscreen is a cross-browser screenshare library
### Example
```html
<!DOCTYPE html>
<head>
    <title>Example</title>
</head>
<body>
    <script src="./cbscreen.js"></script>
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
- [ ] Firefox (Not tested)
- [ ] Opera (Not tested)
- [ ] Safari (Not tested)
