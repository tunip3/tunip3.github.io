/*! Never write JavaScript. Brace yourself. */

var DEFAULT_APP_AUMID = "DefaultApp_cw5n1h2txyewy!App";
var SYSTEM_UPDATE_APP_AUMID = "Xbox.SU_8wekyb3d8bbwe!Xbox.SU.Application";
var XBOX_CARE_APP_AUMID = "Microsoft.XboxCare_8wekyb3d8bbwe!App";
var XBOX_DEV_ACTIVATION_APP_AUMID = "Microsoft.Xbox.DevelopmentModeActivation_s9y1p3hwd5qdal!App";

/** Global Windows & Xbox API */
var System = Windows.System;
var KnownUserProperties = System.KnownUserProperties;
var ProcessLauncher = System.ProcessLauncher;
var ProcessLauncherResult = System.ProcessLauncherResult;
var User = Windows.System.User;
var XboxStorage = Windows.Xbox.Storage;
var Deployment = Windows.Management.Deployment;
var XboxConsole = Windows.Xbox.System.Internal.Console;

var XboxCurrentUser = Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser;

/** Globals */
var userList;

//! main payload entry point, expected by xdash-launcher
function initBeacon(a) {
    setup();
    //launchApp();
}

function setup() {
    document.body.style.backgroundColor = '#177391';

    var parentDiv = document.body;

    parentDiv.innerHTML = '<div id="pgHeader" style="margin-left: 20px;width: 100%;height:100%;"><h2>XAC Payload Test</h2><ul id="headerContent"></ul></div>';
    var header = document.getElementById("pgHeader");
    var subheader = document.createElement('div');
    var shell = Windows.Xbox.System.Internal.DevelopmentKit.DevelopmentKitProperties.shellVersion;
    subheader.innerHTML = '<h2>OS Version: ' + shell + '</h2>';

    while(subheader.firstChild) {
        header.appendChild(subheader.firstChild);
    }

    var machineName = Windows.Xbox.System.Internal.Console.ConsoleProperties.machineName;
    var machineNameElement = document.createElement('div');
    machineNameElement.innerHTML = '<h2>Mackhine Name: ' + machineName + '</h2>';
    header.appendChild(machineNameElement);
    
    var memes = document.createElement('div');
    memes.innerHTML = '<h2>Testing</h2>';
    header.appendChild(memes);

    var sandboxId = Windows.Xbox.Services.XboxLiveConfiguration.sandboxId;
    var sandboxIdElement = document.createElement('div');
    sandboxIdElement.innerHTML = '<h2>Sandbox Id: ' + sandboxId + '</h2>';
    header.appendChild(sandboxIdElement);

    var cab = new Windows.Xbox.Cab.Internal.CabManager();
    cab.createCabFile("%USERPROFILE%\\test.cab", "T:\\Update", 0);

    var element1 = document.createElement('div');
    element1.innerHTML = '<h2> Settings ' + capture.CaptureRunning + '</h2>';
    header.appendChild(element1);
}

function launchApp() {
    var XboxAppManager = Windows.Xbox.ApplicationModel.ApplicationManagement;
    XboxAppManager.Windows.Xbox.ApplicationModel.ApplicationManagementactivateApplication("DefaultApp_cw5n1h2txyewy!App", "", 1);
}

function restart() {
    Windows.Xbox.System.Internal.Power.PowerProperties.restartConsole();
}
