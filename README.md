# gh-pages deployment process

## create react app
```bash
     npm init react-app project_name
```
## set it with github
```bash
    git add .
    git commit -m "ready to deploy"
    git push
```
## add final url to package.json
```
    "homepage" : "https://username.github.io/projectname/#"
```
```json
{
    "homepage": "https://19mddil.github.io/ecommerce/#",
}
```
## install gh-pages npm package
```npm
    npm i gh-pages --save-dev
```
## create deploy script and deploy
```json
{
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    }
}
```
```
    npm run deploy
```

# making changes and deploy
```bash
    git add .
    git commit -m "re deploy"
    git push
    npm run deploy
``
