exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['slick-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
