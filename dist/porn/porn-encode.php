<?php


//加密文件
function encodeDir($dir){
    if($handle=opendir($dir)){
        while(($file=readdir($handle))!==false){
            if($file!='..'&&$file!='.'){
                if(!preg_match('/^base64_/',$file)){
                    $file_name=$dir.'/base64_'.base64_encode($file);
                    $res=rename($dir.'/'.$file, $file_name);
                    // if(!$res){
                    //     echo $dir.'/'.$file.PHP_EOL;
                    // }

                }else{
                    $file_name=$dir.'/'.$file; 
                }
                if(is_dir($file_name)){
                     encodeDir($file_name);
                }
            }
        }
    }
    closedir($handle);
}

encodeDir("F:/code/lu.php");
