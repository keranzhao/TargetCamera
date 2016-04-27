
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.getElementById('startCameraButton').addEventListener('mousedown', this.onStartCamera, false);
		document.getElementById('stopCameraButton').addEventListener('mousedown', this.onStopCamera, false);
		document.getElementById('takePictureButton').addEventListener('mousedown', this.onTakePicture, false);
		document.getElementById('switchCameraButton').addEventListener('mousedown', this.onSwitchCamera, false);		
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onStartCamera: function() {
		var tapEnabled = true;
		var dragEnabled = true;
        var toBack = true;
		cordova.plugins.camerapreview.startCamera({x: 0, y: 0, width: 400, height:400}, "front", tapEnabled, dragEnabled, toBack);
	},
	onStopCamera: function() {
		cordova.plugins.camerapreview.stopCamera();
	},
	onTakePicture: function() {
        cordova.plugins.camerapreview.takePicture({maxWidth:640, maxHeight:640});
	},
	onSwitchCamera: function() {
		cordova.plugins.camerapreview.switchCamera();
	},	
	// deviceready Event Handler   
	onDeviceReady: function() {	
		//on picture
		cordova.plugins.camerapreview.setOnPictureTakenHandler(function(result){
			document.getElementById('originalPicture').src = result[0];//originalPicturePath;
			document.getElementById('previewPicture').src = result[1];//previewPicturePath;
		});
	}
};

app.initialize();