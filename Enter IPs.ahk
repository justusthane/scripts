#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
#SingleInstance Force
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
^!i::

IPs := []
i := 44

While (i <= 55) {
  Send % "10.9." . i . ".*"
  Send {Enter}
  Sleep 250
  i++
}


return
