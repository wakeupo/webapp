
export function callDhBridgeHandler(handleName, args, success, fail) {
    //console.log("call handle:" + handleName);
    //log("call handle:" , handleName);
    if (window.DhBridge) {
        window.DhBridge.callHandler(handleName, args, success, fail)
    } else {
        var message = {
            handleName: handleName,
            args: args,
            success: success,
            fail: fail
        };
        if (window.cacheCallQueue) {
            window.cacheCallQueue.push(message);
        } else {
            window.cacheCallQueue = [message];
        }
    }
}
