// import {platforms} from '../../../../../integration-docs/_platforms.json';
const {platforms} = {
  platforms: [
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/csharp/',
          type: 'language',
          id: 'csharp',
          name: 'C#'
        }
      ],
      id: 'csharp',
      name: 'C#'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/elixir/',
          type: 'language',
          id: 'elixir',
          name: 'Elixir'
        }
      ],
      id: 'elixir',
      name: 'Elixir'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/go/',
          type: 'language',
          id: 'go',
          name: 'Go'
        },
        {
          link: null,
          type: 'framework',
          id: 'go-http',
          name: 'net/http'
        }
      ],
      id: 'go',
      name: 'Go'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/android/',
          type: 'framework',
          id: 'java-android',
          name: 'Android'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/appengine/',
          type: 'framework',
          id: 'java-appengine',
          name: 'Google App Engine'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/',
          type: 'language',
          id: 'java',
          name: 'Java'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/log4j/',
          type: 'framework',
          id: 'java-log4j',
          name: 'Log4j 1.x'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/log4j2/',
          type: 'framework',
          id: 'java-log4j2',
          name: 'Log4j 2.x'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/logback/',
          type: 'framework',
          id: 'java-logback',
          name: 'Logback'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/java/modules/jul/',
          type: 'framework',
          id: 'java-logging',
          name: 'java.util.logging'
        }
      ],
      id: 'java',
      name: 'Java'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/angular/',
          type: 'framework',
          id: 'javascript-angular',
          name: 'Angular'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/angularjs/',
          type: 'framework',
          id: 'javascript-angularjs',
          name: 'AngularJS'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/backbone/',
          type: 'framework',
          id: 'javascript-backbone',
          name: 'Backbone'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/ember/',
          type: 'framework',
          id: 'javascript-ember',
          name: 'Ember'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/install/',
          type: 'language',
          id: 'javascript',
          name: 'JavaScript'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/react/',
          type: 'framework',
          id: 'javascript-react',
          name: 'React'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/javascript/integrations/vue/',
          type: 'framework',
          id: 'javascript-vue',
          name: 'Vue'
        }
      ],
      id: 'javascript',
      name: 'JavaScript'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/node/integrations/connect/',
          type: 'framework',
          id: 'node-connect',
          name: 'Connect'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/node/integrations/express/',
          type: 'framework',
          id: 'node-express',
          name: 'Express'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/node/integrations/koa/',
          type: 'framework',
          id: 'node-koa',
          name: 'Koa'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/node/',
          type: 'language',
          id: 'node',
          name: 'Node.js'
        }
      ],
      id: 'node',
      name: 'Node.js'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/cocoa/',
          type: 'language',
          id: 'objc',
          name: 'Objective-C'
        }
      ],
      id: 'objc',
      name: 'Objective-C'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/php/integrations/laravel/',
          type: 'framework',
          id: 'php-laravel',
          name: 'Laravel'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/php/integrations/monolog/',
          type: 'framework',
          id: 'php-monolog',
          name: 'Monolog'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/php/',
          type: 'language',
          id: 'php',
          name: 'PHP'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/php/integrations/symfony2/',
          type: 'framework',
          id: 'php-symfony2',
          name: 'Symfony2'
        }
      ],
      id: 'php',
      name: 'PHP'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/bottle/',
          type: 'framework',
          id: 'python-bottle',
          name: 'Bottle'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/celery/',
          type: 'library',
          id: 'python-celery',
          name: 'Celery'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/django/',
          type: 'framework',
          id: 'python-django',
          name: 'Django'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/flask/',
          type: 'framework',
          id: 'python-flask',
          name: 'Flask'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/pylons/',
          type: 'framework',
          id: 'python-pylons',
          name: 'Pylons'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/pyramid/',
          type: 'framework',
          id: 'python-pyramid',
          name: 'Pyramid'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/',
          type: 'language',
          id: 'python',
          name: 'Python'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/rq/',
          type: 'framework',
          id: 'python-rq',
          name: 'RQ'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/python/integrations/tornado/',
          type: 'framework',
          id: 'python-tornado',
          name: 'Tornado'
        }
      ],
      id: 'python',
      name: 'Python'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/react-native/',
          type: 'language',
          id: 'cocoa',
          name: 'React-Native'
        }
      ],
      id: 'cocoa',
      name: 'React-Native'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/ruby/integrations/rack/',
          type: 'framework',
          id: 'ruby-rack',
          name: 'Rack'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/ruby/integrations/rails/',
          type: 'framework',
          id: 'ruby-rails',
          name: 'Rails'
        },
        {
          link: 'https://docs.getsentry.com/hosted/clients/ruby/',
          type: 'language',
          id: 'ruby',
          name: 'Ruby'
        }
      ],
      id: 'ruby',
      name: 'Ruby'
    },
    {
      integrations: [
        {
          link: 'https://docs.getsentry.com/hosted/clients/cocoa/',
          type: 'language',
          id: 'swift',
          name: 'Swift'
        }
      ],
      id: 'swift',
      name: 'Swift'
    }
  ]
};

// const platforms = [];
const Popular = [
  'javascript',
  'javascript-react',
  'python-django',
  'python',
  'python-flask',
  'ruby-rails',
  'node-express',
  'php-laravel',
  'php-symfony2',
  'java',
  'csharp',
  'exilir'
];

const Frontend = [
  'javascript',
  'javascript-react',
  'javascript-angular',
  'javascript-angularjs',
  'javascript-backbone',
  'javascript-ember',
  'javascript-vue'
];

const Mobile = ['objc', 'swift', 'java-android', 'cocoa'];

const Backend = [
  'go',
  'go-http',
  'java-appengine',
  'java',
  'java-log4j',
  'java-log4j2',
  'java-logback',
  'java-logging',
  'node',
  'node-express',
  'node-koa',
  'node-connect',
  'csharp',
  'php',
  'php-laravel',
  'php-monolog',
  'php-symfony2',
  'python',
  'python-django',
  'python-flask',
  'python-celery',
  'python-bottle',
  'python-pylons',
  'python-pyramid',
  'python-tornado',
  'python-rq',
  'ruby',
  'ruby-rails',
  'ruby-rack',
  'exilir'
];

const categoryLists = {
  Popular,
  Frontend,
  Mobile,
  Backend
};

const additional = platforms.concat({
  integrations: [
    {
      link: 'https://docs.getsentry.com/hosted/clients/',
      type: 'language',
      id: 'other',
      name: 'Other'
    }
  ],
  id: 'other',
  name: 'Other'
});

const flattenedPlatforms = [].concat(
  [],
  ...additional.map(language => {
    return language.integrations.map(i => {
      return {...i, language: language.id};
    });
  })
);

const onboardingSteps = {organization: 0, project: 1, configure: 2};

const stepDescriptions = {
  organization: 'Create an organization in Sentry',
  project: 'Tell us about your project',
  configure: 'Configure your application and send an event'
};

export {onboardingSteps, stepDescriptions, flattenedPlatforms, categoryLists};
