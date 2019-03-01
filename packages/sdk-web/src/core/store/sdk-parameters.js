import { BehaviorSubject } from 'rxjs';

const $parametersSubject = new BehaviorSubject(undefined)

const getSdkCustomParameters = () => {
    return $parametersSubject.getValue()
}

const setSdkCustomParameters = (parameters) => {
    $parametersSubject.next(parameters)
}

export { getSdkCustomParameters, setSdkCustomParameters };
