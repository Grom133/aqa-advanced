function delyedLog(text, delay) {
    setTimeout(() => { console.log(text); }, delay);
}

delyedLog("text in 5 secs", 5000);