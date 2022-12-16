# putty相关路径 ==========================================================
$env:Path = "C:\Program Files\PuTTY\;"+$env:Path
$puttyConfigDir = "D:\git-project\chengbelief.top.server\key\private.ppk"
$serverDir = "chenghan@120.24.189.233:/home/chenghan/javaweb/"
$warFile = "D:\project\war\book.war"
pscp -i $puttyConfigDir $warFile $serverDir