if(typeof setImmediate!=='underfined'&&isNative(setImmediate)){
    macroTimerFunc=()=>{
        setImmediate(flushCallbacks)
    }
}else if(
    typeof MessageChannel!=='undefined'&&
    (isNative(MessageChannel)||
    MessageChannel.toString()==='[object MessageChannelConstructor]')
){
        const channel=new MessageChannel()
        const port=channel.port2
        channel.port1.onmessage=flushCallbacks
        macroTimerFunc=()=>{
            port.postMessage(1)
        }
    }else{
        macroTimerFunc=()=>{
            setTimeout(flushCallbacks,0)
        }
    }
