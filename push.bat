@echo off
cd /d "%~dp0"
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin"

echo ========================================================
echo   Muhammed Shuhiab U - Portfolio Git Push
echo   Destination: https://github.com/ujampadyshuhaib-cpu/myportfolio.git
echo ========================================================
echo.

git init
git add .
git commit -m "Muhammed Shuhiab U - Full-Stack Portfolio"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/ujampadyshuhaib-cpu/myportfolio.git

echo.
echo Pushing to GitHub (A browser window will pop up to sign in)...
git push -u origin main

echo.
echo ========================================================
echo   Finished! Refresh your GitHub page to see your code!
echo ========================================================
pause
