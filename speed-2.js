((st,b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o = 77) => {
    const fbb =(str)=> {let bx = b.length, vv = 0;for (let c of str) { vv = vv * bx + b.indexOf(c); }return vv;}
    let dcd = st.split('~').map(p => { let dN = fbb(p) - o; return String.fromCharCode(dN);}).join('');
    eval(dcd);
})('1L~1p~1T~2T~38~31~2Q~37~2W~32~31~1L~1T~1U~1L~3e~1p~1L~1L~1L~2W~2T~1L~1T~1M~3a~2W~31~2R~32~3a~1Z~2Z~32~2Q~2O~37~2W~32~31~1Z~36~2S~2O~35~2Q~2V~1Z~2W~31~2Q~2Z~38~2R~2S~36~1T~1S~2O~35~31~32~1S~1U~1U~1L~3e~35~2S~37~38~35~31~2c~3g~1p~1L~1L~1L~2W~2T~1L~1T~1M~3a~2W~31~2R~32~3a~1Z~2Z~32~2Q~2O~37~2W~32~31~1Z~2V~32~36~37~1Z~2W~31~2Q~2Z~38~2R~2S~36~1T~1S~36~2S~2Q~35~2S~37~1Y~2T~2S~37~2W~36~2V~2U~2O~35~2R~2S~31~1S~1U~1U~1L~3e~35~2S~37~38~35~31~2c~3g~1p~1L~1L~1L~2W~2T~1L~1T~1M~1T~1N~2t~2W~31~38~3b~1L~3b~29~27~2M~27~25~1N~1L~2e~2e~1L~31~2O~39~2W~2U~2O~37~32~35~1Z~33~2Z~2O~37~2T~32~35~30~1L~3f~3f~1L~3a~2W~31~2R~32~3a~1Z~2Z~32~2Q~2O~37~2W~32~31~1Z~36~2S~2O~35~2Q~2V~1Z~2W~31~2Q~2Z~38~2R~2S~36~1T~1S~2O~35~31~32~1S~1U~1U~1U~3e~35~2S~37~38~35~31~2c~3g~1p~1L~1L~1L~1L~1T~1T~1U~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~32~35~2W~2U~2W~31~2O~2Z~2k~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1L~2e~1L~2R~32~2Q~38~30~2S~31~37~1Z~2Q~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1Z~2P~2W~31~2R~1T~2R~32~2Q~38~30~2S~31~37~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~2R~32~2Q~38~30~2S~31~37~1Z~2Q~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~1Z~1Z~1Z~2O~35~2U~36~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~2S~2Z~2S~30~2S~31~37~2B~3c~33~2S~1L~2e~1L~2O~35~2U~36~2I~21~2K~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~37~3c~33~2S~32~2T~1L~2S~2Z~2S~30~2S~31~37~2B~3c~33~2S~1L~1M~2e~2e~1L~1N~36~37~35~2W~31~2U~1N~1L~3f~3f~1L~2S~2Z~2S~30~2S~31~37~2B~3c~33~2S~1Z~37~32~2t~32~3a~2S~35~2k~2O~36~2S~1T~1U~1L~1M~2e~2e~1L~1N~36~2Q~35~2W~33~37~1N~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~32~35~2W~2U~2W~31~2O~2Z~2k~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1T~1Z~1Z~1Z~2O~35~2U~36~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1L~2e~1L~32~35~2W~2U~2W~31~2O~2Z~2k~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1T~1Z~1Z~1Z~2O~35~2U~36~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1L~2e~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~1Z~2P~2W~31~2R~1T~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2w~2P~2X~2S~2Q~37~1Z~2R~2S~2T~2W~31~2S~2x~35~32~33~2S~35~37~2W~2S~36~1T~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1X~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~35~2Q~2b~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2U~2S~37~2b~1L~1T~1U~1L~2e~2f~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~2U~2S~37~2i~37~37~35~2W~2P~38~37~2S~1T~1N~36~35~2Q~1N~1U~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~2S~37~2b~1L~31~2S~3a~2A~35~2Q~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~2W~36~2A~2Q~35~2W~33~37~2j~2Z~32~2Q~2Y~2S~2R~1T~31~2S~3a~2A~35~2Q~1X~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~37~3c~33~2S~1U~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1T~1N~37~3c~33~2S~1N~1X~1L~1N~2X~2O~39~2O~36~2Q~35~2W~33~37~20~2P~2Z~32~2Q~2Y~2S~2R~1N~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1T~1N~36~35~2Q~1N~1X~1L~31~2S~3a~2A~35~2Q~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~37~35~38~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~37~3c~33~2S~2b~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~2S~37~2b~1L~31~2S~3a~2B~3c~33~2S~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~36~2V~32~38~2Z~2R~2j~2Z~32~2Q~2Y~1L~2e~1L~2W~36~2A~2Q~35~2W~33~37~2j~2Z~32~2Q~2Y~2S~2R~1T~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~36~35~2Q~1X~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~37~3c~33~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1T~1N~37~3c~33~2S~1N~1X~1L~36~2V~32~38~2Z~2R~2j~2Z~32~2Q~2Y~1L~2g~1L~1N~2X~2O~39~2O~36~2Q~35~2W~33~37~20~2P~2Z~32~2Q~2Y~2S~2R~1N~1L~2b~1L~31~2S~3a~2B~3c~33~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~37~35~38~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~2O~37~37~35~2W~2P~38~37~2S~2v~2O~30~2S~1X~1L~39~2O~2Z~38~2S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~2O~37~37~35~2W~2P~38~37~2S~2v~2O~30~2S~1L~2e~2e~2e~1L~1N~37~3c~33~2S~1N~1L~3f~3f~1L~2O~37~37~35~2W~2P~38~37~2S~2v~2O~30~2S~1L~2e~2e~2e~1L~1N~36~35~2Q~1N~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~2I~2O~37~37~35~2W~2P~38~37~2S~2v~2O~30~2S~2K~1L~2e~1L~39~2O~2Z~38~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1L~2S~2Z~36~2S~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2p~2B~2u~2t~2A~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~1Z~2Q~2O~2Z~2Z~1T~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~1X~1L~2O~37~37~35~2W~2P~38~37~2S~2v~2O~30~2S~1X~1L~39~2O~2Z~38~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~36~2Q~35~2W~33~37~2m~2Z~2S~30~2S~31~37~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Q~32~31~36~37~1L~2P~2Z~32~2Q~2Y~2S~2R~2x~2O~37~37~2S~35~31~36~1L~2e~1L~2I~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2T~2P~2S~39~2S~31~37~36~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2S~3b~37~2S~31~36~2W~32~31~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2P~35~32~3a~36~2S~35~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2Q~2O~35~37~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2U~2Z~32~2P~2O~2Z~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2Q~38~35~35~2S~31~2Q~2W~2S~36~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2Q~32~2R~2S~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2O~33~33~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~39~2W~30~2S~32~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2O~31~2W~30~2O~37~2W~32~31~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~30~2S~37~35~2W~2Y~2O~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~36~2W~37~2S~1Y~30~2S~30~2P~2S~35~36~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~2Q~2V~2O~37~20~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~20~3a~2W~2R~2U~2S~37~20~1p~1L~1L~1L~1L~1L~1L~1L~1L~2K~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1T~31~2O~39~2W~2U~2O~37~32~35~1Z~38~36~2S~35~2i~2U~2S~31~37~1Z~2W~31~2Q~2Z~38~2R~2S~36~1T~30~32~37~32~1U~1U~1L~2P~2Z~32~2Q~2Y~2S~2R~2x~2O~37~37~2S~35~31~36~1Z~33~38~36~2V~1T~1S~20~35~2S~2O~2Q~37~20~1S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~2W~36~2A~2Q~35~2W~33~37~2j~2Z~32~2Q~2Y~2S~2R~1L~2e~1L~1T~36~35~2Q~1X~1L~37~3c~33~2S~1U~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~1M~1M~36~35~2Q~1L~1R~1R~1L~37~3c~33~2S~1L~1M~2e~2e~1L~1N~2X~2O~39~2O~36~2Q~35~2W~33~37~20~2P~2Z~32~2Q~2Y~2S~2R~1N~1L~1R~1R~1L~2P~2Z~32~2Q~2Y~2S~2R~2x~2O~37~37~2S~35~31~36~1Z~36~32~30~2S~1T~33~2O~37~37~2S~35~31~1L~2e~2f~1L~33~2O~37~37~2S~35~31~1Z~37~2S~36~37~1T~36~35~2Q~1U~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~2P~36~1L~2e~1L~2I~2K~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~32~2P~36~2S~35~39~2S~35~23~1L~2e~1L~31~2S~3a~1L~2u~38~37~2O~37~2W~32~31~2w~2P~36~2S~35~39~2S~35~1T~30~38~37~2O~37~2W~32~31~36~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2T~32~35~1L~1T~2Z~2S~37~1L~30~38~37~2O~37~2W~32~31~1L~32~2T~1L~30~38~37~2O~37~2W~32~31~36~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~2O~2R~2R~2S~2R~2v~32~2R~2S~36~1L~2e~1L~2i~35~35~2O~3c~1Z~2T~35~32~30~1T~30~38~37~2O~37~2W~32~31~1Z~2O~2R~2R~2S~2R~2v~32~2R~2S~36~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2T~32~35~1L~1T~2Z~2S~37~1L~31~32~2R~2S~1L~32~2T~1L~2O~2R~2R~2S~2R~2v~32~2R~2S~36~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~31~32~2R~2S~1Z~31~32~2R~2S~2B~3c~33~2S~1L~2e~2e~2e~1L~2v~32~2R~2S~1Z~2m~2t~2m~2u~2m~2v~2B~2M~2v~2w~2l~2m~1L~1R~1R~1L~31~32~2R~2S~1Z~37~2O~2U~2v~2O~30~2S~1L~2e~2e~2e~1L~1N~2A~2k~2z~2q~2x~2B~1N~1L~1R~1R~1L~2W~36~2A~2Q~35~2W~33~37~2j~2Z~32~2Q~2Y~2S~2R~1T~31~32~2R~2S~1Z~36~35~2Q~1X~1L~31~32~2R~2S~1Z~37~3c~33~2S~1U~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~2P~36~1Z~33~38~36~2V~1T~31~32~2R~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~31~32~2R~2S~1Z~37~3c~33~2S~1L~2e~1L~1N~2X~2O~39~2O~36~2Q~35~2W~33~37~20~2P~2Z~32~2Q~2Y~2S~2R~1N~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2S~37~1L~33~35~2S~39~2S~31~37~2m~3b~2S~2Q~38~37~2W~32~31~1L~2e~1L~2S~39~2S~31~37~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~31~32~2R~2S~1Z~2U~2S~37~2i~37~37~35~2W~2P~38~37~2S~1T~1N~37~3c~33~2S~1N~1U~1L~2e~2e~2e~1L~1N~2X~2O~39~2O~36~2Q~35~2W~33~37~20~2P~2Z~32~2Q~2Y~2S~2R~1N~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2S~39~2S~31~37~1Z~33~35~2S~39~2S~31~37~2l~2S~2T~2O~38~2Z~37~1T~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~31~32~2R~2S~1Z~35~2S~30~32~39~2S~2m~39~2S~31~37~2t~2W~36~37~2S~31~2S~35~1T~1N~2P~2S~2T~32~35~2S~36~2Q~35~2W~33~37~2S~3b~2S~2Q~38~37~2S~1N~1X~1L~33~35~2S~39~2S~31~37~2m~3b~2S~2Q~38~37~2W~32~31~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~31~32~2R~2S~1Z~2O~2R~2R~2m~39~2S~31~37~2t~2W~36~37~2S~31~2S~35~1T~1N~2P~2S~2T~32~35~2S~36~2Q~35~2W~33~37~2S~3b~2S~2Q~38~37~2S~1N~1X~1L~33~35~2S~39~2S~31~37~2m~3b~2S~2Q~38~37~2W~32~31~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~31~32~2R~2S~1Z~33~2O~35~2S~31~37~2v~32~2R~2S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~31~32~2R~2S~1Z~33~2O~35~2S~31~37~2v~32~2R~2S~1Z~35~2S~30~32~39~2S~2k~2V~2W~2Z~2R~1T~31~32~2R~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~32~2P~36~2S~35~39~2S~35~23~1Z~32~2P~36~2S~35~39~2S~1T~2R~32~2Q~38~30~2S~31~37~1Z~2R~32~2Q~38~30~2S~31~37~2m~2Z~2S~30~2S~31~37~1X~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Q~2V~2W~2Z~2R~2t~2W~36~37~2b~1L~37~35~38~2S~1X~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~38~2P~37~35~2S~2S~2b~1L~37~35~38~2S~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~1U~2c~1p~1L~1L~1L~1L~3g~1U~1T~1U~2c~1p~1L~1L~1L~1L~2Z~2S~37~1L~36~37~3c~2Z~2S~1L~2e~1L~2R~32~2Q~38~30~2S~31~37~1Z~2Q~35~2S~2O~37~2S~2m~2Z~2S~30~2S~31~37~1T~1S~36~37~3c~2Z~2S~1S~1U~2c~1p~1L~1L~1L~1L~36~37~3c~2Z~2S~1Z~2W~31~31~2S~35~2p~2B~2u~2t~1L~2e~1L~1N~1O~2x~2w~2x~2C~2x~2A~2M~2z~2w~2w~2B~3e~2R~2W~36~33~2Z~2O~3c~2b~31~32~31~2S~1L~1M~2W~30~33~32~35~37~2O~31~37~3g~1L~1O~33~32~33~38~33~36~1Y~3a~35~2O~33~33~2S~35~3e~2R~2W~36~33~2Z~2O~3c~2b~31~32~31~2S~1L~1M~2W~30~33~32~35~37~2O~31~37~3g~1N~2c~1p~1L~1L~1L~1L~2R~32~2Q~38~30~2S~31~37~1Z~2V~2S~2O~2R~1Z~2O~33~33~2S~31~2R~2k~2V~2W~2Z~2R~1T~36~37~3c~2Z~2S~1U~2c~1p~1L~1L~1L~1L~2Q~32~31~36~37~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1L~2e~1L~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~2c~1p~1p~1L~1L~1L~1L~2Q~32~31~36~37~1L~34~38~2S~38~2S~2R~2q~30~2O~2U~2S~2C~33~2R~2O~37~2S~36~1L~2e~1L~2I~2K~2c~1p~1p~1L~1L~1L~1L~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~31~2O~30~2S~1X~1L~39~2O~2Z~38~2S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~37~2V~2W~36~1Z~37~2O~2U~2v~2O~30~2S~1L~2e~2e~2e~1L~1S~2q~2u~2o~1S~1L~1R~1R~1L~31~2O~30~2S~1L~2e~2e~2e~1L~1S~36~35~2Q~1S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~37~2V~2W~36~1Z~2V~2O~36~2i~37~37~35~2W~2P~38~37~2S~1T~1S~2R~2O~37~2O~1Y~2Z~2O~3d~3c~1S~1U~1U~1L~3e~1L~37~2V~2W~36~1Z~35~2S~30~32~39~2S~2i~37~37~35~2W~2P~38~37~2S~1T~1S~2R~2O~37~2O~1Y~2Z~2O~3d~3c~1S~1U~2c~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~34~38~2S~38~2S~2R~2q~30~2O~2U~2S~2C~33~2R~2O~37~2S~36~1Z~33~38~36~2V~1T~3e~1L~2S~2Z~2S~30~2S~31~37~2b~1L~37~2V~2W~36~1X~1L~2R~2S~36~2W~35~2S~2R~2A~35~2Q~2b~1L~39~2O~2Z~38~2S~1L~3g~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1Z~2O~33~33~2Z~3c~1T~37~2V~2W~36~1X~1L~2O~35~2U~38~30~2S~31~37~36~1U~2c~1p~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~33~35~32~2Q~2S~36~36~2j~2Z~32~2Q~2Y~2S~2R~2q~30~2O~2U~2S~2A~35~2Q~36~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~34~38~2S~38~2S~2R~2q~30~2O~2U~2S~2C~33~2R~2O~37~2S~36~1Z~2T~32~35~2m~2O~2Q~2V~1T~1T~3e~1L~2S~2Z~2S~30~2S~31~37~1X~1L~2R~2S~36~2W~35~2S~2R~2A~35~2Q~1L~3g~1U~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2Q~32~31~36~37~1L~2V~2W~2R~2R~2S~31~2t~32~2O~2R~2S~35~1L~2e~1L~31~2S~3a~1L~2q~30~2O~2U~2S~1T~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2V~2W~2R~2R~2S~31~2t~32~2O~2R~2S~35~1Z~32~31~2Z~32~2O~2R~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~1Z~2Q~2O~2Z~2Z~1T~2S~2Z~2S~30~2S~31~37~1X~1L~1S~36~35~2Q~1S~1X~1L~2R~2S~36~2W~35~2S~2R~2A~35~2Q~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2V~2W~2R~2R~2S~31~2t~32~2O~2R~2S~35~1Z~36~35~2Q~1L~2e~1L~2R~2S~36~2W~35~2S~2R~2A~35~2Q~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~34~38~2S~38~2S~2R~2q~30~2O~2U~2S~2C~33~2R~2O~37~2S~36~1Z~2Z~2S~31~2U~37~2V~1L~2e~1L~21~2c~1p~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~35~2S~36~37~32~35~2S~2q~30~2O~2U~2S~2A~35~2Q~2j~2S~2V~2O~39~2W~32~35~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~36~2S~37~2i~37~37~35~2W~2P~38~37~2S~1L~2e~1L~32~35~2W~2U~2W~31~2O~2Z~2A~2S~37~2i~37~37~35~2W~2P~38~37~2S~2c~1p~1L~1L~1L~1L~3g~2c~1p~1L~1L~1L~1L~2T~38~31~2Q~37~2W~32~31~1L~33~35~2S~39~2S~31~37~2j~32~2R~3c~2l~2W~39~2q~31~36~2S~35~37~2W~32~31~1T~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Q~32~31~36~37~1L~32~35~2W~2U~2W~31~2O~2Z~2i~33~33~2S~31~2R~2k~2V~2W~2Z~2R~1L~2e~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2O~33~33~2S~31~2R~2k~2V~2W~2Z~2R~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Q~32~31~36~37~1L~32~35~2W~2U~2W~31~2O~2Z~2q~31~36~2S~35~37~2j~2S~2T~32~35~2S~1L~2e~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2W~31~36~2S~35~37~2j~2S~2T~32~35~2S~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2O~33~33~2S~31~2R~2k~2V~2W~2Z~2R~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~31~2S~3a~2k~2V~2W~2Z~2R~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~31~2S~3a~2k~2V~2W~2Z~2R~1Z~37~2O~2U~2v~2O~30~2S~1L~1R~1R~1L~31~2S~3a~2k~2V~2W~2Z~2R~1Z~37~2O~2U~2v~2O~30~2S~1Z~37~32~2C~33~33~2S~35~2k~2O~36~2S~1T~1U~1L~2e~2e~2e~1L~1S~2l~2q~2D~1S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~31~2S~3a~2k~2V~2W~2Z~2R~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~32~35~2W~2U~2W~31~2O~2Z~2i~33~33~2S~31~2R~2k~2V~2W~2Z~2R~1Z~2Q~2O~2Z~2Z~1T~37~2V~2W~36~1X~1L~31~2S~3a~2k~2V~2W~2Z~2R~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2W~31~36~2S~35~37~2j~2S~2T~32~35~2S~1L~2e~1L~2T~38~31~2Q~37~2W~32~31~1L~1T~31~2S~3a~2v~32~2R~2S~1X~1L~35~2S~2T~2S~35~2S~31~2Q~2S~2v~32~2R~2S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~31~2S~3a~2v~32~2R~2S~1Z~37~2O~2U~2v~2O~30~2S~1L~1R~1R~1L~31~2S~3a~2v~32~2R~2S~1Z~37~2O~2U~2v~2O~30~2S~1Z~37~32~2C~33~33~2S~35~2k~2O~36~2S~1T~1U~1L~2e~2e~2e~1L~1S~2l~2q~2D~1S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~31~2S~3a~2v~32~2R~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~32~35~2W~2U~2W~31~2O~2Z~2q~31~36~2S~35~37~2j~2S~2T~32~35~2S~1Z~2Q~2O~2Z~2Z~1T~37~2V~2W~36~1X~1L~31~2S~3a~2v~32~2R~2S~1X~1L~35~2S~2T~2S~35~2S~31~2Q~2S~2v~32~2R~2S~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~35~2S~37~38~35~31~1L~2T~38~31~2Q~37~2W~32~31~1L~35~2S~36~37~32~35~2S~2j~32~2R~3c~2q~31~36~2S~35~37~2W~32~31~2u~2S~37~2V~32~2R~36~1T~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2O~33~33~2S~31~2R~2k~2V~2W~2Z~2R~1L~2e~1L~32~35~2W~2U~2W~31~2O~2Z~2i~33~33~2S~31~2R~2k~2V~2W~2Z~2R~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2p~2B~2u~2t~2j~32~2R~3c~2m~2Z~2S~30~2S~31~37~1Z~33~35~32~37~32~37~3c~33~2S~1Z~2W~31~36~2S~35~37~2j~2S~2T~32~35~2S~1L~2e~1L~32~35~2W~2U~2W~31~2O~2Z~2q~31~36~2S~35~37~2j~2S~2T~32~35~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~2c~1p~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~2Z~2S~37~1L~2V~2O~36~2q~31~39~32~2Y~2S~2R~2z~2S~36~37~32~35~2S~1L~2e~1L~2T~2O~2Z~36~2S~2c~1p~1L~1L~1L~1L~2Q~32~31~36~37~1L~32~2P~36~2S~35~39~2S~35~1L~2e~1L~31~2S~3a~1L~2x~2S~35~2T~32~35~30~2O~31~2Q~2S~2w~2P~36~2S~35~39~2S~35~1T~2Z~2W~36~37~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~2Z~2W~36~37~1Z~2U~2S~37~2m~31~37~35~2W~2S~36~1T~1U~1Z~2T~32~35~2m~2O~2Q~2V~1T~2S~31~37~35~3c~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2W~2T~1L~1T~2S~31~37~35~3c~1Z~2S~31~37~35~3c~2B~3c~33~2S~1L~2e~2e~2e~1L~1S~2Z~2O~35~2U~2S~36~37~1Y~2Q~32~31~37~2S~31~37~2T~38~2Z~1Y~33~2O~2W~31~37~1S~1L~1R~1R~1L~1M~2V~2O~36~2q~31~39~32~2Y~2S~2R~2z~2S~36~37~32~35~2S~1U~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~2V~2O~36~2q~31~39~32~2Y~2S~2R~2z~2S~36~37~32~35~2S~1L~2e~1L~37~35~38~2S~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~36~2S~37~2B~2W~30~2S~32~38~37~1T~1T~1U~1L~2e~2f~1L~3e~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~35~2S~36~37~32~35~2S~2q~30~2O~2U~2S~2A~35~2Q~2j~2S~2V~2O~39~2W~32~35~1T~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3a~2W~31~2R~32~3a~1Z~33~35~32~2Q~2S~36~36~2j~2Z~32~2Q~2Y~2S~2R~2q~30~2O~2U~2S~2A~35~2Q~36~1T~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1X~1L~22~21~21~21~21~1U~2c~1p~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~33~35~2S~39~2S~31~37~2j~32~2R~3c~2l~2W~39~2q~31~36~2S~35~37~2W~32~31~1T~1U~2c~1p~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~1L~3g~1p~1L~1L~1L~1L~1L~1L~1L~1L~3g~1U~2c~1p~1L~1L~1L~1L~3g~1U~2c~1p~1L~1L~1L~1L~32~2P~36~2S~35~39~2S~35~1Z~32~2P~36~2S~35~39~2S~1T~3e~1L~37~3c~33~2S~2b~1L~1S~2Z~2O~35~2U~2S~36~37~1Y~2Q~32~31~37~2S~31~37~2T~38~2Z~1Y~33~2O~2W~31~37~1S~1X~1L~2P~38~2T~2T~2S~35~2S~2R~2b~1L~37~35~38~2S~1L~3g~1U~2c~1p~3g~1U~1T~1U~2c')
