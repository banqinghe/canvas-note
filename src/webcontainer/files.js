import indexJs from './container-files/index.js?raw';
import packageJson from './container-files/package.json?raw';

// notes raw string
const notesModules = import.meta.glob(
  [
    '../notes/**/*.js',
    '../notes/**/*.html',
    '../notes/**/*.md',
    '../notes/**/*.css',
  ],
  {
    as: 'raw',
    eager: true,
  }
);

// console.log(notesModules);

/** @satisfies {import('@webcontainer/api').FileSystemTree} */
export const files = {
  'index.js': {
    file: {
      contents: indexJs,
    },
  },
  'package.json': {
    file: {
      contents: packageJson,
    },
  },
  notes: {
    directory: {
      '00.canvas-api': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/00.canvas-api/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/00.canvas-api/index.js'],
            },
          },
        },
      },
      '01.basic-usage': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/01.basic-usage/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/01.basic-usage/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/01.basic-usage/note.md'],
            },
          },
        },
      },
      '02.drawing-shapes': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/02.drawing-shapes/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/02.drawing-shapes/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/02.drawing-shapes/note.md'],
            },
          },
        },
      },
      '03.applying-styles-and-colors': {
        directory: {
          'index.html': {
            file: {
              contents:
                notesModules[
                  '../notes/03.applying-styles-and-colors/index.html'
                ],
            },
          },
          'index.js': {
            file: {
              contents:
                notesModules['../notes/03.applying-styles-and-colors/index.js'],
            },
          },
          'note.md': {
            file: {
              contents:
                notesModules['../notes/03.applying-styles-and-colors/note.md'],
            },
          },
        },
      },
      '04.drawing-text': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/04.drawing-text/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/04.drawing-text/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/04.drawing-text/note.md'],
            },
          },
        },
      },
      '05.using-images': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/05.using-images/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/05.using-images/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/05.using-images/note.md'],
            },
          },
        },
      },
      '06.transformations': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/06.transformations/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/06.transformations/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/06.transformations/note.md'],
            },
          },
        },
      },
      '07.compositing': {
        directory: {
          'index.html': {
            file: {
              contents: notesModules['../notes/07.compositing/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/07.compositing/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/07.compositing/note.md'],
            },
          },
        },
      },
      '08.basic-animations': {
        directory: {
          clock: {
            directory: {
              'index.html': {
                file: {
                  contents:
                    notesModules[
                      '../notes/08.basic-animations/clock/index.html'
                    ],
                },
              },
              'index.js': {
                file: {
                  contents:
                    notesModules['../notes/08.basic-animations/clock/index.js'],
                },
              },
            },
          },
          'solar-system': {
            directory: {
              'index.html': {
                file: {
                  contents:
                    notesModules[
                      '../notes/08.basic-animations/solar-system/index.html'
                    ],
                },
              },
              'index.js': {
                file: {
                  contents:
                    notesModules[
                      '../notes/08.basic-animations/solar-system/index.js'
                    ],
                },
              },
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/08.basic-animations/note.md'],
            },
          },
        },
      },
      '09.advanced-animations': {
        directory: {
          'index.html': {
            file: {
              contents:
                notesModules['../notes/09.advanced-animations/index.html'],
            },
          },
          'index.js': {
            file: {
              contents:
                notesModules['../notes/09.advanced-animations/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/09.advanced-animations/note.md'],
            },
          },
        },
      },
      '10.pixel-manipulation-with-canvas': {
        directory: {
          'index.html': {
            file: {
              contents:
                notesModules[
                  '../notes/10.pixel-manipulation-with-canvas/index.html'
                ],
            },
          },
          'index.js': {
            file: {
              contents:
                notesModules[
                  '../notes/10.pixel-manipulation-with-canvas/index.js'
                ],
            },
          },
          'note.md': {
            file: {
              contents:
                notesModules[
                  '../notes/10.pixel-manipulation-with-canvas/note.md'
                ],
            },
          },
          'put-image-data.js': {
            file: {
              contents:
                notesModules[
                  '../notes/10.pixel-manipulation-with-canvas/put-image-data.js'
                ],
            },
          },
          'zoom-canvas.js': {
            file: {
              contents:
                notesModules[
                  '../notes/10.pixel-manipulation-with-canvas/zoom-canvas.js'
                ],
            },
          },
        },
      },
      '11.hit-regions-and-accessibility': {
        directory: {
          'index.html': {
            file: {
              contents:
                notesModules[
                  '../notes/11.hit-regions-and-accessibility/index.html'
                ],
            },
          },
          'index.js': {
            file: {
              contents:
                notesModules[
                  '../notes/11.hit-regions-and-accessibility/index.js'
                ],
            },
          },
          'note.md': {
            file: {
              contents:
                notesModules[
                  '../notes/11.hit-regions-and-accessibility/note.md'
                ],
            },
          },
        },
      },
      '12.optimizing-canvas': {
        directory: {
          'index.html': {
            file: {
              contents:
                notesModules['../notes/12.optimizing-canvas/index.html'],
            },
          },
          'index.js': {
            file: {
              contents: notesModules['../notes/12.optimizing-canvas/index.js'],
            },
          },
          'note.md': {
            file: {
              contents: notesModules['../notes/12.optimizing-canvas/note.md'],
            },
          },
        },
      },
      'index.js': {
        file: {
          contents: notesModules['../notes/index.js'],
        },
      },
      'style.css': {
        file: {
          contents: notesModules['../notes/style.css'],
        },
      },
      util: {
        directory: {
          'get-images.js': {
            file: {
              contents: notesModules['../notes/util/get-images.js'],
            },
          },
        },
      },
    },
  },
};
