var Nightmare = require('nightmare');
var should = require('should');

describe('Nightmare', function () {

    it('登录后会跳转到我的登录页面', function (done) {
        var nightmare = new Nightmare({
            timeout: 2000
        });
        nightmare.goto('http://www.yahoo.com')
            .click('a.sign-in')
            .wait()
            .visible('form#login_form', function (visible) {
                visible.should.be.true;
            })
            .type('input[name=username]', 'ybakswu')
            .type('input[name=password]', '520811')
            .click('div#submit > button')
            .wait()
            .visible('li.tab-my', function (visible) {
                visible.should.be.true;
            })
            .run(done);
    });
});


