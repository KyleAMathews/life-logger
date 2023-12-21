import * as React from 'react'
import * as styles from '../styles/base-components.css'
console.log({ styles })

const Styleguide = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h1}>my h1</h1>
      <h2 className={styles.h2}>my h2</h2>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum
        porttitor orci viverra imperdiet. Aliquam pulvinar sed tellus sed
        dignissim. Aliquam fringilla urna nec eros faucibus efficitur. Etiam
        euismod tortor quis lectus porttitor maximus in vel mauris. Quisque
        eleifend id libero sit amet molestie. Nulla urna leo, porta in nulla et,
        posuere finibus tellus. Duis sodales ante nec est ultrices imperdiet.
      </p>
      <p className={styles.p}>
        Sed at dapibus ipsum. Duis ultricies sodales urna, quis molestie sem
        varius rutrum. Sed volutpat efficitur dolor, a lobortis odio pretium in.
        Etiam fermentum nunc non tellus varius scelerisque. In hac habitasse
        platea dictumst. In nec pulvinar enim. Quisque suscipit, ex id maximus
        laoreet, est erat cursus dui, eu sagittis purus ipsum vel sapien. Donec
        tristique, urna eu tristique consequat, massa massa lacinia lorem, eget
        condimentum purus est iaculis metus. Proin efficitur lobortis risus et
        luctus. Sed pulvinar hendrerit turpis at egestas. Suspendisse aliquam
        lacus varius tempus rutrum. Donec id erat sodales tortor interdum
        hendrerit. Aliquam pharetra rutrum dignissim. Praesent vehicula non nisl
        a tincidunt. Duis sit amet tempus elit. Duis vitae mauris posuere,
        laoreet lorem quis, scelerisque sem. In tincidunt consequat metus, sit
        amet vulputate lectus fringilla fringilla. Nullam lacus eros, iaculis et
        tristique et, venenatis vitae metus.
      </p>
      <label className={styles.label}>my label</label>
      <p className={styles.boldText}>my bold text</p>
    </div>
  )
}

export default Styleguide
