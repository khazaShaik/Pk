module.exports = {
  name: 'enlight',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/enlight',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
