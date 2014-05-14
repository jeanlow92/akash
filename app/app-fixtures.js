/**
 * Fixtures for tests and mock response of the dev server.
 *
 */
(function() {
  'use strict';

  angular.module('oep.fixtures', []).

  /**
   * OEP_FIXTURES for oep tests and test server mocked responses.
   *
   */
  constant('OEP_FIXTURES', {
    url: {
      user: /api\/v1\/user(\?returnUrl=.+)?$/,
      users: /api\/v1\/users\/([^\/]+)$/,
      codeSchoolCheck: /api\/v1\/codeschool\/([^\/]+)$/,
      codeSchool: /https:\/\/www\.codeschool\.com\/users\/([^\/]+).json\?callback/,
      updateBadges: /api\/v1\/users\/([^\/]+)\/stats/,
      ranks: /api\/v1\/ranks\?sortBy=([-\.\w]+)$/,
      suggestions: /api\/v1\/suggestions$/
    },
    newChris: {
      'isLoggedIn': true,
      'isAdmin': true,
      'logoutUrl': '/logout',
      'name': 'chris@example.com'
    },
    chris: function(info) {
      return {
        'name': info.name,
        'info': info,
        'logoutUrl': '/logout',
        'isAdmin': true,
        'isLoggedIn': true
      };
    },
    users: {
      'Shannon': {
        'id': 'Shannon',
        'name': 'Shannon',
        'email': 'shannon@example.com',
        'gravatar': 'http://www.gravatar.com/avatar/0916eb03d5bb2818c14b36ffa0cc4397',
        'services': {
          'treeHouse': {
            'id': 'shannonboesch'
          }
        }
      },

      'ProfChris': {
        'id': 'ProfChris',
        'name': 'ProfChris',
        'email': 'profchris@example.com',
        'gravatar': 'http://www.gravatar.com/avatar/4e9e7887b253d6dbe8a453bee39b91e2',
        'services': {
          'treeHouse': {
            'id': 'CoderChristian'
          }
        }
      },

      'dinoboff': {
        'id': 'dinoboff',
        'name': 'dino',
        'email': 'dinoboff@example.com',
        'gravatar': 'http://www.gravatar.com/avatar/ae73021feb9da0939675c3cc45c5ec0e',
        'services': {
          'treeHouse': {
            'id': 'damienlebrun'
          },
          'codeSchool': {
            'id': 'dinoboff'
          }
        }
      },
    },
    profiles: {
      codeSchool: {
        'dinoboff': {
          'user': {
            'username': 'dinoboff',
            'member_since': '2014-04-18T11:47:08Z',
            'total_score': 2425,
            'avatar': 'http://gravatar.com/avatar/ee5eccd4e779fc1f8ba5f15c46b74ec8.jpg?s=80&r=pg'
          },
          'courses': {
            'completed': [],
            'in_progress': [{
              'title': 'JavaScript Road Trip Part 1',
              'url': 'http://www.codeschool.com/courses/javascript-road-trip-part-1',
              'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/100/javascript-road-trip-part-1-b9f5af5196fb596271f7f97b6b477d24.png'
            }]
          },
          'badges': [{
            'name': 'Level 1 on JavaScript Road Trip Part 1',
            'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/297/level-1-on-javascript-road-trip-part-1-ff645bd94243922a90b775da5ee2647c.png',
            'course_url': 'http://www.codeschool.com/courses/javascript-road-trip-part-1'
          }]
        },

        'ChrisBoesch': {
          'user': {
            'username': 'ChrisBoesch',
            'member_since': '2011-04-26T16:11:56Z',
            'total_score': 10250,
            'avatar': 'http://gravatar.com/avatar/6e64bb2cab5367fd6e201df2aa722512.jpg?s=80&r=pg'
          },
          'courses': {
            'completed': [],
            'in_progress': [{
              'title': 'JavaScript Road Trip Part 1',
              'url': 'http://www.codeschool.com/courses/javascript-road-trip-part-1',
              'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/100/javascript-road-trip-part-1-b9f5af5196fb596271f7f97b6b477d24.png'
            }, {
              'title': 'Try R',
              'url': 'http://www.codeschool.com/courses/try-r',
              'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/25/try-r-a0fcb9f1893a2a771b287df5c086e0e4.png'
            }, {
              'title': 'Discover DevTools',
              'url': 'http://www.codeschool.com/courses/discover-devtools',
              'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/27/discover-devtools-f78b78944d7fecf40a40c8f61df99a70.png'
            }]
          },
          'badges': [{
            'name': 'Level 1 on Try R',
            'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/170/level-1-on-try-r-b6bdf4b6a62e94d14719363a5dec43b4.png',
            'course_url': 'http://www.codeschool.com/courses/try-r'
          }, {
            'name': 'Level 1 on Discover DevTools',
            'badge': 'https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/198/level-1-on-discover-devtools-5be926afcba5761b10bddb2f2d914381.png',
            'course_url': 'http://www.codeschool.com/courses/discover-devtools'
          }]
        }
      },
      treeHouse: {
        'shannonboesch': {
          'name': 'Shannon Boesch',
          'profile_name': 'shannonboesch',
          'profile_url': 'http://teamtreehouse.com/shannonboesch',
          'gravatar_url': 'https://secure.gravatar.com/avatar/49e992d40a5afa32a3f2ca99bd8d05c3?s=200&d=https://teamtreehouse.com/assets/content/default_avatar.png&r=pg',
          'gravatar_hash': '49e992d40a5afa32a3f2ca99bd8d05c3',
          'badges': [{
            'id': 49,
            'name': 'Newbie',
            'url': 'http://teamtreehouse.com/shannonboesch',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/Generic_Newbie.png',
            'earned_date': '2014-04-16T02:54:56Z',
            'courses': []
          }, {
            'id': 912,
            'name': 'Beginning HTML and CSS',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/badges_html_howtomakeawebsite_stage01.png',
            'earned_date': '2014-04-29T17:53:04Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'Beginning HTML and CSS',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
              'badge_count': 1
            }]
          }, {
            'id': 922,
            'name': 'HTML First',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/html-first',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/bagdes_html_howtobuildawebsite_stage02.png',
            'earned_date': '2014-04-29T21:15:23Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'HTML First',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/html-first',
              'badge_count': 1
            }]
          }, {
            'id': 932,
            'name': 'Creating HTML Content',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/creating-html-content',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/bagdes_html_howtobuildawebsite_stage03.png',
            'earned_date': '2014-04-30T12:44:34Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'Creating HTML Content',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/creating-html-content',
              'badge_count': 1
            }]
          }],
          'points': {
            'total': 216,
            'HTML': 156,
            'CSS': 30,
            'Design': 0,
            'JavaScript': 0,
            'Ruby': 0,
            'PHP': 0,
            'WordPress': 0,
            'iOS': 0,
            'Android': 0,
            'Development Tools': 0,
            'Business': 0
          }
        },

        'CoderChristian': {
          'name': 'Christian Boesch',
          'profile_name': 'coderchristian',
          'profile_url': 'http://teamtreehouse.com/coderchristian',
          'gravatar_url': 'https://secure.gravatar.com/avatar/52b7cb033585db8583680bdba0b60731?s=200&d=https://teamtreehouse.com/assets/content/default_avatar.png&r=pg',
          'gravatar_hash': '52b7cb033585db8583680bdba0b60731',
          'badges': [{
            'id': 49,
            'name': 'Newbie',
            'url': 'http://teamtreehouse.com/coderchristian',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/Generic_Newbie.png',
            'earned_date': '2014-04-16T02:55:45Z',
            'courses': []
          }, {
            'id': 912,
            'name': 'Beginning HTML and CSS',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/badges_html_howtomakeawebsite_stage01.png',
            'earned_date': '2014-04-18T11:02:15Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'Beginning HTML and CSS',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
              'badge_count': 1
            }]
          }, {
            'id': 922,
            'name': 'HTML First',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/html-first',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/bagdes_html_howtobuildawebsite_stage02.png',
            'earned_date': '2014-05-06T11:33:43Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'HTML First',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/html-first',
              'badge_count': 1
            }]
          }],
          'points': {
            'total': 144,
            'HTML': 84,
            'CSS': 30,
            'Design': 0,
            'JavaScript': 0,
            'Ruby': 0,
            'PHP': 0,
            'WordPress': 0,
            'iOS': 0,
            'Android': 0,
            'Development Tools': 0,
            'Business': 0
          }
        },

        'damienlebrun': {
          'name': 'Damien Lebrun',
          'profile_name': 'damienlebrun',
          'profile_url': 'http://teamtreehouse.com/damienlebrun',
          'gravatar_url': 'https://secure.gravatar.com/avatar/ee5eccd4e779fc1f8ba5f15c46b74ec8?s=200&d=https://teamtreehouse.com/assets/content/default_avatar.png&r=pg',
          'gravatar_hash': 'ee5eccd4e779fc1f8ba5f15c46b74ec8',
          'badges': [{
            'id': 49,
            'name': 'Newbie',
            'url': 'http://teamtreehouse.com/damienlebrun',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/Generic_Newbie.png',
            'earned_date': '2014-04-24T10:36:21Z',
            'courses': []
          }, {
            'id': 912,
            'name': 'Beginning HTML and CSS',
            'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/badges_html_howtomakeawebsite_stage01.png',
            'earned_date': '2014-04-24T10:49:47Z',
            'courses': [{
              'title': 'Websites',
              'url': 'http://teamtreehouse.com/library/websites',
              'badge_count': 1
            }, {
              'title': 'How to Make a Website',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
              'badge_count': 1
            }, {
              'title': 'Beginning HTML and CSS',
              'url': 'http://teamtreehouse.com/library/how-to-make-a-website/beginning-html-and-css',
              'badge_count': 1
            }]
          }],
          'points': {
            'total': 90,
            'HTML': 30,
            'CSS': 30,
            'Design': 0,
            'JavaScript': 0,
            'Ruby': 0,
            'PHP': 0,
            'WordPress': 0,
            'iOS': 0,
            'Android': 0,
            'Development Tools': 0,
            'Business': 0
          }
        },

        'chrisboesch': {
          'name': 'Chris Boesch',
          'profile_name': 'chrisboesch',
          'profile_url': 'http://teamtreehouse.com/chrisboesch',
          'gravatar_url': 'https://secure.gravatar.com/avatar/6e64bb2cab5367fd6e201df2aa722512?s=200&d=https://teamtreehouse.com/assets/content/default_avatar.png&r=pg',
          'gravatar_hash': '6e64bb2cab5367fd6e201df2aa722512',
          'badges': [{
            'id': 49,
            'name': 'Newbie',
            'url': 'http://teamtreehouse.com/chrisboesch',
            'icon_url': 'https://wac.A8B5.edgecastcdn.net/80A8B5/achievement-images/Generic_Newbie.png',
            'earned_date': '2014-04-16T02:53:54Z',
            'courses': []
          }],
          'points': {
            'total': 42,
            'HTML': 6,
            'CSS': 6,
            'Design': 0,
            'JavaScript': 0,
            'Ruby': 0,
            'PHP': 0,
            'WordPress': 0,
            'iOS': 0,
            'Android': 0,
            'Development Tools': 0,
            'Business': 0
          }
        }
      }
    },
    gravatar: 'http://www.gravatar.com/avatar/9655f78d38f380d17931f8dd9a227b9f',
    notFound: {
      'error': 'The resource could not be found.'
    }
  })

  ;

})();