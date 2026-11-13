@echo off
cd /d "%~dp0"
echo Initializing Git repository and pushing to GitHub...
git init
git add .
git commit -m "Muhammed Shuhiab U - Portfolio"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/ujampadyshuhaib-cpu/myportfolio.git
git push -u origin main
echo.
echo ========================================================
echo Done! If you were asked to login, your browser opened to authenticate.
echo ========================================================
pause
