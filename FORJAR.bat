@echo off
title TEMPLO MAUSKI V3
npm install
npx cap add android
npx cap sync android
echo TEMPLO TERMINÓ CAPI
pause