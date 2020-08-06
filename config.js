/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.1/255"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "tr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			disabled: false,
		},
		{
			module: "updatenotification",
			disabled: false,
			position: "top_bar"
		},
		{
			module: "clock",
			disabled: false,
			position: "top_left"
		},
		{
			module: "calendar",
			disabled: false,
			header: "Takvimim Ve Ozel Gunler",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-plus-o",
						url: "private takvim linkiniz"
					}
				]
			}
		},
		{
			module: "currentweather",
			disabled: false,
			position: "top_right",
			config: {
				location: "Konya",
				locationID: "306569",
				appid: "apikey"
			}
		},
		{
			module: "weatherforecast",
			disabled: false,
			position: "top_right",
			header: "Hava Durumu",
			maxNumberOfDays: 7,
			config: {
				location: "Konya",
				locationID: "306569",
				appid: "apikey"
			}
		},
		{
			module: "newsfeed",
			disabled: false,
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "CNN Türk",
						url: "https://www.cnnturk.com/feed/rss/turkiye/news"
					},
					{
						title: "BirGun",
						url: "https://www.birgun.net/xml/rss.xml"
					},
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
		  module: 'MMM-MyPrayerTimes',
		  position: 'top_center',
		  header: 'Namaz Vakitleri',
		  config: {
			  }
		},
		{
			module: "MMM-LICE",
			position: "bottom_right",
			disabled: false,
			config: {
				accessKey: "apikey",
				source: "USD",
				symbols: "TRY,EUR,XAU,XAG",
				useHeader: false,
				header: "Döviz Kurları",
				maxWidth: "400px",
				updateInterval: 2700000,
		  }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
