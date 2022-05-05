# Send to prod
npm run build 
scp -i /home/johndee/sportsman.pem -rp build ubuntu@18.223.15.113:/var/www/asiamayfield/van-life