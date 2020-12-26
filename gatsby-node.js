exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-particles-js/,
            use: loaders.null(),
          },
          {
            test: /react-typing-effect/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
