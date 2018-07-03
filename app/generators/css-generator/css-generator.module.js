(function () {
  'use strict';

  var cssGenerator = angular.module('app.generators.css', []);

  cssGenerator.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('css-generator.animation', {
        url: '/animation',
        templateUrl: 'generators/css-generator/animation/animation.template.html',
        title: 'CSS3 Animation Generator',
        ncyBreadcrumb: {
          label: 'Animation'
        },
        metaTags: {
          title: 'CSS3 Animation Generator',
          description: 'Generate CSS3 keyframe animations with our online CSS generator tool. Preview the result live, and copy the generated code to your website. No coding required!'
        }
      })
      // Background Color
      .state('css-generator.background-color', {
        url: '/background-color',
        templateUrl: 'generators/css-generator/background-color/background-color.template.html',
        title: 'CSS Background Color Generator',
        ncyBreadcrumb: {
          label: 'Background Color'
        },
        metaTags: {
          title: 'CSS Background Color Generator'
        }
      })
      // Background Gradient
      .state('css-generator.background-gradient', {
        url: '/background-gradient',
        templateUrl: 'generators/css-generator/background-gradient/background-gradient.template.html',
        title: 'CSS3 Background Gradient Generator',
        ncyBreadcrumb: {
          label: 'Background Gradient'
        },
        metaTags: {
          title: 'CSS3 Background Gradient Generator',
          description: 'Generate CSS3 linear and radial background gradients with our online CSS generator tool. Preview the live result, and copy the generated code to your website.'
        }
      })
      // Background Image
      .state('css-generator.background-image', {
        url: '/background-image',
        templateUrl: 'generators/css-generator/background-image/background-image.template.html',
        title: 'CSS Background Image Generator',
        ncyBreadcrumb: {
          label: 'Background Image'
        },
        metaTags: {
          title: 'CSS Background Image Generator'
        }
      })
      // Blur
      .state('css-generator.blur', {
        url: '/blur',
        templateUrl: 'generators/css-generator/blur/blur.template.html',
        title: 'CSS3 Blur Filter Generator',
        ncyBreadcrumb: {
          label: 'Blur'
        },
        metaTags: {
          title: 'CSS3 Blur Filter Generator'
        }
      })
      // Border
      .state('css-generator.border', {
        url: '/border',
        templateUrl: 'generators/css-generator/border/border.template.html',
        title: 'CSS Border Generator',
        ncyBreadcrumb: {
          label: 'Border'
        },
        metaTags: {
          title: 'CSS Border Generator',
          description: 'Generate a CSS border to surround any HTML element using our online CSS generator tool. Preview the live result, and copy the generated code to your website.'
        }
      })
      // Border Image
      .state('css-generator.border-image', {
        url: '/border-image',
        templateUrl: 'generators/css-generator/border-image/border-image.template.html',
        title: 'CSS3 Border Image Generator',
        ncyBreadcrumb: {
          label: 'Border Image'
        },
        metaTags: {
          title: 'CSS3 Border Image Generator'
        }
      })
      // Border Radius
      .state('css-generator.border-radius', {
        url: '/border-radius',
        templateUrl: 'generators/css-generator/border-radius/border-radius.template.html',
        title: 'CSS3 Border Radius Generator',
        ncyBreadcrumb: {
          label: 'Border Radius'
        },
        metaTags: {
          title: 'CSS3 Border Radius Generator',
          description: 'Generate a CSS3 border radius to round corners of any HTML element using our online CSS generator tool. Preview live and copy the code to your website.'
        }
      })
      // Box Resize
      .state('css-generator.box-resize', {
        url: '/box-resize',
        templateUrl: 'generators/css-generator/box-resize/box-resize.template.html',
        title: 'CSS3 Box Resize Generator',
        ncyBreadcrumb: {
          label: 'Box Resize'
        },
        metaTags: {
          title: 'CSS3 Box Resize Generator'
        }
      })
      // Box Shadow
      .state('css-generator.box-shadow', {
        url: '/box-shadow',
        templateUrl: 'generators/css-generator/box-shadow/box-shadow.template.html',
        title: 'CSS3 Box Shadow Generator',
        ncyBreadcrumb: {
          label: 'Box Shadow'
        },
        metaTags: {
          title: 'CSS3 Box Shadow Generator',
          description: 'Generate a CSS3 box shadow with our online CSS generator tool. Preview the result and copy the code to your website. No coding skills required!'
        }
      })
      // Brightness
      .state('css-generator.brightness', {
        url: '/brightness',
        templateUrl: 'generators/css-generator/brightness/brightness.template.html',
        title: 'CSS3 Brightness Filter Generator',
        ncyBreadcrumb: {
          label: 'Brightness'
        },
        metaTags: {
          title: 'CSS3 Brightness Filter Generator',
        }
      })
      // Contrast
      .state('css-generator.contrast', {
        url: '/contrast',
        templateUrl: 'generators/css-generator/contrast/contrast.template.html',
        title: 'CSS3 Contrast Filter Generator',
        ncyBreadcrumb: {
          label: 'Contrast'
        },
        metaTags: {
          title: 'CSS3 Contrast Filter Generator'
        }
      })
      // Columns
      .state('css-generator.columns', {
        url: '/columns',
        templateUrl: 'generators/css-generator/columns/columns.template.html',
        title: 'CSS3 Columns Generator',
        ncyBreadcrumb: {
          label: 'Columns'
        },
        metaTags: {
          title: 'CSS3 Columns Generator'
        }
      })
      // Cursor
      .state('css-generator.cursor', {
        url: '/cursor',
        templateUrl: 'generators/css-generator/cursor/cursor.template.html',
        title: 'CSS Cursor Generator',
        ncyBreadcrumb: {
          label: 'Cursor'
        },
        metaTags: {
          title: 'CSS Cursor Generator'
        }
      })
      // Display
      .state('css-generator.display', {
        url: '/display',
        templateUrl: 'generators/css-generator/display/display.template.html',
        title: 'CSS Display Generator',
        ncyBreadcrumb: {
          label: 'Display'
        },
        metaTags: {
          title: 'CSS Display Generator'
        }
      })
      // Grayscale
      .state('css-generator.grayscale', {
        url: '/grayscale',
        templateUrl: 'generators/css-generator/grayscale/grayscale.template.html',
        title: 'CSS3 Grayscale Filter Generator',
        ncyBreadcrumb: {
          label: 'Grayscale'
        },
        metaTags: {
          title: 'Grayscale'
        }
      })
      // Hue-Rotate
      .state('css-generator.hue-rotate', {
        url: '/hue-rotate',
        templateUrl: 'generators/css-generator/hue-rotate/hue-rotate.template.html',
        title: 'CSS3 Hue-Rotate Filter Generator',
        ncyBreadcrumb: {
          label: 'Hue-Rotate'
        },
        metaTags: {
          title: 'CSS3 Hue-Rotate Filter Generator'
        }
      })
      // Invert
      .state('css-generator.invert', {
        url: '/invert',
        templateUrl: 'generators/css-generator/invert/invert.template.html',
        title: 'CSS3 Invert Filter Generator',
        ncyBreadcrumb: {
          label: 'Invert'
        },
        metaTags: {
          title: 'CSS3 Invert Filter Generator'
        }
      })
      // Letter Spacing
      .state('css-generator.letter-spacing', {
        url: '/letter-spacing',
        templateUrl: 'generators/css-generator/letter-spacing/letter-spacing.template.html',
        title: 'CSS Letter Spacing Generator',
        ncyBreadcrumb: {
          label: 'Letter Spacing'
        },
        metaTags: {
          title: 'CSS Letter Spacing Generator'
        }
      })
      // Line Height
      .state('css-generator.line-height', {
        url: '/line-height',
        templateUrl: 'generators/css-generator/line-height/line-height.template.html',
        title: 'CSS Line Height Generator',
        ncyBreadcrumb: {
          label: 'Line Height'
        },
        metaTags: {
          title: 'CSS Line Height Generator'
        }
      })
      // List Style
      .state('css-generator.list-style', {
        url: '/list-style',
        templateUrl: 'generators/css-generator/list-style/list-style.template.html',
        title: 'CSS List Style Generator',
        ncyBreadcrumb: {
          label: 'List Style'
        },
        metaTags: {
          title: 'CSS List Style Generator'
        }
      })
      // Opacity
      .state('css-generator.opacity', {
        url: '/opacity',
        templateUrl: 'generators/css-generator/opacity/opacity.template.html',
        title: 'CSS Opacity Generator',
        ncyBreadcrumb: {
          label: 'Opacity'
        },
        metaTags: {
          title: 'CSS Opacity Generator'
        }
      })
      // Outline
      .state('css-generator.outline', {
        url: '/outline',
        templateUrl: 'generators/css-generator/outline/outline.template.html',
        title: 'CSS Outline Generator',
        ncyBreadcrumb: {
          label: 'Outline'
        },
        metaTags: {
          title: 'CSS Outline Generator'
        }
      })
      // Overflow
      .state('css-generator.overflow', {
        url: '/overflow',
        templateUrl: 'generators/css-generator/overflow/overflow.template.html',
        title: 'CSS Overflow (x, y) Generator',
        ncyBreadcrumb: {
          label: 'Overflow (x, y)'
        },
        metaTags: {
          title: 'CSS Overflow (x, y) Generator'
        }
      })
      // Perspective
      .state('css-generator.perspective', {
        url: '/perspective',
        templateUrl: 'generators/css-generator/perspective/perspective.template.html',
        title: 'CSS3 Perspective Generator',
        ncyBreadcrumb: {
          label: 'Perspective'
        },
        metaTags: {
          title: 'CSS3 Perspective Generator'
        }
      })
      // Saturate
      .state('css-generator.saturate', {
        url: '/saturate',
        templateUrl: 'generators/css-generator/saturate/saturate.template.html',
        title: 'CSS3 Saturate Filter Generator',
        ncyBreadcrumb: {
          label: 'Saturate'
        },
        metaTags: {
          title: 'CSS3 Saturate Filter Generator'
        }
      })
      // Sepia
      .state('css-generator.sepia', {
        url: '/sepia',
        templateUrl: 'generators/css-generator/sepia/sepia.template.html',
        title: 'CSS3 Sepia Filter Generator',
        ncyBreadcrumb: {
          label: 'Sepia'
        },
        metaTags: {
          title: 'CSS3 Sepia Filter Generator'
        }
      })
      // Tab Size
      .state('css-generator.tab-size', {
        url: '/tab-size',
        templateUrl: 'generators/css-generator/tab-size/tab-size.template.html',
        title: 'CSS3 Tab Size Generator',
        ncyBreadcrumb: {
          label: 'Tab Size'
        },
        metaTags: {
          title: 'CSS3 Tab Size Generator'
        }
      })
      // Text Align
      .state('css-generator.text-align', {
        url: '/text-align',
        templateUrl: 'generators/css-generator/text-align/text-align.template.html',
        title: 'CSS Text Align Generator',
        ncyBreadcrumb: {
          label: 'Text Align'
        },
        metaTags: {
          title: 'CSS Text Align Generator'
        }
      })
      // Text Decoration
      .state('css-generator.text-decoration', {
        url: '/text-decoration',
        templateUrl: 'generators/css-generator/text-decoration/text-decoration.template.html',
        title: 'CSS Text Decoration Generator',
        ncyBreadcrumb: {
          label: 'Text Decoration'
        },
        metaTags: {
          title: 'CSS Text Decoration Generator'
        }
      })
      // Text Indent
      .state('css-generator.text-indent', {
        url: '/text-indent',
        templateUrl: 'generators/css-generator/text-indent/text-indent.template.html',
        title: 'CSS Text Indent Generator',
        ncyBreadcrumb: {
          label: 'Text Indent'
        },
        metaTags: {
          title: 'CSS Text Indent Generator'
        }
      })
      // Text Shadow
      .state('css-generator.text-shadow', {
        url: '/text-shadow',
        templateUrl: 'generators/css-generator/text-shadow/text-shadow.template.html',
        title: 'CSS3 Text Shadow Generator',
        description: 'Generate a CSS3 text shadow for any text with our online CSS generator tool. Preview the result live and copy the code to your website. No coding required!',
        ncyBreadcrumb: {
          label: 'Text Shadow'
        },
        metaTags: {
          title: 'CSS3 Text Shadow Generator'
        }
      })
      // Text Transform
      .state('css-generator.text-transform', {
        url: '/text-transform',
        templateUrl: 'generators/css-generator/text-transform/text-transform.template.html',
        title: 'CSS Text Transform Generator',
        ncyBreadcrumb: {
          label: 'Text Transform'
        },
        metaTags: {
          title: 'CSS Text Transform Generator'
        }
      })
      // Transform
      .state('css-generator.transform', {
        url: '/transform',
        templateUrl: 'generators/css-generator/transform/transform.template.html',
        title: 'CSS3 Transform Generator',
        ncyBreadcrumb: {
          label: 'Transform'
        },
        metaTags: {
          title: 'CSS3 Transform Generator',
          description: 'Generate CSS3 code to transform the rotation, skew and scale of any element with our CSS generator. Preview the result live and copy the code to your website.'
        }
      })
      // Transition
      .state('css-generator.transition', {
        url: '/transition',
        templateUrl: 'generators/css-generator/transition/transition.template.html',
        title: 'CSS3 Transition Generator',
        ncyBreadcrumb: {
          label: 'Transition'
        },
        metaTags: {
          title: 'CSS3 Transition Generator',
          description: 'Generate CSS3 code to smoothly transition an element from one state to another using our online CSS generator tool. Preview and copy the code to your website.'
        }
      })
      // Visibility
      .state('css-generator.visibility', {
        url: '/visibility',
        templateUrl: 'generators/css-generator/visibility/visibility.template.html',
        title: 'CSS Visibility Generator',
        ncyBreadcrumb: {
          label: 'Visibility'
        },
        metaTags: {
          title: 'CSS Visibility Generator'
        }
      })
      // White Space
      .state('css-generator.white-space', {
        url: '/white-space',
        templateUrl: 'generators/css-generator/white-space/white-space.template.html',
        title: 'CSS White Space Generator',
        ncyBreadcrumb: {
          label: 'White Space'
        },
        metaTags: {
          title: 'CSS White Space Generator'
        }
      })
      // Word Break
      .state('css-generator.word-break', {
        url: '/word-break',
        templateUrl: 'generators/css-generator/word-break/word-break.template.html',
        title: 'CSS3 Word Break Generator',
        ncyBreadcrumb: {
          label: 'Word Break'
        },
        metaTags: {
          title: 'CSS3 Word Break Generator'
        }
      })
      // Word Spacing
      .state('css-generator.word-spacing', {
        url: '/word-spacing',
        templateUrl: 'generators/css-generator/word-spacing/word-spacing.template.html',
        title: 'CSS Word Spacing Generator',
        ncyBreadcrumb: {
          label: 'Word Spacing'
        },
        metaTags: {
          title: 'CSS Word Spacing Generator'
        }
      })
      // Word Wrap
      .state('css-generator.word-wrap', {
        url: '/word-wrap',
        templateUrl: 'generators/css-generator/word-wrap/word-wrap.template.html',
        title: 'CSS3 Word Wrap Generator',
        ncyBreadcrumb: {
          label: 'Word Wrap'
        },
        metaTags: {
          title: 'CSS3 Word Wrap Generator'
        }
      });
  }]);
})();
