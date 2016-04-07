---
layout: post
tags: ["desinstaller", "applications", "inutiles", "windows", "10"]
title: "Supprimer les applications inutiles de Windows 10"
---

Comme beaucoup de personnes je pense que vous êtes passés à Windows 10. Alors premières impressions : c'est beau, c'est cool mais il y a (encore) pas mal de trucs inutiles.

Donc, voici certaines commandes que vous pouvez utiliser pour désinstaller les applications qui ne vous servent pas.

Tout d'abord, [ouvrez une invite de commandes (cmd) en tant qu'administrateur](https://i.imgur.com/qhrvJRh.png) et tapez "powershell".
<br />Puis, entrez les commandes que vous souhaitez :

### Supprimer 3D Builder
<pre>Get-AppxPackage -AllUsers -Name Microsoft.3DBuilder | Remove-AppxPackage</pre>

### Supprimer Alarmes et horloge
<pre>Get-AppxPackage -AllUsers -Name Microsoft.WindowsAlarms | Remove-AppxPackage</pre>

### Supprimer Bing Actualité
<pre>Get-AppxPackage -AllUsers -Name Microsoft.BingNews | Remove-AppxPackage</pre>

### Supprimer Bing Finance
<pre>Get-AppxPackage -AllUsers -Name Microsoft.BingFinance | Remove-AppxPackage</pre>

### Supprimer Bing Météo
<pre>Get-AppxPackage -AllUsers -Name Microsoft.BingWeather | Remove-AppxPackage</pre>

### Supprimer Bing Sport
<pre>Get-AppxPackage -AllUsers -Name Microsoft.BingSports | Remove-AppxPackage</pre>

### Supprimer Camera
<pre>Get-AppxPackage -AllUsers -Name Microsoft.WindowsCamera | Remove-AppxPackage</pre>

### Supprimer Cartes
<pre>Get-AppxPackage -AllUsers -Name Microsoft.WindowsMaps | Remove-AppxPackage</pre>

### Supprimer Contacts
<pre>Get-AppxPackage -AllUsers -Name Microsoft.People | Remove-AppxPackage</pre>

### Supprimer Courrier et Calendrier
<pre>Get-AppxPackage *communi* | Remove-AppxPackage</pre>

### Supprimer Enregistreur Vocal
<pre>Get-AppxPackage -AllUsers -Name Microsoft.WindowsSoundRecorder | Remove-AppxPackage</pre>

### Supprimer Get Started
<pre>Get-AppxPackage -AllUsers -Name Microsoft.Getstarted | Remove-AppxPackage</pre>

### Supprimer Microsoft Edge
*Ceci va entraîner des problèmes sur plusieurs applications !*
<pre>Get-AppxPackage -AllUsers -Name Microsoft.MicrosoftEdge | Remove-AppxPackage</pre>

### Supprimer Microsoft Office (hub)
<pre>Get-AppxPackage -AllUsers -Name Microsoft.MicrosoftOfficeHub | Remove-AppxPackage</pre>

### Supprimer Musique
<pre>Get-AppxPackage -AllUsers -Name Microsoft.ZuneMusic | Remove-AppxPackage</pre>

### Supprimer OneNote
*Pour rappel, OneNote ne fonctionne pas si OneDrive est désinstallé.*
<pre>Get-AppxPackage -AllUsers -Name Microsoft.Office.OneNote | Remove-AppxPackage</pre>

### Supprimer Phone Companion
<pre>Get-AppxPackage -AllUsers -Name Microsoft.WindowsPhone | Remove-AppxPackage</pre>

### Supprimer Photos
<pre>Get-AppxPackage -AllUsers -Name Microsoft.Windows.Photos | Remove-AppxPackage</pre>

### Supprimer Skype
<pre>Get-AppxPackage -AllUsers -Name Microsoft.SkypeApp | Remove-AppxPackage</pre>

### Supprimer Solitaire Collection
<pre>Get-AppxPackage -AllUsers -Name Microsoft.MicrosoftSolitaireCollection | Remove-AppxPackage</pre>

### Supprimer Vidéo
<pre>Get-AppxPackage -AllUsers -Name Microsoft.ZuneVideo | Remove-AppxPackage</pre>

### Supprimer Xbox
*Certains jeux téléchargés sur le Windows Store ne fonctionneront plus !*
<pre>Get-AppxPackage -AllUsers -Name Microsoft.XboxApp | Remove-AppxPackage</pre>

### Pour supprimer OneDrive
Copiez-collez le code ci-dessous et enregistrez le dans un fichier "OneDrive.cmd" avec le bloc-notes (respectez bien les guillemets), puis executez le.
<pre>@echo off
cls

set x86="%SYSTEMROOT%\System32\OneDriveSetup.exe"
set x64="%SYSTEMROOT%\SysWOW64\OneDriveSetup.exe"

echo Closing OneDrive process.
echo.
taskkill /f /im OneDrive.exe > NUL 2>&1
ping 127.0.0.1 -n 5 > NUL 2>&1

echo Uninstalling OneDrive.
echo.
if exist %x64% (
%x64% /uninstall
) else (
%x86% /uninstall
)
ping 127.0.0.1 -n 5 > NUL 2>&1

echo Removing OneDrive leftovers.
echo.
rd "%USERPROFILE%\OneDrive" /Q /S > NUL 2>&1
rd "C:\OneDriveTemp" /Q /S > NUL 2>&1
rd "%LOCALAPPDATA%\Microsoft\OneDrive" /Q /S > NUL 2>&1
rd "%PROGRAMDATA%\Microsoft OneDrive" /Q /S > NUL 2>&1 

echo Removeing OneDrive from the Explorer Side Panel.
echo.
REG DELETE "HKEY_CLASSES_ROOT\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" /f > NUL 2>&1
REG DELETE "HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" /f > NUL 2>&1

pause</pre>

Voilà voilà, je profite de ce post pour vous parler d'Algogo, il y aura bientôt une nouvelle bêta avec pas mal de changements très bientôt !
<br />Si vous souhaitez désinstaller encore plus de choses, je vous laisse avec [ce post](http://secondclock.net/?p=28) de BlackSheep.

Je referai un post pour vous parler des changements avec Algogo !<br />
-Skyost