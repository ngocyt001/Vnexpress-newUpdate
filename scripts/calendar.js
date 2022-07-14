
flatpickr("#dateTime", {
    dateFormat: "d-m-Y",
    inline: true
})

flatpickr("#dateTime_1", {
    dateFormat: "d-m-Y",
    inline: true
})

flatpickr("#dateTime_4", {
    dateFormat: "d-m-Y",
    inline: true
})

flatpickr("#dateTime_5", {
    dateFormat: "d-m-Y",
    inline: true
})


// var from1 = flatpickr("#dateTime_2", {
//     dateFormat: "d-m-Y",
//     inline: true
// })

// var to1 = flatpickr("#dateTime_3", {
//     dateFormat: "d-m-Y",
//     inline: true
// })



// var checkIn_time = document.querySelector('#dateTime_2')
// var checkIn_time_value = checkIn_time.value
// var checkIn_time_2 = document.querySelector('#dateTime_3')
// var checkIn_time_value_2 = checkIn_time_2.value

// console.log(checkIn_time_value)
// console.log(checkIn_time_value_2)

// const fp = document.querySelector("#dateTime_2").selectedDates
// const fp = flatpickr("#dateTime_2", {}); // flatpickr



// function getDays() {
//     var start = new Date(document.querySelector('#dateTime_2').value);
//     var end   = new Date(document.querySelector('#dateTime_3').value);
//     days  = (end - start) / 1000 / 60 / 60 / 24;
//     // if(days == 0 || days > 0) {
//     //   $('#howManyNights').val(days);
//     // }

//     console.log(days)
// }


// var from1 = flatpickr('#dateTime_2', {});
// var to1 = flatpickr('#dateTime_3', {});



// function getDays() {
//     var start = new Date($('#dateTime_2').val());
//     var end   = new Date($('#dateTime_3').val());
//     days  = (end - start) / 1000 / 60 / 60 / 24;
//     if(days == 0 || days > 0) {
//     $('#howManyNights').val(days);
//     }
//     return days;
// }
//     


var from1 = flatpickr('#dateTime_2', {inline: true});
var to1 = flatpickr('#dateTime_3', {inline: true});

function getDays() {
    var start = new Date($('#dateTime_2').val());
    var end   = new Date($('#dateTime_3').val());
    console.log(start, end);
    days  = (end - start) / 1000 / 60 / 60 / 24;
    if(days == 0 || days > 0) {
    $('#howManyNights').val(days);
    }
    return days;
}