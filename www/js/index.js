var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

    ClearDirectory();
    
    function timeEnd() {
        $.mobile.changePage('#time-end', 'pop', true, true);
    }

    var frontText = 'Тренинг програма за развитие на продажбени умения<br/><br/>Outstanding Customers Delight<sup>ТМ</sup>';
    $('#frontText').html(frontText);

    var hidden = ['color', 'hotel'];
        
    $.each(hidden, function( index, value ) {
        $('a[href="#' + value + '"]').closest('li').remove();
    });

    $('#carpenter').bind("pageshow", function (event, data) {
        
        $('#carpenter').find('button').unbind('click').click(function(){
            
            var order = '';
            count = 5;
            $('.select-carpenter').find('li').each(function(){
                order += '<h2> ' + count + '. ' + $(this).text() + '</h2>';
                count--;
            });
            
            $('.text-display').html(order);
            $.mobile.changePage('#text-carpenter', 'pop', true, true);
        }); 
        
        $('select-carpenter li').removeClass('ui-corner-bottom');
        $('.select-carpenter')
            .addClass('ui-corner-top')
            .removeClass('ui-corner-all')
            .sortable({
                'containment': 'parent',
                'opacity': 0.6,
            update: function(event, ui) {
            }
        });
    });
    
    $('#sell-green').bind("pageshow", function (event, data) {
        $('.counter-green').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-blue').bind("pageshow", function (event, data) {
        $('.counter-blue').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-yellow').bind("pageshow", function (event, data) {
        $('.counter-yellow').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-orange').bind("pageshow", function (event, data) {
        $('.counter-orange').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-purple').bind("pageshow", function (event, data) {
        $('.counter-purple').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-white').bind("pageshow", function (event, data) {
        $('.counter-white').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#sell-black').bind("pageshow", function (event, data) {
        $('.counter-black').countdown({
              image: 'img/digits.png',
              startTime: '02:00',
              timerEnd: function(){ timeEnd(); },
              format: 'mm:ss'
        }); 
    });

    $('#hotel-agency').bind("pageshow", function (event, data) {
        $('#hotel-agency').find('button').unbind('click').click(function(){
            
            var text1 = "<h4>Въпроси:</h4> " + $('#text-1').val();
            var text2 = "<h4>Нужди:</h4> " + $('#text-2').val();

            $('.text-1-display').html(text1);
            $('.text-2-display').html(text2);
            $.mobile.changePage('#text-agency', 'pop', true, true);
        })  
    });

    $('#hotel-customer').bind("pageshow", function (event, data) {
        $('#hotel-customer').find('button').unbind('click').click(function(){
            
            var text3 = "<h4>Цел на пътуването:</h4> " + $('#text-3').val();
            var text4 = "<h4>Продължителност:</h4> " + $('#text-4').val();
            var text5 = "<h4>Период:</h4> " + $('#text-5').val();
            var text6 = "<h4>Брой хора:</h4> " + $('#text-6').val();
            var text7 = "<h4>Форма на настаняване:</h4> " + $('#text-7').val();
            var text8 = "<h4>Допълнителни услуги и забавления:</h4> " + $('#text-8').val();
            var text9 = "<h4>Вид транспорт:</h4> " + $('#text-9').val();
            var text10 = "<h4>Общ бюджет за пътуването:</h4> " + $('#text-10').val();

            $('.text-3-display').html(text3);
            $('.text-4-display').html(text4);
            $('.text-5-display').html(text5);
            $('.text-6-display').html(text6);
            $('.text-7-display').html(text7);
            $('.text-8-display').html(text8);
            $('.text-9-display').html(text9);
            $('.text-10-display').html(text10);


            $.mobile.changePage('#text-client', 'pop', true, true);
        })  
    });
   

    $('#test-attitudes').bind("pageshow", function (event, data) {
        $('#test-attitudes').find('button').unbind('click').click(function(){
            
            var score = 0;
            $('#test-attitudes').find('select option:selected').each(function(){
                score += parseInt($(this).val(),10);
            })

            $('#atitude-text').html("<h4>Вашият резултат е: " + score + '</h4>Моля, запомнете го!');
            $.mobile.changePage('#atitude-score', 'pop', true, true);
        })  
    });

    $('#house-1').bind("pageshow", function (event, data) {
        $('#house-1').find('.email-1-up').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-1').find('.email-1-down').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-1').find('.email-1-clear').unbind('click').click(function(){
            var element = $(this).closest('p');
            element.find('span').html(0);
            return false;
        })
    });

    $('#house-2').bind("pageshow", function (event, data) {
        $('#house-2').find('.email-2-up').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-2').find('.email-2-down').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-2').find('.email-2-clear').unbind('click').click(function(){
            var element = $(this).closest('p');
            element.find('span').html(0);
            return false;
        })
    });

    $('#house-3').bind("pageshow", function (event, data) {
        $('#house-3').find('.email-3-up').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-3').find('.email-3-down').unbind('click').click(function(){
            var element = $(this).find('span');
            var current = parseInt(element.html(), 10);
            element.html(current + 1);
            return false;
        })

        $('#house-3').find('.email-3-clear').unbind('click').click(function(){
            var element = $(this).closest('p');
            element.find('span').html(0);
            return false;
        })
    });
    
    $('#appartament').bind("pageshow", function (event, data) {

        var score = 0;
        var score_multi = 0;

        $('#appartament').find('.single-choise option:selected').each(function(){
            score += parseInt($(this).val(),10);
        })

        $('.single-result').html(score);
    
        if(score >  565) {
            $('.single-result').css('color', 'red');    
        } else {
            $('.single-result').css('color', 'black');
        }


        $('#appartament').find('.group-choise option:selected').each(function(){
            score_multi += parseInt($(this).val(),10);
        })

        $('.group-result').html(score_multi);
    
        if(score_multi >  565) {
            $('.group-result').css('color', 'red'); 
        } else {
            $('.group-result').css('color', 'black');
        }

        $('#appartament').find('.single-choise').change(function(){
            
            var score = 0;

            $('#appartament').find('.single-choise option:selected').each(function(){
                score += parseInt($(this).val(),10);
            })

            $('.single-result').html(score);
        
            if(score >  565) {
                $('.single-result').css('color', 'red');    
            } else {
                $('.single-result').css('color', 'black');
            }
        });

        $('#appartament').find('.group-choise').change(function(){
            
            var score = 0;

            $('#appartament').find('.group-choise option:selected').each(function(){
                score += parseInt($(this).val(),10);
            })

            $('.group-result').html(score);
        
            if(score >  565) {
                $('.group-result').css('color', 'red'); 
            } else {
                $('.group-result').css('color', 'black');
            }
        })
    });
    }
}

function ClearDirectory(localData) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);

    function fail(evt) {
        alert("FILE SYSTEM FAILURE" + evt.target.error.code);
    }
    
    function onFileSystemSuccess(fileSystem) {
        fileSystem.root.getDirectory(
                "teambuilding",
                {create: true, exclusive: false},
        function(entry) {
            console.log('entry');
            entry.removeRecursively(function() {
                console.log('entry');
                //var localData = JSON.parse(window.localStorage.getItem('configTeambuilding'));
                //if (parseInt(localData.welcome.type, 10) === 1) {
                //    downloadFile(localData.welcome.image, 'welcome/image/welcome.png');
                //} else if (parseInt(localData.welcome.type) === 2) {
                //    downloadFile(localData.welcome.video, 'welcome/video/welcome.mp4');
                //} else {
                //    alert('Unsuported upload!');
                //    $.mobile.loading('hide');
                //}
            }, fail);
        }, fail);
    }
}