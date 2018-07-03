(function () {
  'use strict';

  var jsonLdGeneratorHome = angular.module('app.generators.jsonLd', []);

  jsonLdGeneratorHome.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Aggregate Offer
      .state('json-ld-generator.aggregate-offer', {
        url: '/aggregate-offer',
        templateUrl: 'generators/json-ld-generator/aggregate-offer/aggregate-offer.template.html',
        title: 'JSON-LD Aggregate Offer Generator',
        ncyBreadcrumb: {
          label: 'Aggregate Offer'
        },
        metaTags: {
          title: 'JSON-LD Aggregate Offer Generator',
          description: 'Generate JSON-LD for an aggregate offer - a single product with multiple offers. Insert the generated JSON into your HTML to improve your website\'s SEO.'
        }
      })
      // Aggregate Rating
      .state('json-ld-generator.aggregate-rating', {
        url: '/aggregate-rating',
        templateUrl: 'generators/json-ld-generator/aggregate-rating/aggregate-rating.template.html',
        title: 'JSON-LD Aggregate Rating Generator',
        ncyBreadcrumb: {
          label: 'Aggregate Rating'
        },
        metaTags: {
          title: 'JSON-LD Aggregate Rating Generator',
          description: 'Generate JSON-LD for an aggregate rating - average rating based on many ratings. Insert the generated JSON into your HTML to enhance your website\'s SEO.'
        }
      })
      // Article
      .state('json-ld-generator.article', {
        url: '/article',
        templateUrl: 'generators/json-ld-generator/article/article.template.html',
        title: 'JSON-LD Article Generator',
        ncyBreadcrumb: {
          label: 'Article'
        },
        metaTags: {
          title: 'JSON-LD Article Generator',
          description: 'Generate JSON-LD for an article, such as a news article or blog post. Copy the generated JSON into your HTML to boost your website\'s SEO.'
        }
      })
      // Event Information
      .state('json-ld-generator.event', {
        url: '/event',
        templateUrl: 'generators/json-ld-generator/event/event.template.html',
        title: 'JSON-LD Event Generator',
        ncyBreadcrumb: {
          label: 'Event'
        },
        metaTags: {
          title: 'JSON-LD Event Generator',
          description: 'Generate JSON-LD for an event, such as a concert or festival. Copy the generated JSON into your HTML to improve your website\'s SEO.'
        }
      })
      // Music Album
      .state('json-ld-generator.music-album', {
        url: '/music-album',
        templateUrl: 'generators/json-ld-generator/music-album/music-album.template.html',
        title: 'JSON-LD Music Album Generator',
        ncyBreadcrumb: {
          label: 'Music Album'
        },
        metaTags: {
          title: 'JSON-LD Music Album Generator',
          description: 'Generate JSON-LD for a music album - a group of music tracks. Insert the generated JSON into your HTML to enhance your website\'s SEO.'
        }
      })
      // Music Playlist
      .state('json-ld-generator.music-playlist', {
        url: '/music-playlist',
        templateUrl: 'generators/json-ld-generator/music-playlist/music-playlist.template.html',
        title: 'JSON-LD Music Playlist Generator',
        ncyBreadcrumb: {
          label: 'Music Playlist'
        },
        metaTags: {
          title: 'JSON-LD Music Playlist Generator',
          description: 'Generate JSON-LD for a music playlist - a group of music tracks in a playlist form. Insert the generated JSON in your HTML to improve your website\'s SEO.'
        }
      })
      // Organization
      .state('json-ld-generator.organization', {
        url: '/organization',
        templateUrl: 'generators/json-ld-generator/organization/organization.template.html',
        title: 'JSON-LD Organization Generator',
        ncyBreadcrumb: {
          label: 'Organization'
        },
        metaTags: {
          title: 'JSON-LD Organization Generator',
          description: 'Generate JSON-LD for an organization, such as a school, club or business. Copy the generated JSON into your HTML to improve your website\'s SEO.'

        }
      })
      // Person
      .state('json-ld-generator.person', {
        url: '/person',
        templateUrl: 'generators/json-ld-generator/person/person.template.html',
        title: 'JSON-LD Person Generator',
        ncyBreadcrumb: {
          label: 'Person'
        },
        metaTags: {
          title: 'JSON-LD Person Generator',
          description: 'Generate JSON-LD for a person - yourself, alive, dead or fictional. Insert the generated JSON within your HTML to boost your website\'s SEO.'
        }
      })
      // Product Offer
      .state('json-ld-generator.product-offer', {
        url: '/product-offer',
        templateUrl: 'generators/json-ld-generator/product-offer/product-offer.template.html',
        title: 'JSON-LD Product Offer Generator',
        ncyBreadcrumb: {
          label: 'Product Offer'
        },
        metaTags: {
          title: 'JSON-LD Product Offer Generator',
          description: 'Generate JSON-LD for any type of product offer, from a spa day to a car rental. Insert the generated JSON into your HTML to boost your website\'s SEO.'
        }
      })
      // Recipe Information
      .state('json-ld-generator.recipe', {
        url: '/recipe',
        templateUrl: 'generators/json-ld-generator/recipe/recipe.template.html',
        title: 'JSON-LD Recipe Generator',
        ncyBreadcrumb: {
          label: 'Recipe'
        },
        metaTags: {
          title: 'JSON-LD Recipe Generator',
          description: 'Generate JSON-LD for a recipe. Include a photo, prep and cook time, calories and more. Insert the JSON into your HTML to improve your website\'s SEO.'
        }
      })
      // Restaurant
      .state('json-ld-generator.restaurant', {
        url: '/restaurant',
        templateUrl: 'generators/json-ld-generator/restaurant/restaurant.template.html',
        title: 'JSON-LD Restaurant Generator',
        ncyBreadcrumb: {
          label: 'Restaurant'
        },
        metaTags: {
          title: 'JSON-LD Restaurant Generator',
          description: 'Generate JSON-LD for a restaurant. Include a menu, type of cuisine, address and more. Insert the JSON into your HTML to improve your website\'s SEO.'
        }
      })
      // Review
      .state('json-ld-generator.review', {
        url: '/review',
        templateUrl: 'generators/json-ld-generator/review/review.template.html',
        title: 'JSON-LD Review Generator',
        ncyBreadcrumb: {
          label: 'Review'
        },
        metaTags: {
          title: 'JSON-LD Review Generator',
          description: 'Generate JSON-LD for a review, such as the review of a movie, item, book or restaurant. Copy the JSON within your HTML to improve your website\'s SEO.'
        }
      })
      // Software Application
      .state('json-ld-generator.software-application', {
        url: '/software-application',
        templateUrl: 'generators/json-ld-generator/software-application/software-application.template.html',
        title: 'JSON-LD Software Application Generator',
        ncyBreadcrumb: {
          label: 'Software Application'
        },
        metaTags: {
          title: 'JSON-LD Software Application Generator',
          description: 'Generate JSON-LD for a software application. Include the category, OS, rating and more. Insert the JSON within your HTML to enhance your website\'s SEO.'
        }
      })
      // Video Information
      .state('json-ld-generator.video', {
        url: '/video',
        templateUrl: 'generators/json-ld-generator/video/video.template.html',
        title: 'JSON-LD Video Generator',
        ncyBreadcrumb: {
          label: 'Video'
        },
        metaTags: {
          title: 'JSON-LD Video Generator',
          description: 'Generate JSON-LD for a video file. Copy the JSON into your HTML to improve your website\'s SEO.'
        }
      });
  }]);
})();
