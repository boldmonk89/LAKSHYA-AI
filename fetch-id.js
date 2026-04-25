fetch('https://www.youtube.com/@Career247Official')
  .then(res => res.text())
  .then(text => {
    const match = text.match(/"channelId":"([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log("Not found");
    }
  });
