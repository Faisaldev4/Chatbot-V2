const _0xf007be=_0x40a2;(function(_0x236244,_0xf66f42){const _0x490ef2=_0x40a2,_0x350b74=_0x236244();while(!![]){try{const _0x16d9e0=parseInt(_0x490ef2(0x17b))/0x1*(-parseInt(_0x490ef2(0x16e))/0x2)+-parseInt(_0x490ef2(0x17d))/0x3+parseInt(_0x490ef2(0x12d))/0x4+-parseInt(_0x490ef2(0x132))/0x5*(-parseInt(_0x490ef2(0x127))/0x6)+parseInt(_0x490ef2(0x175))/0x7+-parseInt(_0x490ef2(0x164))/0x8*(parseInt(_0x490ef2(0x129))/0x9)+parseInt(_0x490ef2(0x165))/0xa*(-parseInt(_0x490ef2(0x17f))/0xb);if(_0x16d9e0===_0xf66f42)break;else _0x350b74['push'](_0x350b74['shift']());}catch(_0x19183c){_0x350b74['push'](_0x350b74['shift']());}}}(_0x2b37,0x71028));const cheerio=require(_0xf007be(0x151)),fs=require('fs'),fetch=require(_0xf007be(0x16b)),crypto=require('crypto'),moment=require(_0xf007be(0x12c));let handler=async(_0xe1bc01,{conn:_0xedaabe,args:_0x2767d4,text:_0x3b2c2c,usedPrefix:_0x5873d1,command:_0x507734})=>{const _0x378cb0=_0xf007be;let _0x5ee612=moment['tz'](_0x378cb0(0x177))[_0x378cb0(0x140)]('HH'),_0x59e1ca=moment['tz'](_0x378cb0(0x177))[_0x378cb0(0x140)]('mm'),_0x5f3c96=moment['tz'](_0x378cb0(0x177))[_0x378cb0(0x140)]('ss'),_0x14f1e1=_0x5ee612+_0x378cb0(0x155)+_0x59e1ca+_0x378cb0(0x155)+_0x5f3c96,_0x564ae5=new Date(new Date()+0x36ee80),_0x1165a5='id',_0x582fcb=['Pahing','Pon',_0x378cb0(0x156),_0x378cb0(0x17c),_0x378cb0(0x13e)][Math[_0x378cb0(0x173)](_0x564ae5/0x50ae4c0)%0x5],_0x3854d7=_0x564ae5[_0x378cb0(0x174)](_0x1165a5,{'weekday':_0x378cb0(0x166)}),_0x41f139=_0x564ae5[_0x378cb0(0x174)](_0x1165a5,{'day':'numeric','month':_0x378cb0(0x166),'year':'numeric'});switch(_0x507734){case _0x378cb0(0x137):{let _0x2fb5d5=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0x2fb5d5[_0x378cb0(0x15b)]<0x2)return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+_0x378cb0(0x143));let _0x28a8b2=_0x2fb5d5[0x0],_0x53c93a=_0xe1bc01[_0x378cb0(0x176)]?_0xe1bc01[_0x378cb0(0x176)]['sender']:_0x2fb5d5[0x1]?_0x2fb5d5[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+_0x378cb0(0x125):_0xe1bc01[_0x378cb0(0x169)][0x0],_0x30f8ec=_0x28a8b2,_0x3165b9='15',_0x4c58ba='1',_0x31ffc4='1000',_0x476c84='30',_0x3bb933='1000',_0x425ff2=_0x28a8b2+_0x378cb0(0x161);if(!_0x53c93a)return;let _0x31938d=(await _0xedaabe[_0x378cb0(0x178)](_0x53c93a['split']`@`[0x0]))[0x0]||{},_0x2b979d=_0x31938d['exists']?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)]('hex'):_0x2fb5d5[0x3],_0x39bd31=await fetch(domain+_0x378cb0(0x12b),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON['stringify']({'email':_0x425ff2,'username':_0x28a8b2,'first_name':_0x28a8b2,'last_name':_0x28a8b2,'language':'en','password':_0x2b979d[_0x378cb0(0x147)]()})}),_0x5ba108=await _0x39bd31['json']();if(_0x5ba108[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x5ba108[_0x378cb0(0x168)][0x0],null,0x2));let _0x1deb45=_0x5ba108[_0x378cb0(0x172)],_0x557fbe=await fetch(domain+_0x378cb0(0x149)+_0x3165b9,{'method':_0x378cb0(0x17a),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey}});_0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x14e)+_0x1deb45['id']),ctf='Hai\x20@'+_0x53c93a[_0x378cb0(0x15d)]`@`[0x0]+_0x378cb0(0x130)+_0x1deb45['id']+_0x378cb0(0x16a)+_0x1deb45['email']+_0x378cb0(0x14a)+_0x1deb45[_0x378cb0(0x123)]+_0x378cb0(0x13d)+_0x2b979d[_0x378cb0(0x147)]()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x126)+domain+_0x378cb0(0x152)+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0x53c93a,{'text':ctf,'mentions':[_0xe1bc01[_0x378cb0(0x16f)][_0x378cb0(0x15d)]('@')[0x0]+'@s.whatsapp.net']},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x3166df=await _0x557fbe['json'](),_0x456231=_0x3166df['attributes'][_0x378cb0(0x11f)],_0x5f0d84=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x30f8ec,'description':'\x20','user':_0x1deb45['id'],'egg':parseInt(_0x3165b9),'docker_image':'ghcr.io/parkervcp/yolks:nodejs_18','startup':_0x456231,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0x31ffc4,'swap':0x0,'disk':_0x3bb933,'io':0x1f4,'cpu':_0x476c84},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x4c58ba)],'dedicated_ip':![],'port_range':[]}})}),_0x2d4a12=await _0x5f0d84[_0x378cb0(0x120)]();if(_0x2d4a12[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON['stringify'](_0x2d4a12[_0x378cb0(0x168)][0x0],null,0x2));let _0x2f1b35=_0x2d4a12[_0x378cb0(0x172)],_0xa471df=await _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x144)+_0x1deb45['id']+_0x378cb0(0x14a)+_0x1deb45[_0x378cb0(0x123)]+_0x378cb0(0x16a)+_0x1deb45[_0x378cb0(0x124)]+'\x0aNAME\x20:\x20'+_0x1deb45[_0x378cb0(0x122)]+'\x20'+_0x1deb45[_0x378cb0(0x136)]+_0x378cb0(0x135)+(_0x2f1b35[_0x378cb0(0x160)][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x2f1b35[_0x378cb0(0x160)]['memory'])+'\x20MB\x0aDISK\x20:\x20'+(_0x2f1b35[_0x378cb0(0x160)][_0x378cb0(0x133)]===0x0?_0x378cb0(0x14b):_0x2f1b35['limits'][_0x378cb0(0x133)])+_0x378cb0(0x121)+_0x2f1b35[_0x378cb0(0x160)][_0x378cb0(0x128)]+_0x378cb0(0x154)+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+_0x378cb0(0x14d));}break;case _0x378cb0(0x15e):{let _0x1014f8=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0x1014f8['length']<0x2)return _0xedaabe['reply'](_0xe1bc01['chat'],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+_0x378cb0(0x143));let _0x5d6bc9=_0x1014f8[0x0],_0xd73660=_0xe1bc01[_0x378cb0(0x176)]?_0xe1bc01[_0x378cb0(0x176)][_0x378cb0(0x16f)]:_0x1014f8[0x1]?_0x1014f8[0x1]['replace'](/[^0-9]/g,'')+_0x378cb0(0x125):_0xe1bc01['mentionedJid'][0x0],_0x341d4b=_0x5d6bc9,_0x274830='15',_0x551807='1',_0x54034d=_0x378cb0(0x15a),_0x36ddef='50',_0x5a28b0=_0x378cb0(0x15a),_0x227a70=_0x5d6bc9+_0x378cb0(0x161);if(!_0xd73660)return;let _0x128918=(await _0xedaabe[_0x378cb0(0x178)](_0xd73660[_0x378cb0(0x15d)]`@`[0x0]))[0x0]||{},_0x336f6c=_0x128918[_0x378cb0(0x150)]?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)](_0x378cb0(0x162)):_0x1014f8[0x3],_0xbf2910=await fetch(domain+_0x378cb0(0x12b),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x227a70,'username':_0x5d6bc9,'first_name':_0x5d6bc9,'last_name':_0x5d6bc9,'language':'en','password':_0x336f6c[_0x378cb0(0x147)]()})}),_0x531d0b=await _0xbf2910[_0x378cb0(0x120)]();if(_0x531d0b['errors'])return _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x531d0b[_0x378cb0(0x168)][0x0],null,0x2));let _0x242179=_0x531d0b[_0x378cb0(0x172)],_0x15ee15=await fetch(domain+_0x378cb0(0x149)+_0x274830,{'method':_0x378cb0(0x17a),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':'application/json','Authorization':'Bearer\x20'+apikey}});_0xedaabe['reply'](_0xe1bc01['chat'],_0x378cb0(0x14e)+_0x242179['id']),ctf='Hai\x20@'+_0xd73660[_0x378cb0(0x15d)]`@`[0x0]+_0x378cb0(0x130)+_0x242179['id']+_0x378cb0(0x16a)+_0x242179[_0x378cb0(0x124)]+_0x378cb0(0x14a)+_0x242179[_0x378cb0(0x123)]+_0x378cb0(0x13d)+_0x336f6c[_0x378cb0(0x147)]()+'\x0aTANGGAL\x20:\x20'+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+'\x20WIB\x0a️LOGIN\x20:\x20'+domain+'\x0aTUTORIAL\x20:\x20https://youtu.be/2PuFtZkL5Us\x0a\x0a*NOTE*\x0aOWNER\x20HANYA\x20MENGIRIM\x201X\x20DATA\x20\x0aAKUN\x20ANDA\x20MOHON\x20DI\x20SIMPAN\x20BAIK\x20BAIK\x0aKALAU\x20DATA\x20AKUN\x20ANDA\x20HILANG\x20OWNER\x0aTIDAK\x20DAPAT\x20MENGIRIM\x20AKUN\x20ANDA\x20LAGI\x0a-----------------------------------\x0a\x0a*JOIN\x20GROUP\x20PANEL*\x0a'+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0xd73660,{'text':ctf,'mentions':[_0xe1bc01[_0x378cb0(0x16f)][_0x378cb0(0x15d)]('@')[0x0]+'@s.whatsapp.net']},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x2e7e63=await _0x15ee15['json'](),_0x49f801=_0x2e7e63['attributes'][_0x378cb0(0x11f)],_0x2ea26f=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x341d4b,'description':'\x20','user':_0x242179['id'],'egg':parseInt(_0x274830),'docker_image':_0x378cb0(0x16c),'startup':_0x49f801,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0x54034d,'swap':0x0,'disk':_0x5a28b0,'io':0x1f4,'cpu':_0x36ddef},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x551807)],'dedicated_ip':![],'port_range':[]}})}),_0x36df36=await _0x2ea26f[_0x378cb0(0x120)]();if(_0x36df36[_0x378cb0(0x168)])return _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x36df36[_0x378cb0(0x168)][0x0],null,0x2));let _0x5aab62=_0x36df36[_0x378cb0(0x172)],_0x38d739=await _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x144)+_0x242179['id']+_0x378cb0(0x14a)+_0x242179[_0x378cb0(0x123)]+_0x378cb0(0x16a)+_0x242179[_0x378cb0(0x124)]+_0x378cb0(0x12a)+_0x242179[_0x378cb0(0x122)]+'\x20'+_0x242179[_0x378cb0(0x136)]+'\x0aMEMORY\x20:\x20'+(_0x5aab62[_0x378cb0(0x160)][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x5aab62[_0x378cb0(0x160)]['memory'])+_0x378cb0(0x139)+(_0x5aab62[_0x378cb0(0x160)]['disk']===0x0?_0x378cb0(0x14b):_0x5aab62[_0x378cb0(0x160)][_0x378cb0(0x133)])+'\x20MB\x0aCPU\x20:\x20'+_0x5aab62[_0x378cb0(0x160)][_0x378cb0(0x128)]+_0x378cb0(0x154)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x14d));}break;case _0x378cb0(0x153):{let _0xc654b0=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0xc654b0[_0x378cb0(0x15b)]<0x2)return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+'\x20user,nomer');let _0x22e0a6=_0xc654b0[0x0],_0x35f7d9=_0xe1bc01['quoted']?_0xe1bc01[_0x378cb0(0x176)][_0x378cb0(0x16f)]:_0xc654b0[0x1]?_0xc654b0[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+'@s.whatsapp.net':_0xe1bc01[_0x378cb0(0x169)][0x0],_0x289e27=_0x22e0a6,_0x5b6268='15',_0xb5443f='1',_0x5ec9df=_0x378cb0(0x157),_0x59756a='75',_0x57acc7=_0x378cb0(0x157),_0x28cf7a=_0x22e0a6+_0x378cb0(0x161);if(!_0x35f7d9)return;let _0x2b3e12=(await _0xedaabe[_0x378cb0(0x178)](_0x35f7d9['split']`@`[0x0]))[0x0]||{},_0x15e031=_0x2b3e12[_0x378cb0(0x150)]?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)]('hex'):_0xc654b0[0x3],_0x46dd90=await fetch(domain+_0x378cb0(0x12b),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':'application/json','Authorization':'Bearer\x20'+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x28cf7a,'username':_0x22e0a6,'first_name':_0x22e0a6,'last_name':_0x22e0a6,'language':'en','password':_0x15e031[_0x378cb0(0x147)]()})}),_0x34f505=await _0x46dd90['json']();if(_0x34f505[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x34f505[_0x378cb0(0x168)][0x0],null,0x2));let _0x2dc809=_0x34f505[_0x378cb0(0x172)],_0x530bfb=await fetch(domain+_0x378cb0(0x149)+_0x5b6268,{'method':_0x378cb0(0x17a),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':'Bearer\x20'+apikey}});_0xedaabe[_0x378cb0(0x179)](_0xe1bc01['chat'],_0x378cb0(0x14e)+_0x2dc809['id']),ctf='Hai\x20@'+_0x35f7d9['split']`@`[0x0]+_0x378cb0(0x130)+_0x2dc809['id']+_0x378cb0(0x16a)+_0x2dc809[_0x378cb0(0x124)]+_0x378cb0(0x14a)+_0x2dc809[_0x378cb0(0x123)]+_0x378cb0(0x13d)+_0x15e031[_0x378cb0(0x147)]()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x126)+domain+_0x378cb0(0x152)+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0x35f7d9,{'text':ctf,'mentions':[_0xe1bc01[_0x378cb0(0x16f)][_0x378cb0(0x15d)]('@')[0x0]+_0x378cb0(0x125)]},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0xbfad72=await _0x530bfb[_0x378cb0(0x120)](),_0x3b486d=_0xbfad72['attributes']['startup'],_0x109bd7=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x289e27,'description':'\x20','user':_0x2dc809['id'],'egg':parseInt(_0x5b6268),'docker_image':_0x378cb0(0x16c),'startup':_0x3b486d,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0x5ec9df,'swap':0x0,'disk':_0x57acc7,'io':0x1f4,'cpu':_0x59756a},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0xb5443f)],'dedicated_ip':![],'port_range':[]}})}),_0x25b6c7=await _0x109bd7[_0x378cb0(0x120)]();if(_0x25b6c7[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x25b6c7[_0x378cb0(0x168)][0x0],null,0x2));let _0x5d4285=_0x25b6c7['attributes'],_0x5b3a31=await _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x144)+_0x2dc809['id']+'\x0aUSERNAME\x20:\x20'+_0x2dc809['username']+'\x0aEMAIL\x20:\x20'+_0x2dc809[_0x378cb0(0x124)]+_0x378cb0(0x12a)+_0x2dc809[_0x378cb0(0x122)]+'\x20'+_0x2dc809[_0x378cb0(0x136)]+_0x378cb0(0x135)+(_0x5d4285[_0x378cb0(0x160)][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x5d4285[_0x378cb0(0x160)][_0x378cb0(0x134)])+_0x378cb0(0x139)+(_0x5d4285[_0x378cb0(0x160)]['disk']===0x0?_0x378cb0(0x14b):_0x5d4285[_0x378cb0(0x160)][_0x378cb0(0x133)])+_0x378cb0(0x121)+_0x5d4285['limits']['cpu']+_0x378cb0(0x154)+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+'\x20WIB\x0a');}break;case _0x378cb0(0x11e):{let _0x4adc85=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0x4adc85[_0x378cb0(0x15b)]<0x2)return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+_0x378cb0(0x143));let _0x2e29e1=_0x4adc85[0x0],_0x5dcfc4=_0xe1bc01[_0x378cb0(0x176)]?_0xe1bc01[_0x378cb0(0x176)][_0x378cb0(0x16f)]:_0x4adc85[0x1]?_0x4adc85[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+'@s.whatsapp.net':_0xe1bc01[_0x378cb0(0x169)][0x0],_0x3c840a=_0x2e29e1,_0x2326dc='15',_0x72f3e0='1',_0x8b74d3=_0x378cb0(0x14c),_0x2bf02f=_0x378cb0(0x141),_0x4934dd='4000',_0x56117c=_0x2e29e1+_0x378cb0(0x161);if(!_0x5dcfc4)return;let _0x4a21e4=(await _0xedaabe['onWhatsApp'](_0x5dcfc4[_0x378cb0(0x15d)]`@`[0x0]))[0x0]||{},_0x5d1fbf=_0x4a21e4['exists']?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)]('hex'):_0x4adc85[0x3],_0xda6190=await fetch(domain+_0x378cb0(0x12b),{'method':'POST','headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':'Bearer\x20'+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x56117c,'username':_0x2e29e1,'first_name':_0x2e29e1,'last_name':_0x2e29e1,'language':'en','password':_0x5d1fbf[_0x378cb0(0x147)]()})}),_0x2174e0=await _0xda6190[_0x378cb0(0x120)]();if(_0x2174e0[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x2174e0[_0x378cb0(0x168)][0x0],null,0x2));let _0x23ba09=_0x2174e0['attributes'],_0x2def87=await fetch(domain+_0x378cb0(0x149)+_0x2326dc,{'method':_0x378cb0(0x17a),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':'Bearer\x20'+apikey}});_0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x14e)+_0x23ba09['id']),ctf=_0x378cb0(0x15f)+_0x5dcfc4[_0x378cb0(0x15d)]`@`[0x0]+'\x0a\x0a\x0aID\x20:\x20'+_0x23ba09['id']+_0x378cb0(0x16a)+_0x23ba09[_0x378cb0(0x124)]+_0x378cb0(0x14a)+_0x23ba09[_0x378cb0(0x123)]+_0x378cb0(0x13d)+_0x5d1fbf[_0x378cb0(0x147)]()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+_0x378cb0(0x126)+domain+_0x378cb0(0x152)+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0x5dcfc4,{'text':ctf,'mentions':[_0xe1bc01[_0x378cb0(0x16f)]['split']('@')[0x0]+_0x378cb0(0x125)]},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x584fee=await _0x2def87[_0x378cb0(0x120)](),_0x431a16=_0x584fee[_0x378cb0(0x172)][_0x378cb0(0x11f)],_0x39856c=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x3c840a,'description':'\x20','user':_0x23ba09['id'],'egg':parseInt(_0x2326dc),'docker_image':'ghcr.io/parkervcp/yolks:nodejs_18','startup':_0x431a16,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0x8b74d3,'swap':0x0,'disk':_0x4934dd,'io':0x1f4,'cpu':_0x2bf02f},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x72f3e0)],'dedicated_ip':![],'port_range':[]}})}),_0x312d0d=await _0x39856c[_0x378cb0(0x120)]();if(_0x312d0d['errors'])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x312d0d[_0x378cb0(0x168)][0x0],null,0x2));let _0x59278e=_0x312d0d[_0x378cb0(0x172)],_0x3b479c=await _0xedaabe['reply'](_0xe1bc01['chat'],_0x378cb0(0x144)+_0x23ba09['id']+_0x378cb0(0x14a)+_0x23ba09[_0x378cb0(0x123)]+'\x0aEMAIL\x20:\x20'+_0x23ba09[_0x378cb0(0x124)]+_0x378cb0(0x12a)+_0x23ba09['first_name']+'\x20'+_0x23ba09[_0x378cb0(0x136)]+'\x0aMEMORY\x20:\x20'+(_0x59278e[_0x378cb0(0x160)]['memory']===0x0?_0x378cb0(0x14b):_0x59278e[_0x378cb0(0x160)][_0x378cb0(0x134)])+_0x378cb0(0x139)+(_0x59278e[_0x378cb0(0x160)][_0x378cb0(0x133)]===0x0?_0x378cb0(0x14b):_0x59278e[_0x378cb0(0x160)][_0x378cb0(0x133)])+_0x378cb0(0x121)+_0x59278e[_0x378cb0(0x160)][_0x378cb0(0x128)]+'%\x0aTANGGAL\x20:\x20'+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+'\x20WIB\x0a');}break;case'5gb':{let _0x19cc10=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0x19cc10[_0x378cb0(0x15b)]<0x2)return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+'\x20user,nomer');let _0x35affb=_0x19cc10[0x0],_0x15e726=_0xe1bc01[_0x378cb0(0x176)]?_0xe1bc01[_0x378cb0(0x176)][_0x378cb0(0x16f)]:_0x19cc10[0x1]?_0x19cc10[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+_0x378cb0(0x125):_0xe1bc01['mentionedJid'][0x0],_0x170c6d=_0x35affb,_0x4a2996='15',_0x1a2b8f='1',_0x306c1d=_0x378cb0(0x138),_0x1bc72b='130',_0x2638e4=_0x378cb0(0x138),_0x30c7d7=_0x35affb+_0x378cb0(0x161);if(!_0x15e726)return;let _0x2ec874=(await _0xedaabe[_0x378cb0(0x178)](_0x15e726[_0x378cb0(0x15d)]`@`[0x0]))[0x0]||{},_0x5b965f=_0x2ec874[_0x378cb0(0x150)]?crypto['randomBytes'](0x5)[_0x378cb0(0x147)](_0x378cb0(0x162)):_0x19cc10[0x3],_0x1e834d=await fetch(domain+_0x378cb0(0x12b),{'method':_0x378cb0(0x131),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':'Bearer\x20'+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x30c7d7,'username':_0x35affb,'first_name':_0x35affb,'last_name':_0x35affb,'language':'en','password':_0x5b965f[_0x378cb0(0x147)]()})}),_0x44024e=await _0x1e834d['json']();if(_0x44024e['errors'])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x44024e[_0x378cb0(0x168)][0x0],null,0x2));let _0x3493d6=_0x44024e[_0x378cb0(0x172)],_0x1d047b=await fetch(domain+_0x378cb0(0x149)+_0x4a2996,{'method':'GET','headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey}});_0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x14e)+_0x3493d6['id']),ctf=_0x378cb0(0x15f)+_0x15e726[_0x378cb0(0x15d)]`@`[0x0]+'\x0a\x0a\x0aID\x20:\x20'+_0x3493d6['id']+_0x378cb0(0x16a)+_0x3493d6[_0x378cb0(0x124)]+_0x378cb0(0x14a)+_0x3493d6[_0x378cb0(0x123)]+_0x378cb0(0x13d)+_0x5b965f[_0x378cb0(0x147)]()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x126)+domain+'\x0aTUTORIAL\x20:\x20https://youtu.be/2PuFtZkL5Us\x0a\x0a*NOTE*\x0aOWNER\x20HANYA\x20MENGIRIM\x201X\x20DATA\x20\x0aAKUN\x20ANDA\x20MOHON\x20DI\x20SIMPAN\x20BAIK\x20BAIK\x0aKALAU\x20DATA\x20AKUN\x20ANDA\x20HILANG\x20OWNER\x0aTIDAK\x20DAPAT\x20MENGIRIM\x20AKUN\x20ANDA\x20LAGI\x0a-----------------------------------\x0a\x0a*JOIN\x20GROUP\x20PANEL*\x0a'+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0x15e726,{'text':ctf,'mentions':[_0xe1bc01['sender']['split']('@')[0x0]+_0x378cb0(0x125)]},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x5d8df9=await _0x1d047b[_0x378cb0(0x120)](),_0x24914d=_0x5d8df9[_0x378cb0(0x172)]['startup'],_0xa6ed8a=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x170c6d,'description':'\x20','user':_0x3493d6['id'],'egg':parseInt(_0x4a2996),'docker_image':_0x378cb0(0x16c),'startup':_0x24914d,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0x306c1d,'swap':0x0,'disk':_0x2638e4,'io':0x1f4,'cpu':_0x1bc72b},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x1a2b8f)],'dedicated_ip':![],'port_range':[]}})}),_0x49aa18=await _0xa6ed8a[_0x378cb0(0x120)]();if(_0x49aa18['errors'])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x49aa18[_0x378cb0(0x168)][0x0],null,0x2));let _0x3cfe6c=_0x49aa18[_0x378cb0(0x172)],_0x1684aa=await _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],'\x0a\x0a*SUCCESSFULLY\x20ADD\x20USER\x20+\x20SERVER*\x0a\x0aTYPE:\x20user\x0a\x0aID\x20:\x20'+_0x3493d6['id']+_0x378cb0(0x14a)+_0x3493d6[_0x378cb0(0x123)]+_0x378cb0(0x16a)+_0x3493d6['email']+'\x0aNAME\x20:\x20'+_0x3493d6[_0x378cb0(0x122)]+'\x20'+_0x3493d6[_0x378cb0(0x136)]+_0x378cb0(0x135)+(_0x3cfe6c['limits'][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x3cfe6c[_0x378cb0(0x160)][_0x378cb0(0x134)])+_0x378cb0(0x139)+(_0x3cfe6c['limits']['disk']===0x0?_0x378cb0(0x14b):_0x3cfe6c[_0x378cb0(0x160)][_0x378cb0(0x133)])+'\x20MB\x0aCPU\x20:\x20'+_0x3cfe6c[_0x378cb0(0x160)][_0x378cb0(0x128)]+'%\x0aTANGGAL\x20:\x20'+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x14d));}break;case _0x378cb0(0x158):{let _0x3b043a=_0x3b2c2c['split'](',');if(_0x3b043a[_0x378cb0(0x15b)]<0x2)return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01['chat'],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+_0x378cb0(0x143));let _0x3abb72=_0x3b043a[0x0],_0x29f657=_0xe1bc01['quoted']?_0xe1bc01['quoted']['sender']:_0x3b043a[0x1]?_0x3b043a[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+_0x378cb0(0x125):_0xe1bc01[_0x378cb0(0x169)][0x0],_0x2eb88a=_0x3abb72,_0xb8c337='15',_0x4a569a='1',_0xbcdb07=_0x378cb0(0x12e),_0x3792bd='150',_0x2c8bd1=_0x378cb0(0x12e),_0x18436d=_0x3abb72+_0x378cb0(0x161);if(!_0x29f657)return;let _0x2cad35=(await _0xedaabe[_0x378cb0(0x178)](_0x29f657[_0x378cb0(0x15d)]`@`[0x0]))[0x0]||{},_0x203c95=_0x2cad35[_0x378cb0(0x150)]?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)](_0x378cb0(0x162)):_0x3b043a[0x3],_0x3b2d10=await fetch(domain+_0x378cb0(0x12b),{'method':_0x378cb0(0x131),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':'application/json','Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x18436d,'username':_0x3abb72,'first_name':_0x3abb72,'last_name':_0x3abb72,'language':'en','password':_0x203c95[_0x378cb0(0x147)]()})}),_0x4616be=await _0x3b2d10[_0x378cb0(0x120)]();if(_0x4616be['errors'])return _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],JSON['stringify'](_0x4616be[_0x378cb0(0x168)][0x0],null,0x2));let _0xcb1ad=_0x4616be[_0x378cb0(0x172)],_0x56408c=await fetch(domain+_0x378cb0(0x149)+_0xb8c337,{'method':_0x378cb0(0x17a),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey}});_0xedaabe[_0x378cb0(0x179)](_0xe1bc01['chat'],_0x378cb0(0x14e)+_0xcb1ad['id']),ctf='Hai\x20@'+_0x29f657[_0x378cb0(0x15d)]`@`[0x0]+_0x378cb0(0x130)+_0xcb1ad['id']+_0x378cb0(0x16a)+_0xcb1ad['email']+'\x0aUSERNAME\x20:\x20'+_0xcb1ad[_0x378cb0(0x123)]+'\x0aPASSWORD\x20:\x20'+_0x203c95['toString']()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+_0x378cb0(0x126)+domain+'\x0aTUTORIAL\x20:\x20https://youtu.be/2PuFtZkL5Us\x0a\x0a*NOTE*\x0aOWNER\x20HANYA\x20MENGIRIM\x201X\x20DATA\x20\x0aAKUN\x20ANDA\x20MOHON\x20DI\x20SIMPAN\x20BAIK\x20BAIK\x0aKALAU\x20DATA\x20AKUN\x20ANDA\x20HILANG\x20OWNER\x0aTIDAK\x20DAPAT\x20MENGIRIM\x20AKUN\x20ANDA\x20LAGI\x0a-----------------------------------\x0a\x0a*JOIN\x20GROUP\x20PANEL*\x0a'+sgc+'\x0a',_0xedaabe['sendMessage'](_0x29f657,{'text':ctf,'mentions':[_0xe1bc01['sender'][_0x378cb0(0x15d)]('@')[0x0]+_0x378cb0(0x125)]},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x244ec7=await _0x56408c[_0x378cb0(0x120)](),_0x128cf4=_0x244ec7[_0x378cb0(0x172)][_0x378cb0(0x11f)],_0x139a87=await fetch(domain+_0x378cb0(0x159),{'method':'POST','headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON['stringify']({'name':_0x2eb88a,'description':'\x20','user':_0xcb1ad['id'],'egg':parseInt(_0xb8c337),'docker_image':'ghcr.io/parkervcp/yolks:nodejs_18','startup':_0x128cf4,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':_0x378cb0(0x17e)},'limits':{'memory':_0xbcdb07,'swap':0x0,'disk':_0x2c8bd1,'io':0x1f4,'cpu':_0x3792bd},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x4a569a)],'dedicated_ip':![],'port_range':[]}})}),_0x10a4df=await _0x139a87[_0x378cb0(0x120)]();if(_0x10a4df[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON[_0x378cb0(0x13b)](_0x10a4df[_0x378cb0(0x168)][0x0],null,0x2));let _0x1c041e=_0x10a4df['attributes'],_0x10759c=await _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],'\x0a\x0a*SUCCESSFULLY\x20ADD\x20USER\x20+\x20SERVER*\x0a\x0aTYPE:\x20user\x0a\x0aID\x20:\x20'+_0xcb1ad['id']+'\x0aUSERNAME\x20:\x20'+_0xcb1ad['username']+_0x378cb0(0x16a)+_0xcb1ad[_0x378cb0(0x124)]+_0x378cb0(0x12a)+_0xcb1ad[_0x378cb0(0x122)]+'\x20'+_0xcb1ad[_0x378cb0(0x136)]+_0x378cb0(0x135)+(_0x1c041e['limits'][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x1c041e[_0x378cb0(0x160)][_0x378cb0(0x134)])+'\x20MB\x0aDISK\x20:\x20'+(_0x1c041e['limits']['disk']===0x0?_0x378cb0(0x14b):_0x1c041e[_0x378cb0(0x160)][_0x378cb0(0x133)])+'\x20MB\x0aCPU\x20:\x20'+_0x1c041e[_0x378cb0(0x160)][_0x378cb0(0x128)]+_0x378cb0(0x154)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+_0x378cb0(0x14d));}break;case _0x378cb0(0x148):{let _0x3bc71e=_0x3b2c2c[_0x378cb0(0x15d)](',');if(_0x3bc71e['length']<0x2)return _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x145)+(_0x5873d1+_0x507734)+'\x20user,nomer');let _0x2fc635=_0x3bc71e[0x0],_0x191b63=_0xe1bc01['quoted']?_0xe1bc01[_0x378cb0(0x176)]['sender']:_0x3bc71e[0x1]?_0x3bc71e[0x1][_0x378cb0(0x142)](/[^0-9]/g,'')+_0x378cb0(0x125):_0xe1bc01[_0x378cb0(0x169)][0x0],_0x294286=_0x2fc635,_0x58d49a='15',_0x33b98a='1',_0x3a69a5='0',_0x4d482c='0',_0x5b4d20='0',_0x2b766d=_0x2fc635+_0x378cb0(0x161);if(!_0x191b63)return;let _0x2b6550=(await _0xedaabe[_0x378cb0(0x178)](_0x191b63[_0x378cb0(0x15d)]`@`[0x0]))[0x0]||{},_0x4d686f=_0x2b6550['exists']?crypto[_0x378cb0(0x14f)](0x5)[_0x378cb0(0x147)]('hex'):_0x3bc71e[0x3],_0x293ccc=await fetch(domain+'/api/application/users',{'method':_0x378cb0(0x131),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey},'body':JSON[_0x378cb0(0x13b)]({'email':_0x2b766d,'username':_0x2fc635,'first_name':_0x2fc635,'last_name':_0x2fc635,'language':'en','password':_0x4d686f[_0x378cb0(0x147)]()})}),_0xe00c80=await _0x293ccc[_0x378cb0(0x120)]();if(_0xe00c80[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON['stringify'](_0xe00c80[_0x378cb0(0x168)][0x0],null,0x2));let _0x469eb3=_0xe00c80[_0x378cb0(0x172)],_0x3c57ef=await fetch(domain+_0x378cb0(0x149)+_0x58d49a,{'method':_0x378cb0(0x17a),'headers':{'Accept':_0x378cb0(0x12f),'Content-Type':_0x378cb0(0x12f),'Authorization':_0x378cb0(0x13f)+apikey}});_0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x14e)+_0x469eb3['id']),ctf=_0x378cb0(0x15f)+_0x191b63[_0x378cb0(0x15d)]`@`[0x0]+_0x378cb0(0x130)+_0x469eb3['id']+_0x378cb0(0x16a)+_0x469eb3[_0x378cb0(0x124)]+_0x378cb0(0x14a)+_0x469eb3['username']+_0x378cb0(0x13d)+_0x4d686f[_0x378cb0(0x147)]()+_0x378cb0(0x15c)+_0x3854d7+'\x20'+_0x41f139+_0x378cb0(0x16d)+_0x14f1e1+'\x20WIB\x0a️LOGIN\x20:\x20'+domain+_0x378cb0(0x152)+sgc+'\x0a',_0xedaabe[_0x378cb0(0x163)](_0x191b63,{'text':ctf,'mentions':[_0xe1bc01[_0x378cb0(0x16f)][_0x378cb0(0x15d)]('@')[0x0]+_0x378cb0(0x125)]},{'quoted':_0xedaabe[_0x378cb0(0x13c)]});let _0x1517da=await _0x3c57ef[_0x378cb0(0x120)](),_0x2983fa=_0x1517da[_0x378cb0(0x172)][_0x378cb0(0x11f)],_0x5bfb88=await fetch(domain+_0x378cb0(0x159),{'method':_0x378cb0(0x131),'headers':{'Accept':'application/json','Content-Type':_0x378cb0(0x12f),'Authorization':'Bearer\x20'+apikey},'body':JSON[_0x378cb0(0x13b)]({'name':_0x294286,'description':'\x20','user':_0x469eb3['id'],'egg':parseInt(_0x58d49a),'docker_image':_0x378cb0(0x16c),'startup':_0x2983fa,'environment':{'INST':_0x378cb0(0x167),'USER_UPLOAD':'0','AUTO_UPDATE':'0','CMD_RUN':'npm\x20start'},'limits':{'memory':_0x3a69a5,'swap':0x0,'disk':_0x5b4d20,'io':0x1f4,'cpu':_0x4d482c},'feature_limits':{'databases':0x5,'backups':0x5,'allocations':0x5},'deploy':{'locations':[parseInt(_0x33b98a)],'dedicated_ip':![],'port_range':[]}})}),_0x15e6f9=await _0x5bfb88[_0x378cb0(0x120)]();if(_0x15e6f9[_0x378cb0(0x168)])return _0xedaabe[_0x378cb0(0x179)](_0xe1bc01[_0x378cb0(0x13c)],JSON['stringify'](_0x15e6f9[_0x378cb0(0x168)][0x0],null,0x2));let _0x12a461=_0x15e6f9['attributes'],_0x39d331=await _0xedaabe['reply'](_0xe1bc01[_0x378cb0(0x13c)],_0x378cb0(0x144)+_0x469eb3['id']+'\x0aUSERNAME\x20:\x20'+_0x469eb3['username']+'\x0aEMAIL\x20:\x20'+_0x469eb3[_0x378cb0(0x124)]+_0x378cb0(0x12a)+_0x469eb3['first_name']+'\x20'+_0x469eb3[_0x378cb0(0x136)]+_0x378cb0(0x135)+(_0x12a461[_0x378cb0(0x160)][_0x378cb0(0x134)]===0x0?_0x378cb0(0x14b):_0x12a461[_0x378cb0(0x160)][_0x378cb0(0x134)])+_0x378cb0(0x139)+(_0x12a461[_0x378cb0(0x160)][_0x378cb0(0x133)]===0x0?_0x378cb0(0x14b):_0x12a461[_0x378cb0(0x160)]['disk'])+_0x378cb0(0x121)+_0x12a461['limits'][_0x378cb0(0x128)]+_0x378cb0(0x154)+_0x3854d7+'\x20'+_0x41f139+'\x0aJAM\x20:\x20'+_0x14f1e1+'\x20WIB\x0a\x0a');break;}}};function _0x40a2(_0x4119bd,_0x5a002d){const _0x2b374c=_0x2b37();return _0x40a2=function(_0x40a281,_0x51c1f4){_0x40a281=_0x40a281-0x11e;let _0x47e45e=_0x2b374c[_0x40a281];return _0x47e45e;},_0x40a2(_0x4119bd,_0x5a002d);}handler['help']=['1gb',_0xf007be(0x15e),'3gb',_0xf007be(0x11e),'5gb',_0xf007be(0x158),_0xf007be(0x148)],handler[_0xf007be(0x180)]=['seller'],handler[_0xf007be(0x170)]=[_0xf007be(0x137),_0xf007be(0x15e),_0xf007be(0x153),_0xf007be(0x11e),_0xf007be(0x146),'6gb',_0xf007be(0x148)],handler[_0xf007be(0x13a)]=!![],handler[_0xf007be(0x171)]=!![],module['exports']=handler;function _0x2b37(){const _0x3454af=['\x20MB\x0aCPU\x20:\x20','first_name','username','email','@s.whatsapp.net','\x20WIB\x0a️LOGIN\x20:\x20','4448028HDqwUU','cpu','14067WHeIYC','\x0aNAME\x20:\x20','/api/application/users','moment-timezone','3540760VdDdbA','6000','application/json','\x0a\x0a\x0aID\x20:\x20','POST','5GRoMYC','disk','memory','\x0aMEMORY\x20:\x20','last_name','1gb','5000','\x20MB\x0aDISK\x20:\x20','premium','stringify','chat','\x0aPASSWORD\x20:\x20','Legi','Bearer\x20','format','100','replace','\x20user,nomer','\x0a\x0a*SUCCESSFULLY\x20ADD\x20USER\x20+\x20SERVER*\x0a\x0aTYPE:\x20user\x0a\x0aID\x20:\x20','*Format\x20salah!*\x0a\x0aPenggunaan:\x0a','5gb','toString','unli','/api/application/nests/5/eggs/','\x0aUSERNAME\x20:\x20','Unlimited','4000','\x20WIB\x0a','SUCCES\x20CREATE\x20USER\x20ID:\x20','randomBytes','exists','cheerio','\x0aTUTORIAL\x20:\x20https://youtu.be/2PuFtZkL5Us\x0a\x0a*NOTE*\x0aOWNER\x20HANYA\x20MENGIRIM\x201X\x20DATA\x20\x0aAKUN\x20ANDA\x20MOHON\x20DI\x20SIMPAN\x20BAIK\x20BAIK\x0aKALAU\x20DATA\x20AKUN\x20ANDA\x20HILANG\x20OWNER\x0aTIDAK\x20DAPAT\x20MENGIRIM\x20AKUN\x20ANDA\x20LAGI\x0a-----------------------------------\x0a\x0a*JOIN\x20GROUP\x20PANEL*\x0a','3gb','%\x0aTANGGAL\x20:\x20','\x20:\x20','Wage','3000','6gb','/api/application/servers','2000','length','\x0aTANGGAL\x20:\x20','split','2gb','Hai\x20@','limits','@gmail.com','hex','sendMessage','2232tIfqXb','10JHJvcQ','long','npm','errors','mentionedJid','\x0aEMAIL\x20:\x20','node-fetch','ghcr.io/parkervcp/yolks:nodejs_18','\x0aJAM\x20:\x20','3608SCaYCk','sender','command','owner','attributes','floor','toLocaleDateString','3129455NAdgyW','quoted','Asia/Jakarta','onWhatsApp','reply','GET','346grcLvA','Kliwon','768150GGlUlj','npm\x20start','3238334FMwptV','tags','4gb','startup','json'];_0x2b37=function(){return _0x3454af;};return _0x2b37();}