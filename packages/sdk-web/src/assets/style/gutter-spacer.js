const LIMIT = 30
const multiple = 5
const sides = ['top', 'right', 'bottom', 'left']

let gutterSpacer = ''

const factorySides = (index) => {

  sides.forEach((item) => {
    gutterSpacer += `
      .pd-${item}-${index}{
        padding-${item}: ${index}px;
      }

      .mg-${item}-${index}{
        margin-${item}: ${index}px;
      }
    `
  })
}

for (let index = 5; index <= LIMIT; index += multiple) {
  gutterSpacer += `
    .pd-${index}{
      padding: ${index}px;
    }

    .pd-vertical-${index}{
      padding: ${index}px 0px;
    }

    .pd-horizontal-${index}{
      padding: 0px ${index}px;
    }

    .mg-${index}{
      margin: ${index}px;
    }

    .mg-vertical-${index}{
      margin: ${index}px 0px;
    }

    .mg-horizontal-${index}{
      margin: 0px ${index}px;
    }
  `
  factorySides(index)
}

export default gutterSpacer
