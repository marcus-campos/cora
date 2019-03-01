import Fingerprint from 'fingerprintjs'
import uuid from 'uuid/v4'
import { getSdkCustomParameters } from 'core/store/sdk-parameters'

let uuidFingerprint;


const getUUIDFingerprint = () => {
  if (!uuidFingerprint) {
    uuidFingerprint = uuid()
  }
  return uuidFingerprint
}

const getFingerprint = (sdkParameters) => {
  return sdkParameters && sdkParameters.options && sdkParameters.options.refreshSession ?
    getUUIDFingerprint() :
    new Fingerprint({ screen_resolution: false }).get()
}

const getCustomFields = (sdkParameters) => {
  return sdkParameters && sdkParameters.options && sdkParameters.options.customFields ?
    sdkParameters.options.customFields :
    undefined
}

const getConfig = () => {
  const sdkParameters = getSdkCustomParameters()
  const fingerprint = getFingerprint(sdkParameters)
  const customFields = getCustomFields(sdkParameters)
  const uuIdentifier = sdkParameters ? sdkParameters.uuIdentifier : undefined
  const parentOrigin = sdkParameters ? sdkParameters.parentOrigin : ''

  return {
    baseURL: 'https://api.corahq.com/webhook',
    headers: {
      'Content-Type': 'application/json',
      'access_token': 'secret',
      'Parent-Origin': parentOrigin || '',
      'Cora-UU-Identifier': uuIdentifier
    },
    data: {
      recipient: { id: parentOrigin || ''},
      sender: { id: fingerprint },
      timestamp: new Date().getTime(),
      customFields: customFields
    }
  }
}

export default getConfig