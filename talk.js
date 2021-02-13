$(function() {
    $('#yes').click(function(event) {
        modal('我就知道你一定想看。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('你点了不想看', A);
    });
});

function A() {
    modal('你居然点不想看', B);
}

function B() {
    modal('你竟然点不想看', C);
}

function C() {
    modal('你咋能点不想看', J);
}

function J() {
    modal('不想看，也得看，哼！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
       var music2 = document.getElementById("iframMusic");
        music2.src = 'blank.mp3';
        music2.oncanplay = function(){
        music2.play();
      
    };

    });
}
