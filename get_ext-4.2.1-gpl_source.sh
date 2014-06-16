#! /bin/bash

extjs_downloaded_filename=`echo $0 | awk -F"[/_]" 'END{print $3}'`
extjs_downloaded_zip="$extjs_downloaded_filename.zip"
extjs_downloaded_version=`echo $extjs_downloaded_filename | awk -F'[-]' 'END{print $2}'` 

yum install -y zip
current_directory=`pwd`


if [[ ! `echo $current_directory | grep -i '\/var\/www\/html'` ]]
then
 echo "you need to move into /var/www/html directory"
 exit
fi

if [[ ! -d ./extjs ]]
then

 wget http://cdn.sencha.com/ext/gpl/$extjs_downloaded_zip
 unzip ./$extjs_downloaded_zip
 rm -rf $extjs_downloaded_zip
 matched_filename=`ls | grep -i '^ext-'$extjs_downloaded_version`
 mv $matched_filename ./extjs
 chmod 777 ./extjs
 chmod 777 ./app.js

fi






