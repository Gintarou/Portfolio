barba.init({
    transitions: [{
        // 現在のページを離れる時のフック
        leave: function (data) {
            return new Promise(function (resolve, reject) {
                leaveAnimation(data.current.container);
                setTimeout(function () {
                    resolve();
                }, 800)
            });
        },
       // 次のページを表示する時のフック
        enter: function (data) {
            enterAnimation(data.next.container);
        }
    }]
});
// 現在のページを離れる時のアニメーション
function leaveAnimation(e) {
    anime.timeline().add({
        easing: 'easeOutSine',
        targets: e.querySelector('.section-01'),
        duration: 500,
        opacity: [1, 0],
        translateY: [0, '-15px']
    }).add({
        easing: 'easeOutSine',
        targets: '.mask',
        duration: 400,
        translateY: ['100%', 0]
    }, '-=200');
}
// 次のページを表示する時のアニメーション
function enterAnimation(e) {
    anime.timeline().add({
        easing: 'easeInSine',
        targets: '.mask',
        duration: 300,
        delay: 200,
        translateY: [0, '-100%']
    }).add({
        easing: 'easeInSine',
        targets: e.querySelector('.section-01'),
        duration: 400,
        opacity: [0, 1],
        translateY: ['15px', 0]
    }, '-=100');
}
