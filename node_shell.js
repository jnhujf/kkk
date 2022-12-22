const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'907594b7-8e58-4806-86d0-357e3e73486b'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
