import * as services from './services';

export { App} from './App' 

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const provider = [
	...mapValuesToArray(services)
]