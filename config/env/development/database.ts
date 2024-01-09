export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', '159.69.114.250'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'edm_db'),
			user: env('DATABASE_USERNAME', 'edm_user'),
			password: env('DATABASE_PASSWORD', 'dTMaKc374rUPt'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
