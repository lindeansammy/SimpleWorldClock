/*
   JavaScript Assignment 01 
   Developed By: 
   Developed Date:  June 2018

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/


function startTime() {
    // 1000 = one second
    // 100  = one minute
    window.setInterval( "worldTime()", 100 );
}


function worldTime() {
    // Hour offsets from UTC zone
    // http://www.timeanddate.com/time/map/#!cities=234,104,179,136,248,240
    
    var timeOffset = new Array( -8, -6, -5, 0, 9, 10 ); 
    var universalTime = getUtcTime();    
    var oldTime = new Date( universalTime );
    
    for( var place=0; place<6; place++ ) {
        doNewTime = addTime( oldTime, timeOffset[place] );
        elPlace = document.getElementById( 'place' + (place+1) );
        elPlace.value = showTime( doNewTime );        
    }
}


/**
 * Used to add a specified number of milliseconds to a date object named oldtime.<br>
   A new date object with the new time value is returned by the function.
 * @param {Date} oldtime
 * @param {Integer} milliseconds
 * @returns {Date}
 */
function addTime( oldTime, hrs ) {
    var doNewTime = new Date();  // create empty data object
    var msOldTime = oldTime.getTime();
    var milliseconds = hrsToMs(hrs)
    var msNewTime = msOldTime + milliseconds;
    
    // compensate for a missing hour by adding one hour
    if( hrs<1 ) {
        comp = hrsToMs(1);
    } else {
        comp = 0;
    }
    
    doNewTime.setTime( msNewTime + comp );   
    return( doNewTime );   // return date object
}


function showTime( time ) {
    var h = ('0'+time.getHours()).slice(-2);    // pad with 0
    var m = ('0'+time.getMinutes()).slice(-2);  // same
    var p;
    var newTimeFormat = '';
    
    if( h > 12 ) {
        p = "PM";
    } else {
        p = "AM";
    }
    newTimeFormat = h + ':' + m + ' ' + p;
    return( newTimeFormat );
}


/**
 * Calculates UTC offset in milliseconds
 * mtl 5hr diff,
 * tml time 10PM
 * UTC time = 22 + 5 = 27 - 24 = 3AM
 * @returns {Number|getUTC.msUTC}
 */
function getUtcTime() {
    var d = new Date();
    var msLocalTime = d.getTime();
    var msLocalOffset = d.getTimezoneOffset() * 60000;
    var msUtcTime = msLocalTime + msLocalOffset;
    return( msUtcTime );
}


/**
 * Converts hours to milliseconds
 * @param {type} hr
 * @returns {Number}
 */
function hrsToMs( hr ) {
    var ms = hr * 3600000;
    return( ms );
}


/**
 * Turns on the highlight on time, office and address elements
 * @param {type} objSource
 * @returns {undefined} null
 */
function on( objSource ) {
    type = objSource.id[0];   // p or n
    num  = objSource.id.slice(-1);
    
    objSource.style.backgroundColor = 'orange';
    objSource.style.opacity = .7;
    objSource.style.color = 'white';
    if( type==='p' ) {
        str1 = 'name';
        str2 = 'address';
    } else if( type==='n' ) {
        str1 = 'place';
        str2 = 'address';
    } else if( type==='a') {
        str1 = 'name';
        str2 = 'place';
    }
    objTarget1 = document.getElementById( str1 + num );
    objTarget1.style.backgroundColor = 'orange';
    objTarget1.style.opacity = .7;
    objTarget1.style.color = 'white';

    objTarget2 = document.getElementById( str2 + num );
    objTarget2.style.backgroundColor = 'orange';
    objTarget2.style.opacity = .7;
    objTarget2.style.color = 'white';    
}

/**
 * Turns off the highlight on time, office and address elements
 * @param {type} objSource
 * @returns {undefined} null
 */
function off( objSource ) {
    type = objSource.id[0];   // p or n
    num  = objSource.id.slice(-1);
    
    objSource.style.backgroundColor = '';
    objSource.style.opacity = null;
    objSource.style.color = '';
    if( type==='p' ) {
        str1 = 'name';
        str2 = 'address';
    } else if( type==='n' ) {
        str1 = 'place';
        str2 = 'address';
    } else if( type==='a') {
        str1 = 'name';
        str2 = 'place';
    }
    objTarget1 = document.getElementById( str1 + num );
    objTarget1.style.backgroundColor = '';
    objTarget1.style.opacity = null;
    objTarget1.style.color = '';  
    
    objTarget2 = document.getElementById( str2 + num );
    objTarget2.style.backgroundColor = '';
    objTarget2.style.opacity = null;
    objTarget2.style.color = '';     
}
