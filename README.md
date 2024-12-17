# YandexMusicModClient
[![TotalDownloads](https://img.shields.io/github/downloads/OwlUniversal/YandexMusicModClient/total?label=Downloads)](https://github.com/OwlUniversal/YandexMusicModClient/releases "Download") [![OS - Windows](https://img.shields.io/badge/OS-Linux-blue?logo=windows&logoColor=white)](https://github.com/OwlUniversal/YandexMusicModClient/releases "Download")

### This is a modification for Yandex Music Desktop application for linux which unmodified version can be viewed [on github](https://github.com/cucumber-sp/yandex-music-linux).
### YandexMusicModClient or its developer is not affiliated with Yandex or any of their companies, staff etc.

> [!NOTE]  
> This modification is going to be rarely updated. Note that in mind.

## Install

> [!WARNING]  
> ### Installing the modification for an unsuitable client version can lead to unpredictable results.
> Before installing, make sure that the client version and the version for which the modification was made coincide.
> This can be checked on the Releases page.

0. Download latest [Yandex Music client](https://github.com/cucumber-sp/yandex-music-linux?tab=readme-ov-file#installation).
1. Download latest release [from here](https://github.com/OwlUniversal/YandexMusicModClient/releases).
2. Put the yandex-music.asar into `/usr/lib/yandex-music/`. *(do not forget to rename original to "yandex-music.asar.og")*
3. Done!

> [!NOTE]  
> Relogin may be required after patch install.

## Features

### Global Shortcuts
<details>
   <summary>Details</summary>

   
Adds support for Global Shortcuts.

Currently supported only this actions (I tried add more but others work pretty unstable due to horrible babel & webpack config on Yandex's end)

<details>
   <summary>Settings</summary>
   
	"globalShortcuts": {
		"TOGGLE_PLAY": "Ctrl+/",
		"MOVE_FORWARD": "Ctrl+,",
		"MOVE_BACKWARD": "Ctrl+.",
		"TOGGLE_SHUFFLE": "Ctrl+\'",
  		"REPEAT_NONE": undefined,
  		"REPEAT_CONTEXT": undefined,
  		"REPEAT_NONE": undefined,
	}
      
</details>

</details>

### Return dislike button
<details>
   <summary>Details</summary>
   
Returns dislike button on main player bar

![image](https://github.com/user-attachments/assets/22a83331-dfc4-4c7b-92c9-4fdbe2758910)

</details>

### Track quality display
<details>
   <summary>Details</summary>
   
Displayes track quality or codec

<details>
   <summary>Settings</summary>
      
	"playerBarEnhancement": {
 		"showDislikeButton": true //Enabels or disabels Return dislike button feature
		"showCodecInsteadOfQualityMark": true //Show codec instead of quality mark
	}
      
</details>

![image](https://github.com/user-attachments/assets/da143017-b9ff-4faf-91dc-b9ccc81b1e2f)
![image](https://github.com/user-attachments/assets/3e5b6fb2-fbd3-4e04-880c-f1e556d8c4ef)

</details>

### Enhanced Vibe Animation
<details>
   <summary>Details</summary>
   
Enhances Vibe Animation behavior. It better adapts to music. Also allows custom FPS of the animation rendering.
<details>
   <summary>Settings</summary>
      
      "vibeAnimationEnhancement": {
	    "maxFPS": 25,              	// Max allowed FPS. Defalut 25. Recommended 25 - 144. Don't set this value below 1
	    "intensityCoefficient": 1, 	// Sensitivity of music analysis. Default 1, Recommended: 0.5 - 2. If set to 0 disables enhancement behavior (almost :D)
	    "linearDeBoost": 5,		// [DEPRECATED] Separation coefficient of track peaks from the main track. Default 5. Recommended 2 - 8. If 1 disables libear deboost.
	    "playOnAnyEntity": false,	// If enabled Animation plays even if not My Vibe used as track source.
	    "disableRendering": false	// Disables rendering of the animation. Use only if you feel significant fps drops. Else try adjust maxFPS value.
      }
      
</details>

before:

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

after:

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c


</details>

### Download current track to a file
<details>
   <summary>Details</summary>
   
Allows download track that is currently playing into a file. Click to the quality/codec icon to show download dialog.

</details>

### Experiment overrides
<details>
   <summary>Details</summary>
   
Allows you to enable/disable any experiment in the app. To do so you need set `"enableDevTools": true` and then you'll see the button in the dev panel:

</details>

## Settings
Settings can be found in `HOME/.config/yandex-music/config.json`

In app UI:
<p align="left">
<img width="500" alt="UI Settings example" src="https://github.com/user-attachments/assets/89630ab8-a89c-41c3-983d-6352306398df">
</p>

> [!NOTE]  
> App restart required for settings apply.
