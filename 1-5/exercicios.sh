#!/bin/bash

#1
#echo "Shell Script é demais!"


#2
#frase="Shell Script com variáveis é demais!"

#echo $frase


#3
#comando=`hostname`

#echo "Este script está rodando no computador: $comando"


#4
#read -p "Caminho: " path

#if [ -e $path ]
#    then 
#        echo "O caminho $path está habilitado!"
#    else
#        echo "O caminho $path não está habilitado!"
#fi

#if [ -w $path ]
#    then
#        echo "Você tem permissão para editar $path"
#    else
#        echo "Você não tem permissão para editar $path"
#fi


#5
#for frases in `cat ./phrases.txt`
#    do
#    echo $frases
#done


#6
#read -p "Arquivo: " path

#if [ -e $path ]
#    then
#        if [ -f $path ]
#            then
#                echo "Arquivo comun"

#                ls -l $path
#        else [ -d $path ]
#                echo "Diretório"

#                ls -l $path
#        fi
#    else
#        echo "Outro tipo de arquivo"
#fi


#7
#file=$1

#if [ -e $file ]
#    then
#        if [ -f $file ]
#            then
#                echo "Arquivo comun"

#                ls -l $file
#        else [ -d $file ]
#                echo "Diretório"

#                ls -l $file
#        fi
#    else
#        echo "Outro tipo de arquivo"
#fi


#8
#files=$@

#for file in $files
#    do
#    if [ -e $file ]
#        then
#        if [ -f $file ]
#            then
#            echo "Arquivo comun"

#            ls -l $file
#        else [ -d $file ]
#            echo "Diretório"

#            ls -l $file
#        fi
#    else
#        echo "Outro tipo de arquivo"
#    fi
#done


#9
#file=$1

#if [ -f $file ]
#    then
#    echo "O argumento $file não é um diretório."
#else [ -d $file ]
#    count=`ls -l $file | wc -l`

#    echo "O $file tem $count arquivos."
#fi


#10
#day=$(date +%F)

#for file in `ls *.png`
#    do
#    mv $file ${day}-${file}
#done


#11
diretorio=$1
extensao=$2

day=$(date +%F)

cd $diretorio

for file in `ls *.$extensao`
    do
    echo "Renomeando $file para ${day}-${file}"
    
    mv $file ${day}-${file}
done
