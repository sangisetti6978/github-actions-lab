
module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                module: "readonly",
                require: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "error"
        }
    }
];
