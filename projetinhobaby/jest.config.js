module.exports = {
    preset: 'ts-jest',
    testEnviroment: 'node',
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    }
}