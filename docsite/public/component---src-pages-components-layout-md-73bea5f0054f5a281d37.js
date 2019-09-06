;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    455: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return b
        })
      n(12), n(13), n(9), n(17), n(23), n(0)
      var a = n(90),
        o = n(462)
      var r = {},
        l = { _frontmatter: r },
        i = o.b
      function b(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              o = {},
              r = Object.keys(e)
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Layout Guide'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'Box.md' }), 'Box'),
            ' and ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'Flex.md' }), 'Flex'),
            ' components are low-level layout components that can handle virtually\nany layout styling that could be handled with a grid system as well as handle a lot of microlayout styles.',
          ),
          Object(a.b)('h3', null, 'Flexbox'),
          Object(a.b)(
            'p',
            null,
            'To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.\nThe following links can be useful to understand how flexbox works:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign({ parentName: 'li' }, { href: 'https://www.w3.org/TR/css-flexbox-1/' }),
                'CSS Flexible Box Layout Module',
              ),
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes',
                  },
                ),
                'MDN: Using CSS Flexible Boxes',
              ),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            "Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.\nGenerally the Design System layout components should work as expected in IE11, but it's always good to test.",
          ),
          Object(a.b)(
            'p',
            null,
            'See the ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/philipwalton/flexbugs' }),
              'Flexbugs',
            ),
            ' project for more information.',
          ),
          Object(a.b)('h3', null, 'Margins'),
          Object(a.b)(
            'p',
            null,
            'Using the ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/jxnblk/styled-system' }),
              'styled-system',
            ),
            " library, the Box and Flex components have several style props for handling margins,\nwhile adhering to the Design System's spacing scale.",
          ),
          Object(a.b)(
            'p',
            null,
            'To add margin around a component, wrap it with the Box component and use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'm'),
            ' (margin) prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box m={3}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'The number ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '3'),
            ' in this example refers to step 3 on the spacing scale (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space'),
            ').\nThe spacing scale is an array of numbers that are used as pixel values in the Box component.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-js' }),
              '// theme.space\n;[0, 4, 8, 16, 32, 64, 128]\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To add margin in a particular direction use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mt'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mr'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mb'),
            ', or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'ml'),
            ' props.\nThese props are shorthands for ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-top'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-right'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-bottom'),
            ', and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-left'),
            ' respectively.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box\n  mt={3}\n  mb={4}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Shorthand Syntax'),
          Object(a.b)(
            'p',
            null,
            'Much like other libraries, including ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'http://tachyons.io' }), 'Tachyons'),
            ', ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://getbootstrap.com/docs/4.0/utilities/spacing/' }),
              'Bootstrap',
            ),
            ', and ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'http://basscss.com' }), 'Basscss'),
            ',\nthe Box component uses a shorthand syntax for margin and padding.\nThis has a little bit of a learning curve and requires some internalization,\nbut due to the heavy use of these properties it can help with development velocity.',
          ),
          Object(a.b)(
            'table',
            null,
            Object(a.b)(
              'thead',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'thead' },
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Shorthand'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Meaning'),
              ),
            ),
            Object(a.b)(
              'tbody',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'm'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mt'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mr'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-right'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mb'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-bottom'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'ml'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-left'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mx'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-left'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-right'),
                  ' (x-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'my'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                  ' (y-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'p'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pt'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pr'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-right'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pb'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-bottom'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pl'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-left'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'px'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-left'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-right'),
                  ' (x-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'py'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                  ' (y-axis)',
                ),
              ),
            ),
          ),
          Object(a.b)('h3', null, 'Padding'),
          Object(a.b)(
            'p',
            null,
            'The Box and Flex components can also set padding, using a similar API to the margin props.',
          ),
          Object(a.b)(
            'p',
            null,
            'To add padding to a Box, use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'p'),
            ' (padding) prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={2}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To add padding in a single direction, use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pt'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pr'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pb'),
            ', or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pl'),
            ' props.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box pt={2} pb={4}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Creating a responsive grid layout'),
          Object(a.b)(
            'p',
            null,
            'The Flex and Box components can be used to create a flexbox-based grid layout,\nusing the same principles used in other grid systems such as ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'https://getbootstrap.com' }), 'Bootstrap'),
            '.',
          ),
          Object(a.b)('p', null, 'To start, create a wrapping component with padding.'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)('code', Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }), '<Box p={4} />\n'),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add a Flex component with the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'wrap'),
            ' prop to set ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'flex-wrap: wrap'),
            '.\nThis will work similarly to a "row" in traditional grid systems.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box p={4}>\n  <Flex wrap />\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next add some Box components that will act as "columns",\nsetting the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' prop to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '1'),
            ' to make the Boxes fill the full-width of the container\nand stack on top of each other for small viewports.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex wrap>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            " prop's ",
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '#responsive-widths' }), 'responsive array'),
            ' feature\nto change the width of the Boxes at the ',
            Object(a.b)('em', { parentName: 'p' }, 'small'),
            ' breakpoint and up.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex wrap>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Here, the array value (',
            Object(a.b)('inlineCode', { parentName: 'p' }, '[ 1, 1/2 ]'),
            ') passed to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' sets its width to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '100%'),
            ' on small viewports and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '50%'),
            ' on viewports wider than the ',
            Object(a.b)('em', { parentName: 'p' }, 'small'),
            ' breakpoint.\nIf you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports.',
          ),
          Object(a.b)(
            'p',
            null,
            'Next, to add gutters to the grid, use a combination of padding and negative margins.\nAdd ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mx={-3}'),
            ' to the Flex component to set left and right margins to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '-theme.space[3]'),
            ' (-16px).\nThis is how many CSS grid systems compensate for gutters.\nAdd an equal amount of padding to the Box components (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'px={3}'),
            ') to create gutters between their child components.\nA bottom margin (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mb={4}'),
            ') can also be added to the Box components to handle spacing when stacked.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex\n    wrap\n    mx={-3}>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note that ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '* { box-sizing: border-box }'),
            ' should be set in your application to ensure that the padding and width work as expected in the above example.',
          ),
          Object(a.b)(
            'p',
            null,
            'Because each Box component in the example above adds left and right padding of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'px={3}'),
            ',\nthe total amount of space between their children will be double that amount.\nSince the spacing scale is based on powers of two, that amount of space is equal to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space[4]'),
            ',\nwhich is why the margin bottom is set to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '4'),
            '.',
          ),
          Object(a.b)('h3', null, 'Creating a two-column layout'),
          Object(a.b)(
            'p',
            null,
            'Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.\nUsing some of the same techniques from above, this can be achieved using the Flex and Box components.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex>\n  <Box px={3} width={1 / 4}>\n    <Sidebar />\n  </Box>\n  <Box px={3} width={3 / 4}>\n    <MainContent />\n  </Box>\n</Flex>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Creating a navbar'),
          Object(a.b)(
            'p',
            null,
            'The Flex and Box components are also well-suited to create things like navbars and toolbars.',
          ),
          Object(a.b)('p', null, 'Start with a Flex container and set its color to white with a blue background.'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex color="white" bg="blue" />\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add an Icon and some placeholder Text components for demonstration.\nIn a real application, these would likely be links and buttons.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Flex\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, "ml='auto'"),
            ' on the last item.\nSetting ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin: auto'),
            ' on a flex item will space it away from its sibling,\nin this case moving the item to the right side of the navbar.',
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add some padding and use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'align'),
            ' prop on the parent Flex component to control the layout.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Flex\n  p={2}\n  align='center'\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n",
            ),
          ),
          Object(a.b)('h3', null, 'Creating tiled layout'),
          Object(a.b)(
            'p',
            null,
            "Often you'll see cards representing an list of items arranged in a tiled layout.\nUsing the ",
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '#responsive-widths' }), 'responsive width'),
            ' feature of the Box component\nand the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'wrap'),
            ' prop on the Flex component, this sort of layout can be achieved with the following:',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex wrap>\n  {items.map(item => (\n    <Box key={item.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>\n      <ProductCard {...item} />\n    </Box>\n  ))}\n</Flex>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Responsive Widths'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/jxnblk/styled-system' }),
              'styled-system',
            ),
            ' library supports setting responsive widths that change per breakpoint with a mobile-first approach.',
          ),
          Object(a.b)(
            'p',
            null,
            'The Box component accepts number values to set percentage-based widths.\nAny number from 0–1 will be converted to a percentage.\nAny number greater than 1 will be converted to fixed pixel values.\nAnd strings may be passed to use other CSS units, such as ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'em'),
            ' or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'vw'),
            '.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              "// width: 100%\n<Box width={1} />\n\n// width: 50%\n<Box width={1/2} />\n<Box width={0.5} />\n\n// width: 128px\n<Box width={128} />\n\n// width: 2em\n<Box width='2em' />\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To set a width that changes at different breakpoints, pass an array to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box\n  width={[\n    1, // 100% at all viewport widths (xs breakpoint)\n    1 / 2, // 50% from the small (sm) breakpoint and up\n    1 / 3, // 33% from the medium (md) breakpoint and up\n    1 / 4, // 25% from the large (lg) breakpoint and up\n    1 / 8, // 12.5% from the x-large (xl) breakpoint and up\n  ]}\n/>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To skip setting a width at a particular breakpoint, use a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'null'),
            ' value in the array.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box\n  width={[\n    1, // 100% for all viewport widths\n    null, // skip the sm breakpoint (stays 100%)\n    1 / 2, // 50% from the md breakpoint and up\n  ]}\n/>\n',
            ),
          ),
        )
      }
      b.isMDXComponent = !0
    },
    457: function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return p
      })
      var a = n(0),
        o = n.n(a),
        r = n(89),
        l = n.n(r)
      n.d(t, 'a', function() {
        return l.a
      })
      n(458), n(27).default.enqueue
      var i = o.a.createContext({})
      function b(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          r = e.render,
          l = n ? n.data : t[a] && t[a].data
        return o.a.createElement(
          o.a.Fragment,
          null,
          l && r(l),
          !l && o.a.createElement('div', null, 'Loading (StaticQuery)'),
        )
      }
      var p = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          r = e.children
        return o.a.createElement(i.Consumer, null, function(e) {
          return o.a.createElement(b, { data: t, query: n, render: a || r, staticQueryData: e })
        })
      }
    },
    458: function(e, t, n) {
      var a
      e.exports = ((a = n(459)) && a.default) || a
    },
    459: function(e, t, n) {
      'use strict'
      n.r(t)
      n(14), n(12), n(13), n(9), n(17)
      var a = n(0),
        o = n.n(a),
        r = n(122)
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources
        return n
          ? o.a.createElement(
              r.a,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                      Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }),
                    )),
                    a.forEach(function(t) {
                      l(e, t, n[t])
                    })
                }
                return e
              })({ location: t, pageResources: n }, n.json),
            )
          : null
      }
    },
    460: function(e) {
      e.exports = { data: { site: { siteMetadata: { title: 'Priceline One Design System' } } } }
    },
    461: function(e) {
      e.exports = {
        data: {
          allMdx: {
            edges: [
              { node: { frontmatter: { title: 'Getting Started', path: '/Getting-Started/' } } },
              { node: { frontmatter: { title: 'Cheatsheet', path: '/Cheatsheet' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Absolute', path: '/components/Absolute' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Box', path: '/components/Box' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Button', path: '/components/Button' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Text', path: '/components/Text' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
            ],
          },
        },
      }
    },
    462: function(e, t, n) {
      'use strict'
      var a = n(460),
        o = n(0),
        r = n.n(o),
        l = n(463),
        i = n.n(l),
        b = n(457),
        p = n(90),
        c = n(6),
        s = n(72),
        d = c.d.div.withConfig({ displayName: 'Table__OverflowAuto', componentId: 'hhl231-0' })([
          'max-width:100%;overflow-x:auto;',
        ]),
        m = Object(c.d)(function(e) {
          return r.a.createElement(d, null, r.a.createElement('table', e))
        }).withConfig({ displayName: 'Table', componentId: 'hhl231-1' })(
          [
            'border-collapse:separate;border-spacing:0;max-width:100%;width:100%;',
            ' & th{text-align:left;background-color:#f6f8fa;vertical-align:bottom;}& td{vertical-align:top;&:first-child{min-width:128px;}}& th,& td{padding-left:8px;padding-right:8px;padding-top:12px;padding-bottom:12px;line-height:inherit;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:',
            ';}',
          ],
          s.h,
          function(e) {
            return e.theme.colors.borderGray
          },
        )
      m.defaultProps = { my: 3 }
      var u = {
          table: m,
          h2: Object(c.d)(s.d.h2).withConfig({ displayName: 'mdx__H2', componentId: 'vknmi5-0' })(
            [':not(:first-of-type){margin-top:', 'px;}'],
            function(e) {
              return e.theme.space[5]
            },
          ),
        },
        h = (n(19), n(12), n(13), n(9), n(17), n(461)),
        g = n(464),
        j = n.n(g),
        O = n(465),
        f = n.n(O),
        x = function() {
          return r.a.createElement(b.b, {
            query: '3595471886',
            render: function(e) {
              var t = j()(e, 'allMdx.edges', []).reduce(function(e, t) {
                var n = j()(t, 'node.frontmatter')
                if (n && n.path) {
                  var a = n.path,
                    o = n.title,
                    r = a.split('/').filter(function(e) {
                      return !!e
                    })
                  f()(e, r.join('.'), { title: o, path: a })
                }
                return e
              }, {})
              return r.a.createElement(
                'ul',
                null,
                Object.keys(t).map(function(e) {
                  return (function e(t, n) {
                    return t && t.path && t.title
                      ? r.a.createElement('li', { key: t.path }, r.a.createElement(b.a, { to: t.path }, t.title))
                      : r.a.createElement(
                          'li',
                          { key: n },
                          n,
                          r.a.createElement(
                            'ul',
                            null,
                            Object.keys(t).map(function(n) {
                              return e(t[n], n)
                            }),
                          ),
                        )
                  })(t[e], e)
                }),
              )
            },
            data: h,
          })
        },
        C = function(e) {
          return r.a.createElement(
            'svg',
            { width: '144px', height: '24px', viewBox: '0 0 144 24', xmlns: 'http://www.w3.org/2000/svg' },
            r.a.createElement(
              'g',
              {
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
                transform: 'translate(-32.000000, -24.000000)',
              },
              r.a.createElement(
                'g',
                { fill: '#007aff', fillRule: 'nonzero' },
                r.a.createElement('path', {
                  d:
                    'M142.218803,30.4153166 C143.224739,30.9913654 144.011421,31.7909434 144.578872,32.8140748 C145.146323,33.8372061 145.430044,34.9935851 145.430044,36.2832464 C145.430044,37.5901033 145.146323,38.7550799 144.578872,39.7782112 C144.011421,40.8013425 143.224739,41.6009206 142.218803,42.1769693 C141.212868,42.753018 140.073684,43.0410381 138.801218,43.0410381 C137.545948,43.0410381 136.415361,42.753018 135.409426,42.1769693 C134.40349,41.6009206 133.612509,40.8013425 133.036461,39.7782112 C132.460412,38.7550799 132.172392,37.5901033 132.172392,36.2832464 C132.172392,34.9935851 132.460412,33.8372061 133.036461,32.8140748 C133.612509,31.7909434 134.40349,30.9913654 135.409426,30.4153166 C136.415361,29.8392679 137.545948,29.5512479 138.801218,29.5512479 C140.073684,29.5512479 141.212868,29.8392679 142.218803,30.4153166 Z M135.938184,31.3051785 C135.095605,31.7866521 134.433589,32.4615647 133.952116,33.3299367 C133.470642,34.1983087 133.229909,35.1827354 133.229909,36.2832464 C133.229909,37.4009529 133.470642,38.3982761 133.952116,39.2752458 C134.433589,40.1522155 135.095605,40.831427 135.938184,41.3129005 C136.780763,41.7943741 137.735098,42.0351073 138.801218,42.0351073 C139.867338,42.0351073 140.825972,41.7943741 141.677148,41.3129005 C142.528325,40.831427 143.190341,40.1522155 143.663217,39.2752458 C144.136093,38.3982761 144.372527,37.4009529 144.372527,36.2832464 C144.372527,35.1827354 144.136093,34.1983087 143.663217,33.3299367 C143.190341,32.4615647 142.528325,31.7866521 141.677148,31.3051785 C140.825972,30.823705 139.867338,30.5829718 138.801218,30.5829718 C137.735098,30.5829718 136.780763,30.823705 135.938184,31.3051785 Z M158.683398,30.9569717 C159.603356,31.8941256 160.063328,33.1794688 160.063328,34.8130398 L160.063328,43.015245 L158.980018,43.015245 L158.980018,35.0193846 C158.980018,33.6437459 158.593126,32.5690442 157.819329,31.7952474 C157.045532,31.0214506 155.97083,30.634558 154.595192,30.634558 C153.064794,30.6689489 151.839634,31.1375189 150.919675,32.0402818 C149.999717,32.9430448 149.479561,34.1768023 149.359193,35.7415914 L149.359193,43.015245 L148.275883,43.015245 L148.275883,29.577041 L149.359193,29.577041 L149.359193,33.007523 C149.806275,31.907012 150.498383,31.0644459 151.435537,30.4797994 C152.372691,29.8951529 153.511875,29.5856388 154.853123,29.5512479 C156.486694,29.5512479 157.763439,30.0198178 158.683398,30.9569717 Z M172.38813,30.4411097 C173.34248,31.034354 174.064679,31.8640236 174.554751,32.9301437 C175.044822,33.9962637 175.281256,35.2171248 175.264061,36.5927636 L163.528201,36.5927636 C163.579788,37.6760791 163.846314,38.6304142 164.327787,39.4557975 C164.809261,40.2811807 165.462679,40.9217029 166.288063,41.3773833 C167.113446,41.8330636 168.041988,42.0609004 169.073717,42.0609004 C169.985078,42.0609004 170.831943,41.9018445 171.614337,41.5837281 C172.396732,41.2656116 173.063047,40.8056393 173.613303,40.2037973 L174.232337,40.900211 C173.596104,41.5880303 172.830916,42.1167836 171.936751,42.4864865 C171.042586,42.8561894 170.071056,43.0410381 169.022131,43.0410381 C167.766861,43.0410381 166.640573,42.753018 165.643235,42.1769693 C164.645897,41.6009206 163.867813,40.8013425 163.30896,39.7782112 C162.750107,38.7550799 162.470684,37.5987009 162.470684,36.3090395 C162.470684,35.0193782 162.754405,33.8587004 163.321856,32.8269713 C163.889307,31.7952422 164.667391,30.9913654 165.656132,30.4153166 C166.644872,29.8392679 167.766861,29.5512479 169.022131,29.5512479 C170.311792,29.5512479 171.433781,29.8478655 172.38813,30.4411097 Z M174.283923,35.638419 C174.18075,34.0908254 173.656296,32.852769 172.710544,31.9242129 C171.764792,30.9956567 170.535334,30.5313856 169.022131,30.5313856 C167.508928,30.5313856 166.253677,30.9999555 165.256339,31.9371094 C164.259001,32.8742633 163.691558,34.1080208 163.553994,35.638419 L174.283923,35.638419 Z M124.740383,34.8980615 C124.664429,34.3296581 124.559044,33.5807029 123.995088,32.9874617 C123.506136,32.4964375 122.76179,32.2375512 122.069662,32.2375512 C121.118342,32.2375512 120.450899,32.7027823 120.063536,33.1154719 C119.527113,33.7106237 119.397992,34.3306134 119.270769,34.8990168 L124.740383,34.8990168 L124.740383,34.8980615 Z M128.668137,39.8837718 C128.207668,40.5820961 127.744351,41.2536719 127.051273,41.9013653 C125.895828,42.9856307 124.149843,43.8129204 121.99086,43.8129204 C118.010888,43.8129204 115.211045,41.2546272 115.211045,36.8344545 C115.211045,33.5797476 116.803224,29.3974446 122.095296,29.3974446 C122.889962,29.3974446 125.202751,29.4738686 126.925001,31.3319269 C128.668137,33.2186443 128.771624,35.8533615 128.821943,37.3761095 L119.245135,37.3761095 C119.215703,39.0574374 120.167972,40.73781 122.299422,40.73781 C124.456506,40.73781 125.202751,39.3153684 125.688854,38.3591132 L128.669087,39.8828165 L128.668137,39.8837718 Z M105.788043,31.0462922 C106.172558,30.6326474 106.428902,30.3240855 107.121979,29.9878199 C107.739103,29.7308442 108.609722,29.4996617 109.561991,29.4996617 C110.360454,29.4996617 111.255758,29.653465 111.951683,30.0403614 C113.363472,30.7902719 113.720455,32.0054134 113.720455,34.0984755 L113.720455,43.3228516 L109.794599,43.3228516 L109.794599,35.7263066 C109.794599,34.5102098 109.767066,34.0736377 109.614209,33.7106237 C109.303749,32.9874617 108.611621,32.6769892 107.84164,32.6769892 C105.76051,32.6769892 105.76051,34.3564065 105.76051,36.0386896 L105.76051,43.3247622 L101.808071,43.3247622 L101.808071,29.8617203 L105.788992,29.8617203 L105.788992,31.0482028 L105.788043,31.0462922 Z M99.3205878,26.4407913 C99.3205878,27.6205867 98.3692681,28.5768419 97.1976827,28.5768419 C96.0241984,28.5768419 95.0728787,27.6196314 95.0728787,26.4407913 C95.0728787,25.2600406 96.0241984,24.3037854 97.1976827,24.3037854 C98.3692681,24.3037854 99.3205878,25.2600406 99.3205878,26.4407913 Z M95.2304826,29.8082235 L99.1354507,29.8082235 L99.1354507,43.3228516 L95.2304826,43.3228516 L95.2304826,29.8082235 Z M92.5578627,24 L92.5578627,43.3228516 L88.6044741,43.3228516 L88.6044741,24 L92.5578627,24 L92.5578627,24 Z M82.8073101,34.8980615 C82.730407,34.3296581 82.6278695,33.5807029 82.0601158,32.9874617 C81.5721135,32.4964375 80.8239698,32.2375512 80.1289937,32.2375512 C79.1767246,32.2375512 78.5111805,32.7027823 78.1276145,33.1154719 C77.5883434,33.7106237 77.4592222,34.3306134 77.3310503,34.8990168 L82.8082595,34.8990168 L82.8073101,34.8980615 Z M86.738862,39.8837718 C86.2774435,40.5820961 85.8160249,41.2536719 85.1219982,41.9013653 C83.966553,42.9856307 82.2129726,43.8129204 80.0511412,43.8129204 C76.0702194,43.8129204 73.2703771,41.2546272 73.2703771,36.8344545 C73.2703771,33.5797476 74.8635054,29.3974446 80.1527292,29.3974446 C80.9521416,29.3974446 83.2696781,29.4738686 84.992877,31.3319269 C86.7369632,33.2186443 86.8404501,35.8533615 86.8945671,37.3761095 L77.3025677,37.3761095 C77.2769333,39.0574374 78.2282531,40.73781 80.3587536,40.73781 C82.5234332,40.73781 83.2696781,39.3153684 83.7595793,38.3591132 L86.7379126,39.8828165 L86.738862,39.8837718 Z M71.2803909,39.2198384 C71.2689979,39.183537 71.2053867,39.1959559 71.1788029,39.2389444 C71.0990515,39.3803288 71.0003118,39.5226685 70.8673928,39.6774271 C70.0451943,40.6069339 69.0672908,40.6069339 68.8631653,40.6069339 C66.7573498,40.6069339 65.8829331,38.3600685 65.8829331,36.5755682 C65.8829331,34.9486924 66.6035436,32.4945269 68.7340441,32.4945269 C69.3492688,32.4945269 69.8372712,32.7008717 70.2236855,32.9588027 C70.763906,33.3495204 71.0316427,33.7411933 71.2386164,34.1462405 C71.2623519,34.1901843 71.3259631,34.2092903 71.3354573,34.1748995 C71.6554122,33.0705728 72.209874,32.0130558 73.0567574,31.1723918 C71.5158473,29.7289336 69.7147959,29.4729133 68.5546035,29.4729133 C64.0856793,29.4729133 61.8260576,32.7772957 61.8260576,36.7045337 C61.8260576,42.2099272 65.9104663,43.7603789 68.4777004,43.7603789 C69.9920268,43.7603789 71.3003288,43.2693548 72.329501,42.5452374 C72.557362,42.3828364 72.7576899,42.2147037 72.9399787,42.0465709 C72.1775937,41.3129005 71.6079411,40.3633324 71.2813404,39.2188831 L71.2803909,39.2198384 Z M60.2946417,26.4407913 C60.2946417,27.6205867 59.3433219,28.5768419 58.1688883,28.5768419 C56.9973029,28.5768419 56.047882,27.6196314 56.047882,26.4407913 C56.047882,25.2600406 56.9973029,24.3037854 58.1688883,24.3037854 C59.3433219,24.3037854 60.2946417,25.2600406 60.2946417,26.4407913 L60.2946417,26.4407913 Z M56.1969411,29.8082235 L60.1019092,29.8082235 L60.1019092,43.3228516 L56.1969411,43.3228516 L56.1969411,29.8082235 Z M50.6058014,31.2277992 C51.4792686,30.4788441 52.4305884,29.8846475 54.4860846,29.6802134 L54.4860846,33.1928512 L53.1739849,33.399196 C51.2751431,33.7364168 50.7083389,34.0220515 50.7083389,35.7263066 L50.7083389,43.3228516 L46.7540008,43.3228516 L46.7540008,29.8082235 L50.6058014,29.8082235 L50.6058014,31.2277992 L50.6058014,31.2277992 Z M38.6506934,32.3397683 C37.9300829,32.3397683 37.185737,32.6502408 36.6208315,33.4259444 C36.0540272,34.1739442 35.7995824,35.3384548 35.7995824,36.6032719 C35.7995824,38.3084823 36.2372655,39.3688652 36.7490033,39.9363133 C37.2113713,40.4273375 37.8797636,40.7110616 38.5215722,40.7110616 C40.4460483,40.7110616 41.2948306,38.6179994 41.2948306,36.4981889 C41.2948306,34.7175099 40.8077777,32.8317478 39.1890151,32.4161923 C39.0086251,32.3665167 38.8291845,32.338813 38.649744,32.338813 L38.6506934,32.3397683 Z M35.5185539,31.1513752 C35.6457763,30.9966166 35.7748975,30.8428134 35.9021199,30.7128926 C36.5705122,30.0651992 37.7772262,29.5273654 39.267817,29.5273654 C42.5537627,29.5273654 45.0982107,32.0312065 45.0982107,36.5268479 C45.0982107,39.2895753 43.8895979,43.5826931 39.2915525,43.5826931 C37.80381,43.5826931 37.0319308,43.091669 35.9780736,42.4449309 L35.9780736,48 L32,48 L32,29.8856028 L35.5185539,29.8856028 L35.5185539,31.1513752 L35.5185539,31.1513752 Z',
                }),
              ),
            ),
          )
        }
      var N = c.d.div.withConfig({ displayName: 'Container__Wrapper', componentId: 'sc-99vn9v-0' })(
          ['max-width:1280px;margin:0 auto;padding:1.5rem 1rem;', ''],
          function(e) {
            return e.isDebug && 'background-color: orange;'
          },
        ),
        w = function(e) {
          var t = e.children,
            n = (function(e, t) {
              if (null == e) return {}
              var n,
                a,
                o = {},
                r = Object.keys(e)
              for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n])
              return o
            })(e, ['children'])
          return r.a.createElement(N, n, t)
        }
      w.defaultProps = { children: null, isDebug: !1 }
      var y = Object(c.d)(s.c).withConfig({ displayName: 'Header__HeaderInner', componentId: 'sc-16lf0uu-0' })([
          'flex-flow:nowrap row;',
        ]),
        v = Object(c.d)(function(e) {
          return r.a.createElement(b.a, e)
        }).withConfig({ displayName: 'Header__HeaderLink', componentId: 'sc-16lf0uu-1' })(
          ['color:', ';text-decoration:none;:hover{text-decoration:underline;}'],
          function(e) {
            return e.theme.colors.white
          },
        ),
        B = function(e) {
          var t = e.title
          return r.a.createElement(
            s.a,
            { bg: 'blue' },
            r.a.createElement(
              w,
              null,
              r.a.createElement(
                y,
                null,
                r.a.createElement(v, { to: '/' }, r.a.createElement(s.d.h1, { color: 'white', m: 3 }, t)),
              ),
            ),
          )
        }
      B.defaultProps = { title: null }
      var L = n(123),
        k = n(73)
      function T() {
        var e = (function(e, t) {
          t || (t = e.slice(0))
          return (e.raw = t), e
        })([
          '\n  ',
          '\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ',
          ';\n  }\n\n  body {\n    background: ',
          ';\n  }\n\n  h1 {\n    ',
          '\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ',
          '\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ',
          '\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ',
          '\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ',
          '\n    font-size: 1rem;\n  }\n\n  h6 {\n    ',
          '\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ',
          ';\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ',
          ';\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ',
          ';\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ',
          ';\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ',
          ';\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ',
          ';\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n',
        ])
        return (
          (T = function() {
            return e
          }),
          e
        )
      }
      var E = '\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n',
        F = Object(c.b)(
          T(),
          '\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n',
          k.a.BLACK,
          k.a.WHITE,
          E,
          E,
          E,
          E,
          E,
          E,
          k.a.BLUE,
          Object(L.a)(0.2, k.a.BLUE),
          Object(L.b)(k.a.BLACK, 0.15),
          Object(L.b)(k.a.BLACK, 0.15),
          Object(L.b)(k.a.BLACK, 0.075),
          Object(L.b)(k.a.BLACK, 0.075),
        ),
        S = Object(c.d)(s.c).withConfig({ displayName: 'Layout__ColumnWrapper', componentId: 'sc-10o483p-0' })(['']),
        M = Object(c.d)(s.a).withConfig({ displayName: 'Layout__LeftColumn', componentId: 'sc-10o483p-1' })(['']),
        z = Object(c.d)(s.a).withConfig({ displayName: 'Layout__MainColumn', componentId: 'sc-10o483p-2' })([
          'flex-grow:1;',
        ]),
        _ = function(e) {
          var t = e.children
          return r.a.createElement(
            s.f,
            { theme: s.i },
            r.a.createElement(
              p.a,
              { components: u },
              r.a.createElement(b.b, {
                query: '4130953669',
                render: function(e) {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(F, null),
                    r.a.createElement(
                      i.a,
                      {
                        title: e.site.siteMetadata.title,
                        meta: [
                          { name: 'description', content: 'Sample' },
                          { name: 'keywords', content: 'sample, something' },
                        ],
                      },
                      r.a.createElement('html', { lang: 'en' }),
                      r.a.createElement('link', {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700',
                      }),
                    ),
                    r.a.createElement(B, { title: e.site.siteMetadata.title }),
                    r.a.createElement(
                      w,
                      null,
                      r.a.createElement(
                        S,
                        null,
                        r.a.createElement(M, { mr: 5 }, r.a.createElement(C, null), r.a.createElement(x, null)),
                        r.a.createElement(z, null, t),
                      ),
                    ),
                  )
                },
                data: a,
              }),
            ),
          )
        }
      n.d(t, 'a', function() {
        return _
      })
      t.b = _
    },
  },
])
//# sourceMappingURL=component---src-pages-components-layout-md-73bea5f0054f5a281d37.js.map