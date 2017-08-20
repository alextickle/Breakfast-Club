import pathConfig from './config.json';
const PathConfig = {
	clientDomain: () => {
		const env = process.env.NODE_ENV || 'development';
		return `${pathConfig[env].clientDomain}`;
	},

	serverDomain: () => {
		const env = process.env.NODE_ENV || 'development';
		return `${pathConfig[env].serverDomain}`;
	}
};

export default PathConfig;
