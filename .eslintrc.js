module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "react/prop-types": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-shadow": 0
      },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
