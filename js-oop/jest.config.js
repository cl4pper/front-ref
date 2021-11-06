module.exports = {
	testEnvironment: 'node',
	testRegex: "((\\.|/*.)(test))\\.ts?$",
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		"@mocks/(.*)": "<rootDir>/src/mock",
		"@classes/(.*)": "<rootDir>/src/classes",
	}
};