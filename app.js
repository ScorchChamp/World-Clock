var timezones = [
    { offset: -12, name: "UTC-12", location: "International Date Line West" },
    { offset: -11, name: "UTC-11", location: "Niue" },
    { offset: -10, name: "UTC-10", location: "Hawaii" },
    { offset: -9, name: "UTC-9", location: "Alaska" },
    { offset: -8, name: "UTC-8", location: "Pacific Time (US & Canada)" },
    { offset: -7, name: "UTC-7", location: "Mountain Time (US & Canada)" },
    { offset: -6, name: "UTC-6", location: "Central Time (US & Canada), Mexico City" },
    { offset: -5, name: "UTC-5", location: "Eastern Time (US & Canada), Bogota, Lima" },
    { offset: -4, name: "UTC-4", location: "Atlantic Time (Canada), Caracas, La Paz" },
    { offset: -3, name: "UTC-3", location: "Brazil, Buenos Aires, Georgetown" },
    { offset: -2, name: "UTC-2", location: "Mid-Atlantic" },
    { offset: -1, name: "UTC-1", location: "Azores, Cape Verde Islands" },
    { offset: 0, name: "UTC", location: "Western Europe Time, London, Lisbon, Casablanca" },
    { offset: 1, name: "UTC+1", location: "Brussels, Copenhagen, Madrid, Paris" },
    { offset: 2, name: "UTC+2", location: "Kaliningrad, South Africa, Warsaw, Athens, Istanbul" },
    { offset: 3, name: "UTC+3", location: "Baghdad, Kuwait, Riyadh, Moscow, St. Petersburg" },
    { offset: 4, name: "UTC+4", location: "Abu Dhabi, Muscat, Baku, Tbilisi" },
    { offset: 5, name: "UTC+5", location: "Ekaterinburg, Islamabad, Karachi, Tashkent" },
    { offset: 6, name: "UTC+6", location: "Almaty, Dhaka, Colombo" },
    { offset: 7, name: "UTC+7", location: "Bangkok, Hanoi, Jakarta" },
    { offset: 8, name: "UTC+8", location: "Beijing, Perth, Singapore, Hong Kong" },
    { offset: 9, name: "UTC+9", location: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" },
    { offset: 10, name: "UTC+10", location: "Eastern Australia, Guam, Vladivostok" },
    { offset: 11, name: "UTC+11", location: "Magadan, Solomon Islands, New Caledonia" },
    { offset: 12, name: "UTC+12", location: "Auckland, Wellington, Fiji, Kamchatka" }
];
let now = new Date();
const ownOffset = now.getTimezoneOffset()/-60;

function displayTime() {
    now = new Date();

    for (var i = 0; i < timezones.length; i++) {
        var offset = timezones[i].offset;
        var clockTime = new Date(now.getTime() + (offset-ownOffset) * 3600000);
        var hours = clockTime.getHours();
        var minutes = clockTime.getMinutes();
        var seconds = clockTime.getSeconds();
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        document.getElementById("timezone" + i).innerHTML = `<div class="time">${hours}:${minutes}:${seconds}</div><div class="location">${timezones[i].location}</div>`;
    }
}
document.getElementById("timezone-container").innerHTML = timezones.map((item, index) => {
    return `<div class="timezone-item ${ownOffset===item.offset ? "own-timezone": ""}" id="timezone${index}"></div>`
}).join('')

window.addEventListener("load", function () {
    displayTime()
    setInterval(displayTime, 33);
})

