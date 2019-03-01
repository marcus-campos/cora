import { setSdkCustomParameters } from 'core/store/sdk-parameters'

export const clearPostMessageEventListener = () => {
	window.removeEventListener('message', postMessageEventHandler)
}

export const setPostMessageEventListener = () => {
	window.addEventListener('message', postMessageEventHandler)
}

export const postMessageEventHandler = (postMessage) => {
	if (postMessage && postMessage.data && postMessage.data.srcApp === 'cora-websdk') {
		setSdkCustomParameters(postMessage.data)
		clearPostMessageEventListener()
	}
}

export const toggleSDK = () => {
	window.parent.postMessage({
		type: 'zupcora.sdk.toggle'
	}, '*')
}

export const increaseResize = () => {
	window.parent.postMessage({
		type: 'zupcora.sdk.increase-resize'
	}, '*')
}

export const decreaseResize = () => {
	window.parent.postMessage({
		type: 'zupcora.sdk.decrease-resize'
	}, '*')
}

export const startChat = () => {
	window.parent.postMessage({
		type: 'zupcora.sdk.start'
	}, '*')
}