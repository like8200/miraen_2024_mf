UniSignW2A.getLicenseInfoWithProcURL=function(a,b){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"licenseinfo","requestCode","2","retURL",a,"procURL",b),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"LicenseInfo","caller_url_scheme",a,"callback","01","procURL",b),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)};UniSignW2A.esignWithProcURL=function(a,b,c,d,e,f,g){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"esign","requestCode","8","retURL",a,"appkey",b,"data",_USUtil.Base64.encode(c),"rtnParam",d,"sidOption",e,"sidValue",f,"procURL",g),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"SignedData","caller_url_scheme",a,"appkey",b,"data",_USUtil.Base64.encode(c),"callback",d,"sidOption",e,"sidValue",f,"procURL",g),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)};UniSignW2A.esignWithEncVID=function(a,b,c){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"esignWithEncVID","requestCode","9","retURL",a,"data",_USUtil.Base64.encode(b),"rtnParam",c),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"SignedDataWithEncVID","caller_url_scheme",a,"data",_USUtil.Base64.encode(b),"callback",c),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)};UniSignW2A.backupStore=function(a,b,c,d,e,f){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"backupStore","requestCode","8","retURL",a,"caller",b,"p12",c,"p12key",d,"option",e,"rtnParam",f),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"BackupStore","caller_url_scheme",a,"caller",b,"p12",c,"p12key",d,"option",e,"callback",f),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)};UniSignW2A.backupLoad=function(a,b,c,d){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"backupLoad","requestCode","8","retURL",a,"caller",b,"option",c,"rtnParam",d),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"BackupLoad","caller_url_scheme",a,"caller",b,"option",c,"callback",d),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)};var UniSignFP={Scheme:{iOS:"unisign-app",Android:"crosscert"},Package:{Android:"com.crosscert.androidfp"},DownloadURL:{iOS:"https://itunes.apple.com/kr/app/gong-in-injeungsenteo/id426081742?mt=8",Android:"market://details?id=com.crosscert.android"},AutoCheckInstallation:!0,checkCrossCert:function(a){if(_USUtil.OS.isAndroid())alert(_USMessage.NoticeDownload),top.location.href=_USUtil.makeIntent(this.Scheme.Android,"init","isInit","true");else if(_USUtil.OS.isiOS()){if(0!=this.AutoCheckInstallation||null==a||0==a.length){if(null==a||0==a.length)a=this.Scheme.iOS+"://?cmd=Main&caller_url_scheme="+location.href+"&callback=01";var b=+new Date;setTimeout(function(){1600>+new Date-b&&UniSign.moveToStore()},1500)}top.location.href=a}else alert(_USMessage.NoticeUnsupportedOS)},moveToStore:function(){_USUtil.OS.isAndroid()?top.location.href=this.DownloadURL.Android:_USUtil.OS.isiOS()?top.location.href=this.DownloadURL.iOS:alert(_USMessage.NoticeUnsupportedOS)},getLicenseInfo:function(a){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"licenseinfo","requestCode","2","retURL",a),console.debug("getLicenseInfo : "+a),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"LicenseInfo","caller_url_scheme",a,"callback","01"),console.debug("getLicenseInfo : "+a),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)},manageCert:function(a,b){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"mngmt","requestCode","1","retURL",a,"rtnParam",b),console.debug("manageCert : "+a),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"ManageCert","caller_url_scheme",a,"callback",b),console.debug("manageCert : "+a),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)},esign:function(a,b,c,d,e,f){_USUtil.OS.isAndroid()?(a=_USUtil.makeIntent(this.Scheme.Android,"esign","requestCode","8","retURL",a,"appkey",b,"data",_USUtil.Base64.encode(c),"rtnParam",d,"sidOption",e,"sidValue",f),console.debug("esign : "+a),top.location.href=a):_USUtil.OS.isiOS()?(a=_USUtil.makeCustomScheme(this.Scheme.iOS,"SignedData","caller_url_scheme",a,"appkey",b,"data",_USUtil.Base64.encode(c),"callback",d,"sidOption",e,"sidValue",f),console.debug("esign : "+a),this.checkCrossCert(a)):alert(_USMessage.NoticeUnsupportedOS)}};