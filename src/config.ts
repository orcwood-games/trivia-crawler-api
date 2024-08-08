export default {
	isProd: !!process.env.IS_PROD,
	port: process.env.PORT || 8080,
	info: {
			name: "Trivial Crawler API",
			version: 1.0,
			updated: new Date("2024-08-08")
	},
	jwt: {
			key: process.env.JWT_KEY || "jwt_key_1234",
			expiresIn: process.env.JWT_EXPIRES_IN || "10y"
	},
	conn: {
			host: process.env.CONN_HOST || "localhost",
			user: process.env.CONN_USER || "root",
			password: process.env.CONN_PASSWORD || "password",
			database: process.env.CONN_DATABASE || "database",
			charset: "utf8mb4",
			multipleStatements: true,
	},
	steam: {
			appId: process.env.STEAM_APP_ID || "123",
			identity: process.env.STEAM_IDENTITY || "identity_string",
			key: process.env.STEAM_API_KEY || "FAKE_API_KEY",
			host: "partner.steam-api.com"
	}
};



