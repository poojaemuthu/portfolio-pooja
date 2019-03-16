if (process.env.NODE_ENV === 'production') {
    //running in production
} else {
    //running in development
} 

APP_NAME=Test
APP_ENV=production
APP_KEY=1234

const dotEnvContent = `APP_NAME = ${process.env.APP_NAME}<br>APP_ENV = ${process.env.APP_ENV}<br>APP_KEY = ${process.env.APP_KEY}`;    
    document.getElementById('dotEnv').innerHTML = dotEnvContent;
