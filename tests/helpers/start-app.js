import Application from '../../app';
import config      from '../../config/environment';
import run         from 'ember-runloop';
import merge       from 'ember-merge';

export default function startApp(attrs) {
  let application;

  let attributes = merge({}, config.APP);
  attributes =     merge(attributes, attrs); // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
