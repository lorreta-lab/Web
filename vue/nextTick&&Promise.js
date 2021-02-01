export function nextTick(cb?:Function,ctx?:Object){
    let _resolve
    //callback into a set
    callbacks.push(()=>{
        if(cb){
            try{
                cb.call(ctx)
            }catch(e){
                handleError(e,ctx,'nextTick')
            }
        }
    })
    if(!pending){
        pending=true
        if(useMacroTask){
            macroTimerFunc()
        }else{
            microTimerFunc()
        }
    }
    //decide whether to use Promise
    //if it's ok,value _resolve
    //By this Callback() can be used by 'Promise'
    if(!cb&&typeof Promise!=='underfind'){
        return new Promise(resolve=>{
            _resolve=resolve
        })
    }
}