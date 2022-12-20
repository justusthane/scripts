#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
#SingleInstance Force
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
;SetTitleMatchMode, RegEx

commandMode := False
#If (WinActive("Mail - jbadergr (Justus Grunow) - Outlook") Or WinActive("ahk_exe notepad.exe")) And GetKeyState("Capslock", "T")
  j::Down
  k::Up
  d::Del
  /::!q
  ;$s::
  ;Send, s
#If
